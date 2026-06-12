import { SectionHeader } from "@/components/primitives/SectionHeader";
import { PressCard } from "@/components/primitives/PressCard";
import { Reveal } from "@/components/motion/Reveal";
import { press } from "@/lib/content";

/** Press coverage — all four outlets from the original site. */
export function Press() {
  return (
    <section id="press" className="section scroll-mt-24 bg-sunken">
      <div className="container-site">
        <SectionHeader overline="In the News" title="Press" />
        <Reveal stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {press.map((item) => (
            <PressCard key={item.href} item={item} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
