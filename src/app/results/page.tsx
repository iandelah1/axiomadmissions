import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container, Section } from "@/components/ui/Container";
import { StatCard } from "@/components/ui/StatCard";

export const metadata = { title: "Results" };

export default function ResultsPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-mit-silver/20 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-35" />
        <Container className="relative py-20 sm:py-24">
          <Badge>Results</Badge>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl">Outcomes that reflect disciplined strategy.</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">Our clients have earned offers from MIT, Stanford, Ivy League schools, and other selective institutions.</p>
        </Container>
      </section>

      <Section className="bg-slate-50/75">
        <Container>
          <div className="grid gap-4 sm:grid-cols-3">
            <StatCard value="92%" label="Top-20 outcomes" caption="fully advised cohort examples" />
            <StatCard value="$3.2M+" label="Merit aid offers" caption="recent cycle aggregate" />
            <StatCard value="40+" label="Selective-school offers" caption="MIT, Stanford, Ivy + peers" />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["MIT", "Stanford", "Harvard", "Princeton", "Yale", "Columbia", "UPenn", "Duke"].map((s) => (
              <Card key={s} className="card-lift p-4 text-center font-semibold hover:border-mit-red/30">{s}</Card>
            ))}
          </div>

          <p className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">Disclaimer: outcomes vary by student profile, competitiveness of each cycle, and institutional priorities. Prior outcomes do not guarantee future admissions results.</p>
        </Container>
      </Section>
    </div>
  );
}
