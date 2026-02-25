import { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-mit-red/20 bg-mit-blush px-3 py-1 text-xs font-semibold uppercase tracking-wider text-mit-red">
      {children}
    </span>
  );
}
