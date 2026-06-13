"use client";

import { motion } from "motion/react";
import { Handshake, Plane, Landmark, LineChart, Users, Compass } from "lucide-react";

/* The chamber's six core services — content carried from the existing site. */
const SERVICES = [
  { icon: Handshake, title: "Business Matchmaking", desc: "Curated B2B and B2C connections for your business to succeed in the U.S. and India markets." },
  { icon: Plane, title: "Trade Missions", desc: "Access state delegations and corporate leader missions to India and the United States." },
  { icon: Landmark, title: "Policy Advocacy", desc: "Sector-specific positioning with business, diplomatic, and policy leaders." },
  { icon: LineChart, title: "Market Intelligence", desc: "Trade regulations, market studies, sector insights, and industry expertise." },
  { icon: Users, title: "High-Value Networking", desc: "Connect with executives, investors, founders, and government officials." },
  { icon: Compass, title: "Strategic Advisory", desc: "Expert consultation for doing business between India and the United States." },
];

export function NuiccServices() {
  return (
    <section id="services" className="section-pad mx-auto w-full max-w-6xl px-4">
      <div className="mb-12 max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
          What We Do
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Everything you need to move between two markets.
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
