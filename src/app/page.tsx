import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container, Section } from "@/components/ui/Container";

const serviceCards = [
  { title: "Application Architecture", copy: "Engineer school lists and milestone calendars for top-tier cycles." },
  { title: "Essay Strategy", copy: "Craft authentic narratives that are memorable and intellectually sharp." },
  { title: "Academic & Activity Positioning", copy: "Translate rigor, impact, and leadership into admissions language." },
  { title: "Interview Readiness", copy: "Mock interviews and messaging polish tailored to each institution." },
  { title: "STEM Specialist Support", copy: "Profile optimization for Olympiad, research, maker, and technical applicants." },
  { title: "Final QA", copy: "Comprehensive review to ensure every submission is submission-perfect." },
];

const faqItems = [
  { q: "When should we begin?", a: "Most families start in grades 9-11 to maximize strategic runway." },
  { q: "Do you guarantee admissions?", a: "No ethical advisor can promise admission. We optimize every controllable variable." },
  { q: "Can you support humanities applicants?", a: "Yes. We advise STEM, humanities, social sciences, and interdisciplinary students." },
  { q: "How personalized is support?", a: "Very personalized. We keep a limited roster to provide deep one-on-one support." },
  { q: "Do you help with scholarships?", a: "Yes, including merit strategy and fit-based opportunity targeting." },
  { q: "What about interview prep?", a: "We offer school-specific mock interviews and confidence-building feedback." },
];

const icon = (
  <svg viewBox="0 0 24 24" className="h-5 w-5 text-mit-red" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <section className="relative border-b border-mit-silver/20 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-45" />
        <div className="pointer-events-none absolute right-[-20rem] top-[-14rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(117,0,20,0.2),_transparent_70%)]" />
        <Container className="relative py-20 sm:py-28">
          <Badge>Elite admissions strategy</Badge>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl">Precision guidance for applicants targeting MIT, Stanford, Ivy, and beyond.</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600">Axiom Admissions blends analytical planning with premium narrative coaching so exceptional students stand out authentically.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Book a Consult</Button>
            <Button href="/services" variant="secondary">View Services</Button>
          </div>
          <ul className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
            <li>✓ Top-university specialization</li>
            <li>✓ High-touch advisory model</li>
            <li>✓ Data-informed admissions process</li>
          </ul>
          <div className="mt-10 grid gap-3 rounded-2xl border border-mit-silver/20 bg-white/80 p-4 backdrop-blur sm:grid-cols-3">
            {[
              ["92%", "Top-20 admit outcomes"],
              ["$3.2M+", "Merit aid secured"],
              ["40+", "MIT/Stanford/Ivy offers"],
            ].map(([stat, label]) => (
              <div key={stat}><p className="text-3xl font-semibold text-mit-red">{stat}</p><p className="text-sm text-slate-600">{label}</p></div>
            ))}
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <Badge>What we do</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl">Strategy-first admissions advisory for high achievers.</h2>
          <p className="mt-4 max-w-4xl text-slate-600">We convert ambition into a concrete application system: profile diagnostics, positioning, essays, and final submission quality control.</p>
        </Container>
      </Section>

      <Section className="relative bg-slate-50/70">
        <Container>
          <Badge>Services</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl">High-impact support across the full application lifecycle.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((card) => (
              <Card key={card.title} className="group hover:-translate-y-0.5 hover:border-mit-red/30 hover:shadow-premium">
                <div className="mb-4 inline-flex rounded-full bg-mit-blush p-2">{icon}</div>
                <h3 className="font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{card.copy}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Badge>Process</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl">A proven five-step operating framework.</h2>
          <ol className="mt-8 space-y-4">
            {[
              "Diagnostic and goal alignment",
              "Profile audit and strategy blueprint",
              "Narrative and activities execution",
              "Essay and application refinement",
              "Submission readiness and interview prep",
            ].map((step, i) => (
              <li key={step} className="flex items-start gap-4 rounded-xl border border-mit-silver/25 p-4">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mit-red text-sm font-semibold text-white">{i + 1}</span>
                <p className="pt-1 text-slate-700">{step}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="bg-slate-50/70">
        <Container>
          <Badge>Results</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl">Outcomes with polish and perspective.</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              ["92%", "Top-20 admit rate"],
              ["$3.2M+", "Combined merit aid"],
              ["40+", "Selective-school offers"],
            ].map(([v, l]) => (
              <Card key={v} className="border-mit-red/20"><p className="text-4xl font-semibold text-mit-red">{v}</p><p className="mt-2 text-sm text-slate-600">{l}</p></Card>
            ))}
          </div>
          <p className="mt-4 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">Examples shown for illustration only; outcomes vary by applicant and admissions cycle.</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <Badge>Testimonials</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl">Families describe a high-trust, high-performance experience.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["AL", "Parent of MIT admit"],
              ["JR", "Stanford engineering admit"],
              ["SK", "Ivy League humanities admit"],
            ].map(([initials, role]) => (
              <Card key={initials} className="bg-white">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-mit-blush font-semibold text-mit-red">{initials}</div>
                <p className="text-slate-600">“Axiom turned a stressful process into a clear system. The strategy and coaching were elite.”</p>
                <p className="mt-4 text-sm font-medium text-slate-800">{role}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50/70">
        <Container>
          <Badge>FAQ</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl">Common questions</h2>
          <div className="mt-8"><FaqAccordion items={faqItems} /></div>
        </Container>
      </Section>

      <Section className="relative border-t border-mit-silver/20">
        <Container className="max-w-3xl">
          <Badge>Contact</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl">Build your admissions roadmap.</h2>
          <p className="mt-3 text-slate-600">Tell us your goals, timeline, and target programs. We&apos;ll suggest next steps.</p>
          <div className="mt-8"><ContactForm /></div>
        </Container>
      </Section>
    </div>
  );
}
