import Image from "next/image";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { founderMessage } from "@/lib/content";

/** Personal letter from Dr. Purnima Voria, Founder & CEO. */
export function FounderMessage() {
  return (
    <section className="section bg-sunken">
      <div className="container-site">
        <SectionHeader overline="From the Founder" title="A Message from Our Founder & CEO" seal />
        <Reveal className="mx-auto max-w-5xl rounded-card border border-line bg-surface p-6 shadow-sm md:p-10">
          <div className="founder-letter-grid grid items-start gap-8">
            <div className="overflow-hidden rounded-card border border-line shadow-xs">
              <Image
                src={founderMessage.photo.src}
                alt={founderMessage.photo.alt}
                width={560}
                height={700}
                className="h-auto w-full object-cover"
              />
            </div>
            <div>
              <p className="font-serif text-body-lg italic text-heading">{founderMessage.salutation}</p>
              {founderMessage.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 text-body leading-relaxed text-secondary">
                  {p}
                </p>
              ))}
              <p className="mt-6 font-serif text-h4 text-heading">{founderMessage.signature}</p>
              <p className="text-body-sm text-muted">{founderMessage.signatureTitle}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
