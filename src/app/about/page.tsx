export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900">About Axiom Admissions</h1>
      <p className="mt-6 text-slate-600">
        Our mission is to help high-achieving students earn admission to best-fit top universities through strategic planning, rigorous execution, and authentic storytelling.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Mission & Values</h2>
        <ul className="mt-4 space-y-3 text-slate-600">
          <li><strong>Clarity:</strong> Turn complexity into a concrete admissions roadmap.</li>
          <li><strong>Integrity:</strong> Advocate ethical, student-centered applications.</li>
          <li><strong>Excellence:</strong> Maintain an elite standard for every deliverable.</li>
          <li><strong>Individuality:</strong> Build around each student&apos;s strengths and story.</li>
        </ul>
      </section>

      <section className="mt-12 rounded-xl border border-slate-200 p-8">
        <h2 className="text-2xl font-semibold">Founder</h2>
        <p className="mt-3 text-slate-600">
          Founder bio placeholder: Add founder credentials, selective admissions expertise, and advising philosophy.
        </p>
      </section>
    </div>
  );
}
