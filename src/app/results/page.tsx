import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container, Section } from "@/components/ui/Container";

export const metadata = { title: "Results" };

export default function ResultsPage() {
  return (
    <Section>
      <Container className="max-w-5xl">
        <Badge>Results</Badge>
        <h1 className="mt-4 text-4xl sm:text-5xl">Outcomes and proof points</h1>
        <p className="mt-4 text-slate-600">Our students have earned offers from MIT, Stanford, Ivy League institutions, and other top-ranked universities through disciplined strategy and authentic positioning.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <Card className="border-mit-red/30"><p className="text-4xl font-semibold text-mit-red">Top-20</p><p className="mt-2 text-sm text-slate-600">Majority of clients focus on the highest-selectivity tiers.</p></Card>
          <Card className="border-mit-red/30"><p className="text-4xl font-semibold text-mit-red">Merit Aid</p><p className="mt-2 text-sm text-slate-600">Significant scholarship outcomes at fit-aligned institutions.</p></Card>
          <Card className="border-mit-red/30"><p className="text-4xl font-semibold text-mit-red">Profile Growth</p><p className="mt-2 text-sm text-slate-600">Students build strategic confidence and communication skills.</p></Card>
        </div>
        <p className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">Disclaimer: outcomes vary by student profile, competitiveness of each cycle, and institutional priorities. Prior results do not guarantee future admissions outcomes.</p>
      </Container>
    </Section>
  );
}
