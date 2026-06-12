import Image from "next/image";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { gallery } from "@/lib/content";

/** The full photo gallery — all 23 photographs, lazy-loaded. */
export function Gallery() {
  return (
    <section id="gallery" className="section scroll-mt-24">
      <div className="container-site">
        <SectionHeader
          overline="In Pictures"
          title="Gallery"
          seal
          lead="Our recent events and moments captured in photos"
        />
        <Reveal stagger className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {gallery.map((photo) => (
            <figure
              key={photo.src}
              className="card-lift relative aspect-[4/3] overflow-hidden rounded-card border border-line bg-surface shadow-xs"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 48rem) 50vw, 25vw"
                className="object-cover"
              />
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
