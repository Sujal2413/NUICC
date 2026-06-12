import Image from "next/image";
import Link from "next/link";
import { HeadingReveal } from "@/components/motion/HeadingReveal";
import { MediaReveal } from "@/components/motion/MediaReveal";
import { Reveal } from "@/components/motion/Reveal";
import { founderMessage, site } from "@/lib/content";

/**
 * Founder's letter as the reference's split panel: photograph on the left,
 * deep navy editorial panel on the right.
 */
export function FounderMessage() {
  return (
    <section aria-label="A message from our Founder and CEO" className="grid lg:grid-cols-2">
      <MediaReveal className="relative min-h-72 lg:min-h-full" from="left">
        <div className="relative h-full min-h-72 w-full">
          <Image
            src={founderMessage.photo.src}
            alt={founderMessage.photo.alt}
            fill
            sizes="(max-width: 64rem) 100vw, 50vw"
            className="object-cover object-top"
          />
        </div>
      </MediaReveal>

      <div className="relative isolate overflow-hidden bg-inverse">
        <span aria-hidden="true" className="founder-rings absolute inset-0" />
        <Reveal className="relative px-6 py-16 md:px-14 md:py-20">
          <p className="eyebrow-dash eyebrow-dash--inverse mb-4">From the Founder</p>
          <HeadingReveal as="h2" className="font-serif text-h2 text-on-inverse">
            A Message from Our Founder &amp; CEO
          </HeadingReveal>
          <p className="mt-7 font-serif text-body-lg italic text-on-inverse">
            {founderMessage.salutation}
          </p>
          {founderMessage.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="mt-4 text-body leading-relaxed text-on-inverse-soft">
              {p}
            </p>
          ))}
          <p className="mt-7 font-serif text-h4 text-gold-300">{founderMessage.signature}</p>
          <p className="text-body-sm text-on-inverse-soft">{founderMessage.signatureTitle}</p>
          <Link href={site.membershipUrl} className="btn-ghost mt-8">
            Become a Member
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
