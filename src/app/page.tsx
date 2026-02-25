import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

const services = [
  {
    title: "Application Strategy",
    text: "Long-range planning from course rigor and activities to final school list optimization.",
  },
  {
    title: "Essay Development",
    text: "Narrative architecture, topic ideation, and high-touch editing for authentic personal statements.",
  },
  {
    title: "Interview & Profile Prep",
    text: "Mock interviews, concise positioning, and evidence-backed accomplishments framing.",
  },
  {
    title: "STEM/Research Positioning",
    text: "Distinctive guidance for competition, Olympiad, research, and maker portfolio storytelling.",
  },
];

const process = [
  "Diagnostic + goal alignment",
  "Profile audit + strategy blueprint",
  "Narrative and activities execution",
  "Essay + application refinement",
  "Submission readiness and interview prep",
];

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Axiom Admissions</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Strategic admissions advising for students targeting MIT, Stanford, and the Ivy League.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            We combine analytical rigor with compelling storytelling to help exceptional students present their strongest, most authentic applications.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700">
              Book a Consult
            </Link>
            <Link href="/services" className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100">
              View Services
            </Link>
          </div>
          <ul className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
            <li>✓ Selective-school specialization</li>
            <li>✓ Data-informed strategy process</li>
            <li>✓ High-touch, limited client roster</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight">What We Do</h2>
        <p className="mt-4 max-w-4xl text-slate-600">
          Axiom Admissions advises high-achieving students with ambitious goals. We engineer a clear admissions strategy, identify the stories only you can tell, and execute every component with precision.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight">Services Overview</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-slate-600">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Our Process</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-5">
            {process.map((step, index) => (
              <li key={step} className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Step {index + 1}</p>
                <p className="mt-2 text-sm text-slate-700">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight">Results Highlights</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-6">
            <p className="text-4xl font-semibold">92%</p>
            <p className="mt-2 text-sm text-slate-600">Admit rate at Top-20 universities among fully advised clients.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6">
            <p className="text-4xl font-semibold">$3.2M+</p>
            <p className="mt-2 text-sm text-slate-600">Combined merit aid offers earned by recent cohorts.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6">
            <p className="text-4xl font-semibold">40+</p>
            <p className="mt-2 text-sm text-slate-600">Offers from MIT, Stanford, and Ivy League institutions.</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-slate-500">Examples shown for illustration; outcomes vary.</p>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Testimonials</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {["Parent of MIT admit", "Stanford engineering admit", "Ivy League humanities admit"].map((label) => (
              <blockquote key={label} className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-slate-600">
                  “Axiom gave us structure, confidence, and a thoughtful strategy. Every piece of the application felt intentional.”
                </p>
                <footer className="mt-4 text-sm font-medium text-slate-800">— {label}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>
        <div className="mt-8 space-y-4">
          {[
            ["When should we start?", "Most families begin in 9th-11th grade for maximum strategic runway."],
            ["Do you only work with STEM applicants?", "No. We support STEM, humanities, arts, and interdisciplinary applicants."],
            ["Can you help with early strategy and long-term planning?", "Yes. We build multi-year plans covering academics, activities, and positioning."],
            ["How personalized is advising?", "Highly personalized. We keep a limited roster for deep, 1:1 engagement."],
            ["Do you guarantee admissions?", "No. Ethical advising cannot guarantee outcomes; we optimize every controllable factor."],
            ["Do you offer interview prep?", "Yes, including school-specific mocks and feedback loops."],
          ].map(([q, a]) => (
            <article key={q} className="rounded-lg border border-slate-200 p-5">
              <h3 className="font-semibold text-slate-900">{q}</h3>
              <p className="mt-2 text-sm text-slate-600">{a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Contact Axiom Admissions</h2>
          <p className="mt-3 text-slate-600">Share your goals and timeline. We&apos;ll recommend the best-fit advising pathway.</p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
