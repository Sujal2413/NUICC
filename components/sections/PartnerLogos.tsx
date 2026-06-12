import Image from "next/image";
import { MarqueeRow } from "@/components/primitives/MarqueeRow";
import { Reveal } from "@/components/motion/Reveal";
import { partnerLogos } from "@/lib/content";

/** Partner / affiliation logo wall, gliding slowly. */
export function PartnerLogos() {
  return (
    <section className="section" aria-label="Partners and affiliations">
      <div className="container-site mb-8 text-center">
        <p className="overline-label">Partners & Affiliations</p>
      </div>
      <Reveal>
        <MarqueeRow label="Partner organization logos" pace="steady">
          {partnerLogos.map((logo, i) => (
            <div
              key={`${logo.src}-${i}`}
              className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-card border border-line bg-surface p-3 shadow-xs"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={104}
                height={104}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </MarqueeRow>
      </Reveal>
    </section>
  );
}
