import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container, Section } from "@/components/ui/Container";
import { ProfileCard } from "@/components/ui/ProfileCard";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-mit-silver/20 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-35" />
        <div className="pointer-events-none absolute right-[-12rem] top-[-6rem] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,_rgba(117,0,20,0.17),_transparent_72%)]" />
        <Container className="relative py-20 sm:py-24">
          <Badge>About Axiom</Badge>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl">A modern advisory built for elite admissions outcomes.</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">We partner with high-achieving students to create strategic, ethical, and deeply personalized applications.</p>
        </Container>
      </section>

      <Section>
        <Container className="max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="card-lift">
              <h2 className="text-2xl font-semibold">Mission</h2>
              <p className="mt-3 text-slate-600">Help ambitious students earn admission to best-fit top universities through precision planning and premium execution.</p>
            </Card>
            <Card className="card-lift">
              <h2 className="text-2xl font-semibold">Values</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li><strong>Clarity:</strong> transform complexity into an actionable roadmap.</li>
                <li><strong>Integrity:</strong> student-centered, ethical guidance.</li>
                <li><strong>Excellence:</strong> elite standards for every deliverable.</li>
                <li><strong>Individuality:</strong> strategy anchored in authentic voice.</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50/70">
        <Container className="max-w-5xl">
          <Badge>Founder & Leadership</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl">Experienced advisors, personalized guidance.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <ProfileCard initials="AF" name="Axiom Founder" credential="Founder Bio · placeholder" focus="Add credentials, philosophy, and selective admissions history." />
            <ProfileCard initials="LC" name="Lead Counselor" credential="Admissions Lead · placeholder" focus="Add institution expertise and advising style details." />
            <ProfileCard initials="ES" name="Essay Director" credential="Narrative Lead · placeholder" focus="Add writing-coaching profile and outcomes context." />
          </div>
        </Container>
      </Section>
    </div>
  );
}
