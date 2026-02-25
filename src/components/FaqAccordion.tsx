"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";

type Item = { q: string; a: string };

export function FaqAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <Card key={item.q} className="overflow-hidden border-mit-silver/30 p-0 transition-colors duration-200 hover:border-mit-red/35">
            <button
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpen(isOpen ? null : idx)}
              type="button"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-slate-900">{item.q}</span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-mit-silver/30 text-mit-red">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden border-t border-mit-silver/20">
                <p className="px-5 py-4 text-sm text-slate-600">{item.a}</p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
