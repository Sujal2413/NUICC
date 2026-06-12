import Image from "next/image";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { industries, industriesBackground } from "@/lib/content";

/** The eight industries represented across the membership. */
export function Industries() {
  return (
    <section className="section relative isolate overflow-hidden bg-inverse">
      <Image src={industriesBackground} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-15" />
      <div className="container-site">
        <SectionHeader overline="Membership Breadth" title="Industries Represented" inverse />
        <Reveal stagger className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="card-lift rounded-card border border-line-inverse bg-navy-700/60 p-6 text-center backdrop-blur-sm"
            >
              <h3 className="font-serif text-h4 text-on-inverse">{industry.title}</h3>
              <p className="mt-1 text-body-sm text-on-inverse-soft">{industry.sub}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
