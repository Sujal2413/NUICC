"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Download } from "lucide-react";

/* The four officers have no real photo/bio on the original site or in this repo,
   so they render as monogram cards (nothing fabricated). TODO(chamber): supply
   real headshots + bios. */
const OFFICERS = [
  { role: "Vice President, Global Corporate Business Development", name: "Terry Evanston" },
  { role: "Vice President of Operations", name: "Anne Bennett" },
  { role: "Treasurer", name: "Anu Singh" },
  { role: "Secretary of Technology & Executive Administrator", name: "Spencer Cloud" },
];

const initials = (n: string) => n.split(" ").map((w) => w[0]).slice(0, 2).join("");

export function NuiccCommittee() {
  return (
    <section id="committee" className="section-pad mx-auto w-full max-w-6xl px-4">
      <div className="mb-12 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Leadership</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          The people behind the chamber.
        </h2>
      </div>

      {/* Founder feature */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto grid max-w-4xl items-center gap-8 rounded-3xl border border-border bg-card p-7 shadow-md md:grid-cols-[300px_1fr] md:p-9"
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
          <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#B8902A]">President · Founder &amp; CEO</span>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-card-foreground md:text-4xl">Dr. Purnima Voria</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Dr. Voria has spent her career building bridges between the United States and India.
            Recognised by <i>The Wall Street Journal</i>{" "}
            as Business Woman of the Year and a recipient of the Congressional Medal of Distinction,
            she was appointed National Advisor to the U.S. Minority Business Development Agency and
            serves as President of the Rajasthan Foundation&rsquo;s New York Chapter. She founded NUICC
            to turn high-level policy relationships into signed business deals.
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
      <div className="mx-auto mt-5 grid max-w-4xl gap-4 sm:grid-cols-2">
        {OFFICERS.map((m) => (
          <div key={m.name} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
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
    </section>
  );
}
