import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container, Section } from "@/components/ui/Container";

export const metadata = { title: "Services" };

const offerings = [
  {
    title: "Comprehensive Admissions Program",
    description: "End-to-end advisory for highly selective admissions cycles.",
    deliverables: ["Strategic school-list design", "Long-range academics + activities plan", "Application timeline management", "Full essay coaching across all prompts"],
  },
  {
    title: "Essay Intensive",
    description: "Focused narrative coaching for personal statements and supplements.",
    deliverables: ["Narrative architecture", "Line-by-line draft feedback", "Voice and authenticity calibration", "Final polish and coherence checks"],
  },
  {
    title: "STEM Candidate Positioning",
    description: "Specialized support for research and technical applicants.",
    deliverables: ["Research and project framing", "Honors and activities prioritization", "Technical profile refinement", "Program-fit strategy for top STEM schools"],
  },
  {
    title: "Interview + Final Review",
    description: "Confidence-building prep and quality assurance before submit.",
    deliverables: ["Mock interviews", "Communication feedback", "Final application audit", "Submission readiness checklist"],
  },
];

export default function ServicesPage() {
  return (
    <Section className="bg-slate-50/50">
      <Container>
        <Badge>Services</Badge>
        <h1 className="mt-4 text-4xl sm:text-5xl">Premium advising offerings</h1>
        <p className="mt-4 max-w-3xl text-slate-600">Modular and comprehensive options tailored to goals, timeline, and competitiveness.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {offerings.map((offering) => (
            <Card key={offering.title} className="hover:border-mit-red/30">
              <h2 className="text-xl font-semibold">{offering.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{offering.description}</p>
              <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-mit-silver">Deliverables</h3>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-600">
                {offering.deliverables.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
