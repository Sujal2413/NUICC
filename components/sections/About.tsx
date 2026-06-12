import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { MediaReveal } from "@/components/motion/MediaReveal";
import { HeadingReveal } from "@/components/motion/HeadingReveal";
import { DignitaryQuote } from "@/components/primitives/DignitaryQuote";
import { CredentialPill } from "@/components/primitives/CredentialPill";
import { aboutIntro } from "@/lib/content";

/**
 * "Welcome" section in the reference's two-column composition: eyebrow and
 * large serif heading on the left, the chamber's case on the right, then the
 * proof photograph, vision & mission, and heads-of-state quotations.
 */
export function About() {
  return (
    <section className="section relative isolate overflow-hidden">
      <Image
        src={aboutIntro.background}
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-[0.08]"
      />
      <div className="container-site">
        <div className="grid items-start gap-x-16 gap-y-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow-dash mb-4">About Us</p>
            <HeadingReveal as="h2" className="font-serif text-h1 leading-tight text-heading">
              {aboutIntro.joinTitle}
            </HeadingReveal>
            <Image
              src={aboutIntro.sealLogo.src}
              alt={aboutIntro.sealLogo.alt}
              width={88}
              height={88}
              className="mt-6 h-20 w-20 object-contain"
            />
          </Reveal>
          <Reveal className="space-y-4">
            <h3 className="font-serif text-h3 leading-snug text-heading">
              {aboutIntro.orgTitleLines[0]} {aboutIntro.orgTitleLines[1]}
            </h3>
            <p className="text-body-lg font-semibold text-ink">{aboutIntro.lead}</p>
            <p className="text-body text-secondary">{aboutIntro.body}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              <CredentialPill>501(c)(6) Chamber of Commerce</CredentialPill>
              <CredentialPill>Founded 20+ years ago</CredentialPill>
              <CredentialPill>Headquartered in Denver, Colorado</CredentialPill>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-2">
          <figure>
            <MediaReveal className="border border-line shadow-md" from="left">
              <Image
                src={aboutIntro.photo.src}
                alt={aboutIntro.photo.alt}
                width={920}
                height={620}
                className="h-auto w-full object-cover"
              />
            </MediaReveal>
            <figcaption className="mt-3 text-body-sm italic text-secondary">
              {aboutIntro.photo.caption}
            </figcaption>
          </figure>
          <Reveal className="space-y-4 text-body text-secondary lg:pt-4">
            <p>{aboutIntro.founderRecord}</p>
            <p>{aboutIntro.delivers}</p>
            <p className="font-semibold text-ink">{aboutIntro.closing}</p>
          </Reveal>
        </div>

        <Reveal stagger className="mt-14 grid gap-6 md:grid-cols-2">
          <article className="card-lift card-formal p-8">
            <p className="eyebrow-dash mb-3 text-green-500">Our Vision</p>
            <p className="text-body text-secondary">{aboutIntro.vision}</p>
          </article>
          <article className="card-lift card-formal p-8">
            <p className="eyebrow-dash mb-3 text-green-500">Our Mission</p>
            <p className="text-body text-secondary">{aboutIntro.mission}</p>
          </article>
        </Reveal>

        <Reveal stagger className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
          {aboutIntro.quotes.map((q) => (
            <DignitaryQuote key={q.attribution} text={q.text} attribution={q.attribution} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
