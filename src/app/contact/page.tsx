import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container, Section } from "@/components/ui/Container";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Section className="bg-slate-50/60">
      <Container className="max-w-5xl">
        <Badge>Contact</Badge>
        <h1 className="mt-4 text-4xl sm:text-5xl">Let&apos;s build your admissions strategy.</h1>
        <p className="mt-4 max-w-3xl text-slate-600">Share your profile, goals, and timeline. We&apos;ll recommend a best-fit advisory plan.</p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <ContactForm />
          <Card className="bg-white">
            <h2 className="text-2xl font-semibold">Prefer to schedule first?</h2>
            <p className="mt-3 text-slate-600">Book a consult call to discuss target schools, milestones, and your application timeline.</p>
            <div className="mt-6">
              <Button href="mailto:hello@axiomadmissions.org">Schedule via Email</Button>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              hello@axiomadmissions.org · <Link href="/services" className="text-mit-red hover:underline">View service pathways</Link>
            </p>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
