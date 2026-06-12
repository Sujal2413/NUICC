import { SectionHeader } from "@/components/primitives/SectionHeader";
import { LeaderPhoto } from "@/components/primitives/LeaderPhoto";
import { MarqueeRow } from "@/components/primitives/MarqueeRow";
import { Reveal } from "@/components/motion/Reveal";
import { leaders } from "@/lib/content";

/** The dignitary photo wall — all 12 photographs, gliding slowly. */
export function LeadersWall() {
  return (
    <section className="section bg-sunken" aria-label="Global Leaders of Business and Influence">
      <div className="container-site">
        <SectionHeader
          overline="Relationships of Record"
          title="Global Leaders of Business & Influence"
        />
      </div>
      <Reveal>
        <MarqueeRow label="Photographs of NUICC with global leaders" pace="ceremonial">
          {leaders.map((leader) => (
            <LeaderPhoto key={leader.src} leader={leader} />
          ))}
        </MarqueeRow>
      </Reveal>
    </section>
  );
}
