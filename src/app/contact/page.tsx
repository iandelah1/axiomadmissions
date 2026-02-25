import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container, Section } from "@/components/ui/Container";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-mit-silver/20 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-35" />
        <Container className="relative py-20 sm:py-24">
          <Badge>Contact</Badge>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl">Let&apos;s architect your admissions strategy.</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">Share your goals, timeline, and target programs. We&apos;ll recommend a best-fit pathway.</p>
        </Container>
      </section>

      <Section className="bg-slate-50/70">
        <Container className="max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <ContactForm />
            <Card className="card-lift bg-white">
              <h2 className="text-2xl font-semibold">Prefer to schedule first?</h2>
              <p className="mt-3 text-slate-600">Book a consult call to discuss target schools, milestones, and your advising options.</p>
              <div className="mt-6">
                <Button href="mailto:hello@axiomadmissions.org">Schedule via Email</Button>
              </div>
              <p className="mt-4 text-sm text-slate-500">
                hello@axiomadmissions.org · <Link href="/services" className="text-mit-red hover:underline">Explore services</Link>
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
