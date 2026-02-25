import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/results", label: "Results" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-mit-silver/20 bg-white/90 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-slate-900">
          <span className="text-mit-red">Axiom</span> Admissions
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-mit-red">
              {item.label}
            </Link>
          ))}
        </nav>
        <Button href="/contact" variant="primary" className="px-4 py-2">
          Book a Consult
        </Button>
      </Container>
    </header>
  );
}
