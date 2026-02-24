import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";


export const metadata: Metadata = {
  metadataBase: new URL("https://axiomadmissions.org"),
  title: {
    default: "Axiom Admissions | Elite College Admissions Advisory",
    template: "%s | Axiom Admissions",
  },
  description:
    "Axiom Admissions helps high-achieving students build strategic, authentic applications for MIT, Stanford, Ivy League, and top universities.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
