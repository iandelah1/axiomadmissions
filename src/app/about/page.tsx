import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container, Section } from "@/components/ui/Container";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <Section>
      <Container className="max-w-5xl">
        <Badge>About</Badge>
        <h1 className="mt-4 text-4xl sm:text-5xl">About Axiom Admissions</h1>
        <p className="mt-5 text-slate-600">Our mission is to help high-achieving students earn admission to best-fit top universities through strategic planning, rigorous execution, and authentic storytelling.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-semibold">Mission & Values</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><strong>Clarity:</strong> turn complexity into an actionable plan.</li>
              <li><strong>Integrity:</strong> student-centered, ethical admissions advising.</li>
              <li><strong>Excellence:</strong> premium standards for every deliverable.</li>
              <li><strong>Individuality:</strong> strategy rooted in who the student is.</li>
            </ul>
          </Card>
          <Card className="bg-slate-50">
            <h2 className="text-2xl font-semibold">Founder</h2>
            <p className="mt-3 text-sm text-slate-600">Founder bio placeholder: add credentials, admissions philosophy, and track record across top universities.</p>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
