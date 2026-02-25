export const metadata = {
  title: "Results",
};

export default function ResultsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Results</h1>
      <p className="mt-4 text-slate-600">
        Our clients have earned offers from MIT, Stanford, Ivy League institutions, and other top-ranked universities through disciplined strategy and thoughtful execution.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        <article className="rounded-xl border border-slate-200 p-6">
          <p className="text-4xl font-semibold">Top-20 Focus</p>
          <p className="mt-2 text-sm text-slate-600">Majority of clients target highly selective programs across the US and UK.</p>
        </article>
        <article className="rounded-xl border border-slate-200 p-6">
          <p className="text-4xl font-semibold">Merit Aid</p>
          <p className="mt-2 text-sm text-slate-600">Students also secure significant scholarship outcomes at fit-aligned institutions.</p>
        </article>
        <article className="rounded-xl border border-slate-200 p-6">
          <p className="text-4xl font-semibold">Profile Growth</p>
          <p className="mt-2 text-sm text-slate-600">Beyond admissions, students gain confidence, communication skills, and strategic clarity.</p>
        </article>
      </div>

      <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
        Disclaimer: outcomes vary by student profile, competitiveness of each cycle, and institutional priorities. Prior outcomes do not guarantee future admissions results.
      </div>
    </div>
  );
}
