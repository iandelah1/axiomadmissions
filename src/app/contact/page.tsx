import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Contact</h1>
      <p className="mt-4 max-w-3xl text-slate-600">
        Ready to build a high-impact admissions strategy? Share your profile and goals, and we&apos;ll recommend the best next step.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <ContactForm />
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-semibold">Prefer to schedule first?</h2>
          <p className="mt-3 text-slate-600">
            Book a consultation to discuss your timeline, target schools, and advising options.
          </p>
          <Link
            href="mailto:hello@axiomadmissions.org"
            className="mt-6 inline-block rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
          >
            Schedule via Email
          </Link>
          <p className="mt-4 text-sm text-slate-500">hello@axiomadmissions.org</p>
        </div>
      </div>
    </div>
  );
}
