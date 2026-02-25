import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container, Section } from "@/components/ui/Container";

export const metadata = { title: "Services" };

const offerings = [
  {
    title: "Comprehensive Admissions Program",
    description: "End-to-end advisory for highly selective admissions cycles.",
    deliverables: ["Strategic school-list architecture", "Academic + extracurricular roadmap", "Application calendar orchestration"],
  },
  {
    title: "Essay Intensive",
    description: "Premium narrative support for personal statements and supplements.",
    deliverables: ["Narrative blueprint creation", "Line-level draft coaching", "Voice and authenticity calibration"],
  },
  {
    title: "STEM Candidate Positioning",
    description: "Advanced profile guidance for research-heavy and technical applicants.",
    deliverables: ["Research/project framing", "Honors and activities optimization", "Program-fit articulation"],
  },
  {
    title: "Interview Readiness",
    description: "Structured prep for school-specific interview performance.",
    deliverables: ["Live mock interviews", "Response strategy coaching", "Communication and confidence feedback"],
  },
  {
    title: "Final Application QA",
    description: "Comprehensive quality control before submit.",
    deliverables: ["Content consistency checks", "Final proofreading", "Submission readiness checklist"],
  },
  {
    title: "Scholarship Strategy",
    description: "Merit-aid optimization and fit-based scholarship positioning.",
    deliverables: ["Merit targeting map", "Narrative alignment for aid committees", "Timing and submission strategy"],
  },
];

const icon = (
  <svg viewBox="0 0 24 24" className="h-5 w-5 text-mit-red" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
    <path d="M4 12h16M12 4l8 8-8 8" />
  </svg>
);

export default function ServicesPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-mit-silver/20 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-40" />
        <Container className="relative py-20 sm:py-24">
          <Badge>Services</Badge>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl">Premium advisory services across the full admissions lifecycle.</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">Designed for students targeting MIT, Stanford, Ivy League, and other top programs.</p>
        </Container>
      </section>

      <Section className="bg-slate-50/75">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((offering) => (
              <Card key={offering.title} className="card-lift border-mit-silver/25 hover:border-mit-red/35 hover:shadow-premium">
                <div className="mb-4 inline-flex rounded-full bg-mit-blush p-2">{icon}</div>
                <h2 className="text-xl font-semibold">{offering.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{offering.description}</p>
                <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-slate-600">
                  {offering.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
