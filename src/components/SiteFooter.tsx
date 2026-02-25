import Link from "next/link";
import { Container } from "@/components/ui/Container";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/results", label: "Results" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-mit-silver/25 bg-slate-50">
      <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-50" />
      <Container className="relative grid gap-8 py-10 lg:grid-cols-3">
        <div>
          <p className="text-base font-semibold"><span className="text-mit-red">Axiom</span> Admissions</p>
          <p className="mt-2 text-sm text-slate-600">Mission: bring elite strategy and ethical guidance to ambitious students worldwide.</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mit-silver">Navigate</p>
          <ul className="mt-3 space-y-2">
            {links.map((link) => (
              <li key={link.href}><Link href={link.href} className="text-sm text-slate-600 hover:text-mit-red">{link.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mit-silver">Contact</p>
          <p className="mt-3 text-sm text-slate-600">hello@axiomadmissions.org</p>
        </div>
      </Container>
    </footer>
  );
}
