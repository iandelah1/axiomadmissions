"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";

type Item = { q: string; a: string };

export function FaqAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <Card key={item.q} className="p-0">
            <button
              className="flex w-full items-center justify-between px-5 py-4 text-left"
              onClick={() => setOpen(isOpen ? null : idx)}
              type="button"
            >
              <span className="font-semibold">{item.q}</span>
              <span className="text-mit-red">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <p className="border-t border-mit-silver/20 px-5 py-4 text-sm text-slate-600">{item.a}</p>}
          </Card>
        );
      })}
    </div>
  );
}
