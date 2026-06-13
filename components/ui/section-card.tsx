"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

/* A home-screen "dashboard entry" for a section. The whole card (and the
   Explore button) opens the preview overlay; the gold [↗] does a full
   same-tab page transition to `href`. */
export function SectionCard({
  eyebrow,
  title,
  summary,
  href,
  exploreLabel = "Explore",
  onExplore,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  href: string;
  exploreLabel?: string;
  onExplore: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      onClick={onExplore}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:shadow-xl md:p-9"
    >
      {/* Gold route arrow — top-right */}
      <Link
        href={href}
        onClick={(e) => e.stopPropagation()}
        aria-label={`Open full ${title} page`}
        className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37] text-[#B8902A] transition-colors hover:bg-[#D4AF37] hover:text-[#0B132B]"
      >
        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>

      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </span>
      <h2 className="mt-3 max-w-[80%] text-2xl font-bold tracking-tight text-card-foreground md:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
        {summary}
      </p>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onExplore();
        }}
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37] bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-[#D4AF37] hover:text-[#0B132B]"
      >
        {exploreLabel}
      </button>
    </motion.div>
  );
}
