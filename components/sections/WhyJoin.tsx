import Link from "next/link";
import { KeyRound, BookOpenCheck, Landmark } from "lucide-react";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { whyJoin, site } from "@/lib/content";

const pillarIcons = [
  <KeyRound key="access" className="h-6 w-6" aria-hidden="true" />,
  <BookOpenCheck key="expertise" className="h-6 w-6" aria-hidden="true" />,
  <Landmark key="influence" className="h-6 w-6" aria-hidden="true" />,
];

/** Why Join NUICC — Access, Expertise, Influence. */
export function WhyJoin() {
  return (
    <section className="section">
      <div className="container-site">
        <SectionHeader overline="Membership" title="Why Join NUICC?" seal lead={whyJoin.intro} />
        <Reveal stagger className="grid gap-6 md:grid-cols-3">
          {whyJoin.pillars.map((pillar, i) => (
            <article
              key={pillar.title}
              className="card-lift card-gold-top flex h-full flex-col rounded-card border border-line bg-surface p-7 shadow-xs"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-md border border-gold-200 bg-gold-50 text-navy-700">
                {pillarIcons[i]}
              </span>
              <h3 className="mt-4 font-serif text-h4">{pillar.title}</h3>
              <p className="mt-2 text-body-sm text-secondary">{pillar.text}</p>
            </article>
          ))}
        </Reveal>
        <Reveal className="mx-auto mt-10 max-w-3xl space-y-4 text-center">
          <p className="text-body font-semibold text-ink">{whyJoin.outro}</p>
          <p className="text-body text-secondary">{whyJoin.closing}</p>
          <Link href={site.membershipUrl} className="btn-primary mt-2">
            Become a Member
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
