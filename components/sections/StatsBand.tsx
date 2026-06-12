import Image from "next/image";
import { StatCounter } from "@/components/primitives/StatCounter";
import { Reveal } from "@/components/motion/Reveal";
import { heroStats } from "@/lib/content";

/** The four headline counters under the hero (50+, 1B+, 10,000+, 500+). */
export function StatsBand() {
  return (
    <section aria-label="NUICC by the numbers" className="relative z-10 -mt-10 md:-mt-14">
      <div className="container-site">
        <Reveal
          stagger
          className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line border-t-2 border-t-gold-500 bg-line shadow-md lg:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2 bg-surface px-4 py-6">
              {stat.icon ? (
                <Image src={stat.icon} alt="" width={35} height={35} className="h-9 w-9 object-contain" />
              ) : null}
              <StatCounter stat={stat} />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
