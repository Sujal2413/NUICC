"use client";

import { useState } from "react";
import { Handshake, Plane, Landmark, LineChart, Users, Compass } from "lucide-react";
import { SectionCard } from "@/components/ui/section-card";
import { PreviewOverlay } from "@/components/ui/preview-overlay";

/* The chamber's six core services — content carried from the existing site. */
export const SERVICES = [
  { icon: Handshake, title: "Business Matchmaking", desc: "Curated B2B and B2C connections for your business to succeed in the U.S. and India markets." },
  { icon: Plane, title: "Trade Missions", desc: "Access state delegations and corporate leader missions to India and the United States." },
  { icon: Landmark, title: "Policy Advocacy", desc: "Sector-specific positioning with business, diplomatic, and policy leaders." },
  { icon: LineChart, title: "Market Intelligence", desc: "Trade regulations, market studies, sector insights, and industry expertise." },
  { icon: Users, title: "High-Value Networking", desc: "Connect with executives, investors, founders, and government officials." },
  { icon: Compass, title: "Strategic Advisory", desc: "Expert consultation for doing business between India and the United States." },
];

export function ServicesGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((s) => {
        const Icon = s.icon;
        return (
          <article
            key={s.title}
            className="rounded-2xl border border-black/10 bg-[#0B132B]/[0.03] p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-card-foreground">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </article>
        );
      })}
    </div>
  );
}

export function NuiccServices() {
  const [open, setOpen] = useState(false);
  return (
    <section id="services" className="section-pad mx-auto w-full max-w-6xl px-4">
      <SectionCard
        eyebrow="What We Do"
        title="Our Core Services"
        summary="Business matchmaking, trade missions, policy advocacy, market intelligence, high-value networking, and strategic advisory — everything you need to move between the U.S. and India."
        href="/services"
        exploreLabel="Explore Services"
        onExplore={() => setOpen(true)}
      />

      <PreviewOverlay
        open={open}
        onClose={() => setOpen(false)}
        href="/services"
        eyebrow="What We Do"
        title="Our Core Services"
      >
        <p className="mb-8 max-w-2xl text-muted-foreground">
          NUICC gives members the full toolkit for cross-border growth. Open the full
          page for India- and U.S.-specific entry strategies.
        </p>
        <ServicesGrid />
      </PreviewOverlay>
    </section>
  );
}
