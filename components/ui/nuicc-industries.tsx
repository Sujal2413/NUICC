"use client";

import { motion } from "motion/react";

/* Per-sector blurbs grounded in NUICC's documented services — explains what the
   chamber actually does for each industry (addresses the "empty grid" problem). */
const INDUSTRIES = [
  { title: "Technology", sub: "Software & IT", blurb: "Partner matchmaking and market-entry support connecting U.S. and Indian software, SaaS, and IT-services firms to qualified clients, distributors, and engineering talent." },
  { title: "Healthcare", sub: "Pharmaceuticals", blurb: "Regulatory roadmaps and partner introductions for pharma, medical-device, and healthcare companies navigating compliance across both markets." },
  { title: "Finance", sub: "Banking", blurb: "Executive introductions and trade-mission access linking banks, investors, and fintech ventures to cross-border capital and partners." },
  { title: "Aerospace", sub: "Defense", blurb: "Policy advocacy and delegation access for aerospace and defense firms working within sensitive bilateral trade and procurement frameworks." },
  { title: "Energy", sub: "Renewables", blurb: "Trade missions and market intelligence for clean-energy, renewables, and infrastructure companies entering India's fast-growing energy sector." },
  { title: "Education", sub: "Research", blurb: "Institutional partnerships and diaspora networks connecting universities, research bodies, and edtech ventures across the U.S. and India." },
  { title: "Legal", sub: "Professional Services", blurb: "Regulatory guidance and vetted local advisors for law, accounting, and consulting firms supporting cross-border clients." },
  { title: "Consumer Goods", sub: "Retail", blurb: "Distribution partnerships and go-to-market strategy for consumer-goods and retail brands expanding into U.S. or Indian markets." },
];

export function NuiccIndustries() {
  return (
    <section id="industries" className="section-pad mx-auto w-full max-w-6xl px-4">
      <div className="mb-12 max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Industries</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          The sectors we move — and exactly how.
        </h2>
        <p className="mt-4 text-muted-foreground">
          NUICC members span every major industry. Here&rsquo;s what we actually do for each.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {INDUSTRIES.map((ind, i) => (
          <motion.article
            key={ind.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (i % 2) * 0.07 }}
            className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:shadow-lg"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#B8902A]">{ind.sub}</span>
            <h3 className="mt-1.5 text-2xl font-bold text-card-foreground">{ind.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ind.blurb}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
