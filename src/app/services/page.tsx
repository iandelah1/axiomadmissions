const offerings = [
  {
    title: "Comprehensive Admissions Program",
    description: "End-to-end advising for students targeting highly selective colleges.",
    deliverables: [
      "Strategic school list design",
      "Academic and extracurricular roadmap",
      "Application calendar and milestone management",
      "Full essay coaching across Common App + supplements",
    ],
  },
  {
    title: "Essay Intensive",
    description: "High-touch narrative support for personal statements and supplements.",
    deliverables: [
      "Narrative theme development",
      "Detailed feedback on each essay draft",
      "Tone and authenticity calibration",
      "Final polish for clarity and impact",
    ],
  },
  {
    title: "STEM Candidate Positioning",
    description: "Specialized guidance for research, engineering, and competition-heavy profiles.",
    deliverables: [
      "Research/project framing",
      "Activities and honors prioritization",
      "Technical resume refinement",
      "Program-fit articulation for top STEM schools",
    ],
  },
  {
    title: "Interview & Final Review",
    description: "Finish strong with strategic interview prep and final application QA.",
    deliverables: [
      "Live mock interviews",
      "Answer strategy and communication coaching",
      "Final audit of all application components",
      "Submission readiness checklist",
    ],
  },
];

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Services</h1>
      <p className="mt-4 max-w-3xl text-slate-600">
        We offer modular and comprehensive advisory pathways tailored to your goals, timeline, and target institutions.
      </p>

      <div className="mt-10 space-y-6">
        {offerings.map((offering) => (
          <section key={offering.title} className="rounded-xl border border-slate-200 p-6">
            <h2 className="text-2xl font-semibold">{offering.title}</h2>
            <p className="mt-2 text-slate-600">{offering.description}</p>
            <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-slate-700">Deliverables</h3>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-600">
              {offering.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
