import Image from "next/image";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { industries, industriesBackground } from "@/lib/content";

/**
 * The eight industries represented across the membership — a bright, airy
 * band: the original backdrop photograph kept as a faint light texture, with
 * crisp white cards on top.
 */
export function Industries() {
  return (
    <section className="section relative isolate overflow-hidden bg-sunken">
      <Image
        src={industriesBackground}
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-[0.06]"
      />
      <div aria-hidden="true" className="section-glow absolute inset-0 -z-10" />
      <div className="container-site">
        <SectionHeader overline="Membership Breadth" title="Industries Represented" />
        <Reveal stagger className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {industries.map((industry) => (
            <article key={industry.title} className="card-lift card-formal p-6 text-center">
              <h3 className="font-serif text-h4 text-heading">{industry.title}</h3>
              <p className="mt-1 text-body-sm text-secondary">{industry.sub}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
