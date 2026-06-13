"use client";

import Image from "next/image";

/* Leader images with their chamber-approved captions, carried over verbatim
   from the existing site so every name stays correct and tied to its exact
   photo. Presented as a two-row marquee belt; the name caption is ALWAYS
   visible beneath each image. */
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
        <p className="truncate text-sm font-bold text-foreground">{leader.name}</p>
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

export function NuiccLeaders() {
  return (
    <section id="leaders" className="section-pad w-full overflow-hidden">
      <div className="mx-auto mb-12 max-w-2xl px-4 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
          Global Leaders
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Where influence meets opportunity.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          NUICC connects members with the heads of state, policymakers, and industry
          leaders shaping the future of U.S.–India business.
        </p>
      </div>

      <div className="relative flex flex-col gap-4">
        <Row items={ROW_1} />
        <Row items={ROW_2} reverse />
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent md:w-28" />
      </div>
    </section>
  );
}
