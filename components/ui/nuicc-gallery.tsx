"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionCard } from "@/components/ui/section-card";
import { PreviewOverlay } from "@/components/ui/preview-overlay";

/* Leader images with their chamber-approved captions, carried over verbatim from
   the existing site so every name stays correct and tied to its exact photo. */
type Leader = { image: string; name: string; note?: string };

const LEADERS: Leader[] = [
  { image: "/assets/img/vip/DrV_HonRSingh.jpg", name: "Hon. Rajnath Singh", note: "Defence Minister of India" },
  { image: "/assets/img/vip/DrV_Biden.jpeg", name: "President Joe Biden", note: "46th President of the United States" },
  { image: "/assets/img/vip/DrV_ArvindKrishna.jpg", name: "Arvind Krishna", note: "Chairman & CEO, IBM" },
  { image: "/assets/img/vip/DrV_Birla.jpg", name: "Kumar Mangalam Birla", note: "Chairman, Aditya Birla Group" },
  { image: "/assets/img/vip/DrV_Amb_Kwatra.jpeg", name: "Amb. Vinay Kwatra", note: "Foreign Secretary of India" },
  { image: "/assets/img/vip/rajasthan_cm.jpg", name: "Chief Minister of Rajasthan", note: "with Dr. Purnima Voria" },
  { image: "/assets/img/vip/DrV_Chandrashekar.jpg", name: "Dr. Chandrashekar", note: "with Dr. Purnima Voria" },
  { image: "/assets/img/vip/DrV_Amb_Supriya.png", name: "Amb. Supriya", note: "with Dr. Purnima Voria" },
  { image: "/assets/img/vip/DrV_Dixit.jpeg", name: "Amb. Dixit", note: "with Dr. Purnima Voria" },
  { image: "/assets/img/vip/DrV_Africa.jpeg", name: "Africa Trade Mission", note: "NUICC delegation" },
  { image: "/assets/img/vip/vip1.jpeg", name: "Diplomatic Summit", note: "U.S.–India leadership" },
  { image: "/assets/img/vip/vip2.png", name: "Global Business Forum", note: "NUICC engagement" },
];

const ROW_1 = LEADERS.slice(0, 6);
const ROW_2 = LEADERS.slice(6);

function Card({ leader }: { leader: Leader }) {
  return (
    <figure className="w-56 flex-shrink-0 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={leader.image}
          alt={leader.note ? `${leader.name} — ${leader.note}` : leader.name}
          fill
          sizes="224px"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/25 to-transparent" />
      </div>
      <figcaption className="px-4 py-3">
        <p className="truncate text-sm font-bold text-card-foreground">{leader.name}</p>
        {leader.note && <p className="mt-0.5 truncate text-xs text-muted-foreground">{leader.note}</p>}
      </figcaption>
    </figure>
  );
}

function Row({ items, reverse }: { items: Leader[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="group flex overflow-hidden">
      <div
        className="flex w-max gap-4 pr-4 group-hover:[animation-play-state:paused]"
        style={{
          animation: `${reverse ? "nuicc-marquee-rev" : "nuicc-marquee"} 42s linear infinite`,
          willChange: "transform",
        }}
      >
        {doubled.map((l, i) => (
          <Card key={`${l.image}-${i}`} leader={l} />
        ))}
      </div>
    </div>
  );
}

/* Two-row marquee belt — used in the homepage preview overlay. */
export function GalleryMarquee() {
  return (
    <div className="relative flex flex-col gap-4">
      <Row items={ROW_1} />
      <Row items={ROW_2} reverse />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-card to-transparent md:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-card to-transparent md:w-20" />
    </div>
  );
}

/* Static responsive grid — used on the full /gallery page. */
export function GalleryGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {LEADERS.map((l) => (
        <figure
          key={l.image}
          className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={l.image}
              alt={l.note ? `${l.name} — ${l.note}` : l.name}
              fill
              sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/25 to-transparent" />
          </div>
          <figcaption className="px-4 py-3">
            <p className="truncate text-sm font-bold text-card-foreground">{l.name}</p>
            {l.note && <p className="mt-0.5 truncate text-xs text-muted-foreground">{l.note}</p>}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/* ── Homepage dashboard entry ── */

export function NuiccGallery() {
  const [open, setOpen] = useState(false);
  return (
    <section id="gallery" className="section-pad mx-auto w-full max-w-6xl px-4">
      <SectionCard
        eyebrow="Gallery · Global Leaders"
        title="Where influence meets opportunity."
        summary="Heads of state, policymakers, and industry leaders shaping U.S.–India business — the company NUICC keeps, in pictures."
        href="/gallery"
        exploreLabel="View Gallery"
        onExplore={() => setOpen(true)}
      />

      <PreviewOverlay
        open={open}
        onClose={() => setOpen(false)}
        href="/gallery"
        eyebrow="Gallery · Global Leaders"
        title="Where influence meets opportunity"
      >
        <p className="mb-8 max-w-2xl text-muted-foreground">
          NUICC connects members with the heads of state, policymakers, and industry leaders
          shaping the future of U.S.–India business.
        </p>
        <GalleryMarquee />
      </PreviewOverlay>
    </section>
  );
}
