import { ReactNode } from "react";
import { Card } from "@/components/ui/Card";

export function StatCard({ value, label, caption }: { value: string; label: string; caption?: ReactNode }) {
  return (
    <Card className="card-lift border-mit-silver/25 bg-white/95 p-5">
      <p className="text-3xl font-semibold text-mit-red sm:text-4xl">{value}</p>
      <p className="mt-1 text-sm font-medium text-slate-800">{label}</p>
      {caption ? <p className="mt-1 text-xs text-slate-500">{caption}</p> : null}
    </Card>
  );
}
