import { Card } from "@/components/ui/Card";

export function ProfileCard({ initials, name, credential, focus }: { initials: string; name: string; credential: string; focus: string }) {
  return (
    <Card className="card-lift border-mit-silver/25 bg-white">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-mit-blush text-sm font-semibold text-mit-red">{initials}</div>
      <h3 className="mt-4 text-lg font-semibold">{name}</h3>
      <p className="mt-1 text-xs uppercase tracking-[0.16em] text-mit-silver">{credential}</p>
      <p className="mt-3 text-sm text-slate-600">{focus}</p>
    </Card>
  );
}
