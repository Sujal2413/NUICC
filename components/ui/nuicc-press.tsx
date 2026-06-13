"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

/* Real recent activity — chapter launches + external press coverage (verified
   URLs from nuicc.org). Shows the chamber is active, not a static brochure. */
const LAUNCHES = [
  { region: "Pacific Northwest", title: "Northwest U.S.–India Chamber", desc: "Launched March 19, 2025 with the Bellevue Chamber of Commerce, serving nine Northwest states.", img: "/assets/img/event/Feature_launches_1.png" },
  { region: "South India", title: "Bengaluru Branch", desc: "Connecting U.S. companies to Bengaluru's AI, IT, manufacturing, clean-energy, and startup ecosystem.", img: "/assets/img/gallery/AUS_Cham.png" },
  { region: "New York", title: "Rajasthan Foundation Chapter", desc: "Strengthening U.S.–Rajasthan collaboration, investment, diaspora engagement, and cultural ties.", img: "/assets/img/gallery/DrV_Amb_Kwatra.png" },
];

const PRESS = [
  { outlet: "South Asian Herald", year: "2025", headline: "Dr. Purnima Voria appointed President of Rajasthan Foundation's New York Chapter", href: "https://southasianherald.com/purnima-voria-appointed-president-of-rajasthan-foundations-new-york-chapter-to-strengthen-us-rajasthan-ties/" },
  { outlet: "South Asian Herald", year: "2025", headline: "NUICC launches South India Regional Chamber in Bengaluru", href: "https://southasianherald.com/nuicc-launches-south-india-regional-chamber-in-bengaluru-to-boost-u-s-india-trade-and-innovation/" },
  { outlet: "425Business", year: "2025", headline: "Bellevue Chamber & National U.S.–India Chamber announce partnership", href: "https://www.425business.com/news/bellevue-chamber-national-us-india-chambers-partnership/article_bec26e38-ef06-11ef-b822-e379a1660d61.html" },
  { outlet: "The Denver Post", year: "2007", headline: "Where East Meets West", href: "https://www.denverpost.com/2007/04/13/where-east-meets-west/" },
];

export function NuiccPress() {
  return (
    <section id="launches" className="section-pad mx-auto w-full max-w-6xl px-4">
      <div className="mb-12 max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">In the News</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          A chamber that&rsquo;s actively expanding.
        </h2>
        <p className="mt-4 text-muted-foreground">
          New regional chapters, diplomatic engagements, and press coverage across both countries.
        </p>
      </div>

      {/* Launches */}
      <div className="grid gap-5 md:grid-cols-3">
        {LAUNCHES.map((l, i) => (
          <motion.article
            key={l.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src={l.img} alt={l.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#B8902A]">{l.region}</span>
              <h3 className="mt-1 text-lg font-bold text-card-foreground">{l.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Press list */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        {PRESS.map((p) => (
          <a
            key={p.href}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 border-b border-border px-6 py-4 transition-colors last:border-0 hover:bg-secondary/60"
          >
            <span className="hidden w-44 flex-shrink-0 text-sm font-bold text-[#B8902A] sm:block">{p.outlet}</span>
            <span className="hidden w-12 flex-shrink-0 text-xs font-semibold text-muted-foreground sm:block">{p.year}</span>
            <span className="flex-1 text-sm font-medium text-card-foreground sm:text-base">{p.headline}</span>
            <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-all group-hover:text-[#B8902A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        ))}
      </div>
    </section>
  );
}
