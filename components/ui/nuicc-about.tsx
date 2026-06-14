"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { Download, Quote } from "lucide-react";
import { SectionCard } from "@/components/ui/section-card";
import { PreviewOverlay } from "@/components/ui/preview-overlay";
import { CountUp } from "@/components/ui/count-up";

/* The four officers have no real photo/bio on the original site or in this repo,
   so they render as monogram cards (nothing fabricated). TODO(chamber): supply
   real headshots + bios. */
const OFFICERS = [
  { role: "Vice President, Global Corporate Business Development", name: "Terry Evanston" },
  { role: "Vice President of Operations", name: "Anne Bennett" },
  { role: "Treasurer", name: "Anu Singh" },
  { role: "Secretary of Technology & Executive Administrator", name: "Spencer Cloud" },
];

const STATS = [
  { prefix: "$", to: 1, suffix: "B+", label: "Bilateral trade facilitated" },
  { to: 500, suffix: "+", label: "U.S.–India businesses served" },
  { to: 20, suffix: "+", label: "Years bridging two markets" },
];

const initials = (n: string) => n.split(" ").map((w) => w[0]).slice(0, 2).join("");

/* ── Shared content blocks (reused by the preview overlay and the /about page) ── */

export function AboutIntro() {
  const figureRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: figureRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div className="grid items-center gap-10 md:grid-cols-2">
      <div>
        <p className="text-lg leading-relaxed text-muted-foreground">
          The National U.S.–India Chamber of Commerce exists to connect American and
          Indian businesses to the opportunities, partners, and policymakers that matter.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          For over twenty years, NUICC has helped companies navigate two complex markets
          with qualified local partners, regulatory roadmaps, tax and legal guidance,
          market-entry strategies, trade missions, and high-value introductions. Founded
          and led by Dr. Purnima Voria, NUICC has facilitated over $1 billion in bilateral
          trade and delivered successful deals for more than 500 U.S.–India businesses.
        </p>
        <dl className="mt-8 grid grid-cols-3 gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-4 text-center">
              <dt className="text-2xl font-bold text-[#B8902A] md:text-3xl">
                <CountUp prefix={s.prefix} to={s.to} suffix={s.suffix} />
              </dt>
              <dd className="mt-1 text-[11px] leading-tight text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <figure ref={figureRef} className="relative">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-secondary shadow-md">
          <motion.div style={{ y: imgY, scale: 1.2 }} className="absolute inset-0">
            <Image
              src="/assets/img/home/nuicc_image.jpg"
              alt="Dr. Purnima Voria with Prime Minister Narendra Modi"
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
        <figcaption className="mt-3 text-sm text-muted-foreground">
          NUICC Founder &amp; CEO, Dr. Purnima Voria, with H.E. Prime Minister of India,
          Narendra Modi.
        </figcaption>
      </figure>
    </div>
  );
}

export function VisionMission() {
  const cards = [
    {
      label: "Our Vision",
      body:
        "To promote a business and cultural climate between the United States and India — and potentially other countries — which motivates and empowers individuals to create value in the pursuit of prosperity and fulfillment.",
    },
    {
      label: "Our Mission",
      body:
        "To promote bilateral trade between the United States and India, cultivating business relationships that result in signed business deals.",
    },
  ];
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {cards.map((c) => (
        <div key={c.label} className="rounded-2xl border border-border bg-card p-7 md:p-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {c.label}
          </span>
          <p className="mt-4 leading-relaxed text-muted-foreground">{c.body}</p>
        </div>
      ))}
    </div>
  );
}

/* Founder feature + executive committee officers. */
export function CommitteeBody() {
  return (
    <div>
      {/* Founder feature */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="grid items-center gap-8 rounded-3xl border border-border bg-card p-7 shadow-md md:grid-cols-[300px_1fr] md:p-9"
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
          <Image
            src="/assets/img/gallery/sulekha_nk_q25.jpg"
            alt="Dr. Purnima Voria, NUICC Founder & CEO"
            fill
            sizes="300px"
            className="object-cover object-[center_18%]"
          />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#B8902A]">
            President · Founder &amp; CEO
          </span>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-card-foreground md:text-4xl">
            Dr. Purnima Voria
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Dr. Voria has spent her career building bridges between the United States and India.
            Recognised by <i>The Wall Street Journal</i> as Business Woman of the Year and a
            recipient of the Congressional Medal of Distinction, she was appointed National
            Advisor to the U.S. Minority Business Development Agency and serves as President of
            the Rajasthan Foundation&rsquo;s New York Chapter. She founded NUICC to turn
            high-level policy relationships into signed business deals.
          </p>
          <a
            href="/assets/img/home/voria-bio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-[#D4AF37] hover:text-[#0B132B]"
          >
            <Download className="h-4 w-4" /> Download Full Bio
          </a>
        </div>
      </motion.div>

      {/* Officers */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {OFFICERS.map((m) => (
          <div
            key={m.name}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
          >
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-secondary text-lg font-bold text-[#B8902A]">
              {initials(m.name)}
            </div>
            <div>
              <p className="font-bold text-card-foreground">{m.name}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FounderMessage() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-md md:p-12">
      <Quote className="h-9 w-9 text-[#D4AF37]" aria-hidden="true" />
      <blockquote className="mt-5 max-w-3xl text-lg leading-relaxed text-card-foreground md:text-xl">
        <p>
          It is with great pride and a deep sense of responsibility that I welcome you to the
          National U.S.–India Chamber of Commerce. Our organization was founded on the belief
          that stronger economic and cultural ties between the United States and India are
          essential for global progress in the 21st century.
        </p>
        <p className="mt-4">
          The U.S. and India share a unique bond rooted in democratic values, innovation, and a
          shared vision for prosperity. NUICC serves as the bridge connecting ambitious
          businesses with opportunity in two of the world&rsquo;s most dynamic economies.
        </p>
      </blockquote>
      <figcaption className="mt-6">
        <p className="font-bold text-card-foreground">Ms. Purnima Voria</p>
        <p className="text-sm text-muted-foreground">Founder &amp; CEO, NUICC</p>
      </figcaption>
    </div>
  );
}

/* ── Homepage dashboard entry ── */

export function NuiccAbout() {
  const [open, setOpen] = useState(false);
  return (
    <section id="about" className="section-pad mx-auto w-full max-w-6xl px-4">
      <SectionCard
        eyebrow="About NUICC"
        title="Built at the intersection of commerce, policy & influence."
        summary="Twenty years bridging the U.S. and India — $1B+ in bilateral trade, 500+ businesses served, and the leadership team turning policy relationships into signed deals."
        href="/about"
        exploreLabel="About & Leadership"
        onExplore={() => setOpen(true)}
      />

      <PreviewOverlay
        open={open}
        onClose={() => setOpen(false)}
        href="/about"
        eyebrow="About NUICC"
        title="A chamber at the intersection of commerce, policy & influence"
      >
        <div className="space-y-12">
          <AboutIntro />
          <div>
            <h3 className="mb-6 text-xl font-bold tracking-tight text-card-foreground md:text-2xl">
              The people behind the chamber.
            </h3>
            <CommitteeBody />
          </div>
        </div>
      </PreviewOverlay>
    </section>
  );
}
