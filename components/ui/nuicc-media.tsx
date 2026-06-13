"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SectionCard } from "@/components/ui/section-card";
import { PreviewOverlay } from "@/components/ui/preview-overlay";

/* Real recent activity — chapter launches + diplomatic moments, and external
   press coverage (verified URLs from nuicc.org). Shows the chamber is active,
   not a static brochure. */
const LAUNCHES = [
  { region: "Pacific Northwest", title: "Northwest U.S.–India Chamber", desc: "Launched March 19, 2025 with the Bellevue Chamber of Commerce, serving nine Northwest states.", img: "/assets/img/event/Feature_launches_1.png" },
  { region: "South India", title: "Bengaluru Branch", desc: "A strategic hub connecting U.S. companies to Bengaluru's AI, IT, manufacturing, clean-energy, and startup ecosystem.", img: "/assets/img/gallery/AUS_Cham.png" },
  { region: "New York", title: "Rajasthan Foundation Chapter", desc: "Strengthening U.S.–Rajasthan collaboration, investment, diaspora engagement, and cultural ties.", img: "/assets/img/gallery/DrV_Amb_Kwatra.png" },
  { region: "Media Center", title: "Global Business Moments", desc: "Launch ceremonies, diplomatic meetings, press coverage, and executive gatherings across both countries.", img: "/assets/img/event/image_3section_2.png" },
];

const PRESS = [
  { outlet: "South Asian Herald", year: "2025", headline: "Dr. Purnima Voria appointed President of Rajasthan Foundation's New York Chapter", href: "https://southasianherald.com/purnima-voria-appointed-president-of-rajasthan-foundations-new-york-chapter-to-strengthen-us-rajasthan-ties/" },
  { outlet: "South Asian Herald", year: "2025", headline: "NUICC launches South India Regional Chamber in Bengaluru to boost U.S.–India trade", href: "https://southasianherald.com/nuicc-launches-south-india-regional-chamber-in-bengaluru-to-boost-u-s-india-trade-and-innovation/" },
  { outlet: "425Business", year: "2025", headline: "Bellevue Chamber & National U.S.–India Chamber announce partnership", href: "https://www.425business.com/news/bellevue-chamber-national-us-india-chambers-partnership/article_bec26e38-ef06-11ef-b822-e379a1660d61.html" },
  { outlet: "South Asian Herald", year: "2025", headline: "Dr. Voria meets the Chief Minister of Rajasthan to strengthen U.S.–Rajasthan collaboration", href: "https://southasianherald.com/purnima-voria-meets-chief-minister-of-rajasthan-to-strengthen-u-s-rajasthan-collaboration/" },
  { outlet: "Patrika", year: "2025", headline: "प्रवासी राजस्थानी दिवस पर शामिल होंगी बुश–ओबामा के साथ काम कर चुकीं डॉ. पूर्णिमा वोरिया", href: "https://www.patrika.com/national-news/purnima-voria-interview-global-investment-pravasi-rajasthani-diwas-summit-20154984" },
  { outlet: "The Denver Post", year: "2007", headline: "Where East Meets West", href: "https://www.denverpost.com/2007/04/13/where-east-meets-west/" },
];

export function LaunchesGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {LAUNCHES.map((l, i) => (
        <motion.article
          key={l.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: i * 0.06 }}
          className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={l.img}
              alt={l.title}
              fill
              sizes="(max-width:768px) 100vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-5">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#B8902A]">{l.region}</span>
            <h3 className="mt-1 text-lg font-bold text-card-foreground">{l.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.desc}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export function PressList() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
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
  );
}

/* Full media body — launches + press, shared by the preview and the /media page. */
export function MediaBody() {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="mb-6 text-xl font-bold tracking-tight text-card-foreground md:text-2xl">
          Featured launches &amp; moments
        </h3>
        <LaunchesGrid />
      </div>
      <div>
        <h3 className="mb-6 text-xl font-bold tracking-tight text-card-foreground md:text-2xl">
          In the news
        </h3>
        <PressList />
      </div>
    </div>
  );
}

/* ── Homepage dashboard entry ── */

export function NuiccMedia() {
  const [open, setOpen] = useState(false);
  return (
    <section id="media" className="section-pad mx-auto w-full max-w-6xl px-4">
      <SectionCard
        eyebrow="Media Center"
        title="A chamber that's actively making headlines."
        summary="Regional chapter launches, diplomatic engagements, and press coverage across U.S. and Indian media — the chamber in motion."
        href="/media"
        exploreLabel="Open Media Center"
        onExplore={() => setOpen(true)}
      />

      <PreviewOverlay
        open={open}
        onClose={() => setOpen(false)}
        href="/media"
        eyebrow="Media Center"
        title="A chamber actively making headlines"
      >
        <MediaBody />
      </PreviewOverlay>
    </section>
  );
}
