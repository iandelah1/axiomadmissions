import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container, Section } from "@/components/ui/Container";
import { ProfileCard } from "@/components/ui/ProfileCard";
import { StatCard } from "@/components/ui/StatCard";

const faqItems = [
  { q: "When should we begin?", a: "Most families start in grades 9-11 for maximum strategic runway and profile development time." },
  { q: "Do you guarantee admissions?", a: "No. Ethical advising cannot guarantee outcomes. We optimize every controllable variable with rigor." },
  { q: "Can you support non-STEM applicants?", a: "Yes. We advise STEM, humanities, social science, and interdisciplinary students." },
  { q: "How personalized is advising?", a: "Highly personalized. We intentionally cap roster size to provide deep, one-on-one support." },
  { q: "Do you support scholarship strategy?", a: "Yes, including merit positioning and fit-aligned scholarship pathways." },
  { q: "Is interview prep included?", a: "Yes, with school-specific mock interviews and tactical communication feedback." },
];

const serviceCards = [
  ["Application Strategy", "Target-school architecture", "Timeline + milestone management"],
  ["Essay Development", "Narrative positioning", "Line-by-line draft refinement"],
  ["Activities Positioning", "Impact framing", "Honors prioritization"],
  ["STEM Candidate Support", "Research storytelling", "Technical profile narrative"],
  ["Interview Readiness", "Mock interview rounds", "School-fit response strategy"],
  ["Final Submission QA", "Comprehensive quality review", "Last-mile polish"],
] as const;

const star = (
  <svg viewBox="0 0 20 20" className="h-4 w-4 fill-mit-red" aria-hidden>
    <path d="M10 1.5l2.5 5.08 5.6.82-4.05 3.95.96 5.58L10 14.3 5 16.93l.96-5.58L1.9 7.4l5.6-.82L10 1.5z" />
  </svg>
);

const simpleIcon = (
  <svg viewBox="0 0 24 24" className="h-5 w-5 text-mit-red" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate overflow-hidden border-b border-mit-silver/20 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-45" />
        <div className="pointer-events-none absolute -left-44 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(117,0,20,0.14),_transparent_70%)]" />
        <div className="pointer-events-none absolute right-[-12rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(117,0,20,0.2),_transparent_72%)]" />
        <Container className="relative py-20 sm:py-28">
          <Badge>Axiom Admissions</Badge>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.05] sm:text-7xl">
            Elite admissions strategy for
            <br className="hidden sm:block" />
            MIT, Stanford, Ivy, and top universities.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
            Built for high-achieving students who want precision planning, premium execution, and a compelling story across every application component.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/contact">Book a Consult</Button>
            <Button href="/services" variant="secondary">View Services</Button>
          </div>
          <ul className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
            <li>✓ Selective admissions specialization</li>
            <li>✓ Limited-client, high-touch advising</li>
            <li>✓ Data-driven strategy systems</li>
          </ul>
          <div className="mt-10 grid gap-4 rounded-2xl border border-mit-silver/20 bg-white/85 p-4 backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
            <StatCard value="92%" label="Top-20 admission outcomes" caption="fully advised cohort" />
            <StatCard value="$3.2M+" label="Merit aid secured" caption="recent cycles" />
            <StatCard value="40+" label="MIT/Stanford/Ivy offers" caption="aggregate examples" />
            <StatCard value="4.9/5" label="Family satisfaction" caption="post-cycle surveys" />
          </div>
        </Container>
      </section>

      <section className="border-b border-mit-silver/15 bg-slate-50/70 py-7">
        <Container>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-mit-silver">As seen in</p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-center sm:grid-cols-5">
            {["Northbridge Review", "Ivy Academic", "Summit Journal", "Future Lab Press", "Meridian Education"].map((logo) => (
              <div key={logo} className="rounded-md border border-mit-silver/25 bg-white px-3 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                {logo}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <Badge>Value pillars</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl">Three pillars: strategy, execution, story.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Strategy", "Analytical school-list design and long-range admissions planning."],
              ["Execution", "Disciplined workflows across essays, activities, and timelines."],
              ["Story", "Authentic narrative positioning that admissions readers remember."],
            ].map(([title, copy]) => (
              <Card key={title} className="card-lift border-mit-silver/25">
                <div className="mb-3 inline-flex rounded-full bg-mit-blush p-2">{simpleIcon}</div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{copy}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50/75">
        <Container>
          <Badge>Services</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl">Six premium support pathways.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map(([title, bullet1, bullet2]) => (
              <Card key={title} className="card-lift border-mit-silver/25 hover:border-mit-red/35 hover:shadow-premium">
                <div className="mb-4 inline-flex rounded-full bg-mit-blush p-2">{simpleIcon}</div>
                <h3 className="font-semibold">{title}</h3>
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-600">
                  <li>{bullet1}</li>
                  <li>{bullet2}</li>
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Badge>Your team</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl">Advisor matching built around your goals.</h2>
          <p className="mt-3 max-w-3xl text-slate-600">Every family is paired to advisors based on target schools, academic profile, and narrative needs.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <ProfileCard initials="AK" name="A. Kim" credential="Lead Strategist · placeholder" focus="Selective admissions planning and list architecture." />
            <ProfileCard initials="RM" name="R. Martin" credential="Essay Specialist · placeholder" focus="Narrative strategy, voice development, and supplements." />
            <ProfileCard initials="DS" name="D. Shah" credential="STEM Advisor · placeholder" focus="Research storytelling and technical profile positioning." />
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden bg-slate-50/75">
        <div className="pointer-events-none absolute inset-x-0 -top-8 h-8 diagonal-separator bg-white" />
        <Container>
          <Badge>Results</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl">Strong outcomes, responsibly communicated.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["MIT", "Stanford", "Princeton", "Columbia", "Yale", "Cornell", "UPenn", "Duke"].map((school) => (
              <div key={school} className="rounded-xl border border-mit-silver/25 bg-white px-4 py-5 text-center text-sm font-semibold text-slate-800 card-lift hover:border-mit-red/30">
                {school}
              </div>
            ))}
          </div>
          <p className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">Outcome examples are illustrative only; admissions results vary by applicant strength, institutional priorities, and cycle dynamics.</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <Badge>Testimonials</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl">Premium support families trust.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["AL", "MIT + Caltech target"],
              ["JR", "Stanford CS target"],
              ["SK", "Ivy humanities target"],
            ].map(([initials, target]) => (
              <Card key={initials} className="card-lift border-mit-silver/25">
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-mit-blush font-semibold text-mit-red">{initials}</div>
                  <div className="flex gap-1">{[0, 1, 2, 3, 4].map((i) => <span key={i}>{star}</span>)}</div>
                </div>
                <p className="text-slate-600">“Axiom brought structure, calm, and elite-level coaching. Every detail had purpose and the final applications felt exceptional.”</p>
                <p className="mt-4 text-sm font-medium text-slate-800">{target}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50/75">
        <Container>
          <Badge>FAQ</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl">Common questions</h2>
          <div className="mt-8">
            <FaqAccordion items={faqItems} />
          </div>
        </Container>
      </Section>

      <Section className="border-t border-mit-silver/20">
        <Container className="max-w-3xl">
          <Badge>Contact</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl">Build your admissions roadmap.</h2>
          <p className="mt-3 text-slate-600">Tell us your goals, timeline, and target programs. We&apos;ll recommend the right advisory pathway.</p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </Container>
      </Section>
    </div>
  );
}
