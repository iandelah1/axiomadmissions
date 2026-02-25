"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type FormValues = { name: string; email: string; grade: string; message: string };
type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = { name: "", email: "", grade: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = "Please share your name.";
    if (!values.email.trim()) next.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Please use a valid email format.";
    if (!values.grade.trim()) next.grade = "Current grade is required.";
    if (!values.message.trim()) next.message = "Please add a short message.";
    else if (values.message.trim().length < 20) next.message = "Use at least 20 characters so we can help better.";
    return next;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setIsSubmitted(true);
      setValues(initialValues);
    }
  };

  const inputClass = (field: keyof FormValues) =>
    `mt-1 w-full rounded-md border px-3 py-2 text-sm outline-none transition ${errors[field] ? "border-red-400 bg-red-50/40" : "border-mit-silver/35 focus:border-mit-red"}`;

  return (
    <Card className="relative overflow-hidden border-mit-silver/25 shadow-premium">
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgba(117,0,20,0.2),_transparent_72%)]" />
      <div className="relative">
        <h3 className="text-2xl font-semibold">Start your strategy call</h3>
        <p className="mt-2 text-sm text-slate-600">Tell us your goals and timelines. We&apos;ll recommend a best-fit advisory path.</p>
        <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
          {(["name", "email", "grade"] as const).map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block text-sm font-medium capitalize text-slate-700">{field}</label>
              <input
                id={field}
                type={field === "email" ? "email" : "text"}
                value={values[field]}
                onChange={(e) => setValues({ ...values, [field]: e.target.value })}
                className={inputClass(field)}
              />
              {errors[field] && <p className="mt-1 text-xs text-red-600">{errors[field]}</p>}
            </div>
          ))}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
            <textarea
              id="message"
              rows={4}
              value={values.message}
              onChange={(e) => setValues({ ...values, message: e.target.value })}
              className={inputClass("message")}
            />
            {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
          </div>
          <Button type="submit">Submit Inquiry</Button>
        </form>
        {isSubmitted && <p className="mt-4 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">Thanks! We received your message and will follow up shortly.</p>}
      </div>
    </Card>
  );
}
