import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin, Building2 } from "lucide-react";
import { Component as BackgroundGradient } from "@/components/ui/bg-gradient";
import { NuiccNavbar } from "@/components/ui/nuicc-navbar";
import { NuiccFooter } from "@/components/ui/nuicc-footer";
import { ServicesGrid } from "@/components/ui/nuicc-services";

export const metadata: Metadata = {
  title: "Core Services — Bilateral U.S.–India Trade | NUICC",
  description:
    "NUICC's core services: business matchmaking, trade missions, policy advocacy, market intelligence, networking, and advisory — with dedicated India and U.S. market-entry strategies.",
};

const INDIA = [
  "Qualified partners, distributors, dealers, and local representatives",
  "Regulatory roadmaps, tax, and compliance navigation for India entry",
  "Trade missions with state delegations, ministers, and investors",
  "Cultural intelligence and negotiation readiness",
];

const USA = [
  "U.S. go-to-market plans and business development strategy",
  "Executive introductions across business, policy, and diplomacy",
  "Investor connections and capital-raise positioning",
  "Market studies, sector insights, and entry compliance",
];

function Column({
  icon: Icon,
  flag,
  title,
  items,
}: {
  icon: typeof MapPin;
  flag: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-7 text-card-foreground md:p-9">
      <div className="flex items-center gap-3">
        <span className="text-2xl" aria-hidden="true">{flag}</span>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="mt-6 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#D4AF37]" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <BackgroundGradient gradientFrom="#fbf7ee" gradientTo="#e7eef5" gradientStop="35%" className="bg-background" />
      <NuiccNavbar />

      <section className="mx-auto w-full max-w-6xl px-4 pt-28 md:pt-36">
        <Link
          href="/redesign"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
        <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          What We Do
        </span>
        <h1 className="mt-3 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl">
          Everything you need to move between two markets.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          Six core services, delivered with on-the-ground expertise in both the United
          States and India.
        </p>
      </section>

      <section className="section-pad mx-auto w-full max-w-6xl px-4">
        <ServicesGrid />
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-20 md:pb-28">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground md:text-4xl">
          Two markets. One strategic bridge.
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          <Column icon={MapPin} flag="🇮🇳" title="India Entry Strategies" items={INDIA} />
          <Column icon={Building2} flag="🇺🇸" title="U.S. Entry Strategies" items={USA} />
        </div>
      </section>

      <NuiccFooter />
    </main>
  );
}
