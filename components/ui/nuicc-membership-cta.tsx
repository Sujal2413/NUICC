"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

/* Surfaces membership value directly on the homepage (no hunting through an FAQ):
   targeted segments + a tier-price preview that links to the full /membership page. */
const SEGMENTS = [
  { who: "Startups", desc: "Cross-border mentorship, investor introductions, regulatory insight, and pitch opportunities." },
  { who: "Established Companies", desc: "Business matchmaking, trade missions, and market intelligence to expand across the corridor." },
  { who: "Investors", desc: "Curated deal flow, sector insights, and direct connections to founders and partners." },
  { who: "Market-Entry Firms", desc: "Regulatory roadmaps plus trusted legal, compliance, and local-partner referrals." },
  { who: "Institutions & Nonprofits", desc: "Policy access, delegations, and partnerships that advance bilateral initiatives." },
];

const TIERS = [
  { name: "Individual / Nonprofit", price: "$400" },
  { name: "Small Business", price: "$1,000" },
  { name: "Associate", price: "$5,000" },
  { name: "Corporate", price: "$10,000", featured: true },
  { name: "Chairman's Circle", price: "$15,000" },
];

export function NuiccMembershipCta() {
  return (
    <section id="membership" className="section-pad mx-auto w-full max-w-6xl px-4">
      <div className="mb-12 max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Membership</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Clear value for every kind of business.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Whatever your size or sector, here&rsquo;s exactly what membership unlocks — and what each tier costs.
        </p>
      </div>

      {/* Segments */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SEGMENTS.map((s, i) => (
          <motion.div
            key={s.who}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <h3 className="text-lg font-bold text-card-foreground">{s.who}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Tier preview */}
      <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`rounded-xl border p-4 text-center ${t.featured ? "border-[#D4AF37] bg-[#D4AF37]/[0.08]" : "border-border"}`}
            >
              <p className="text-2xl font-extrabold text-[#B8902A]">{t.price}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href="/membership"
            className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#0B132B] transition-colors hover:bg-[#e3c252]"
          >
            See all tiers &amp; benefits <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
