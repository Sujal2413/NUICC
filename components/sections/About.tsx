import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { DignitaryQuote } from "@/components/primitives/DignitaryQuote";
import { CredentialPill } from "@/components/primitives/CredentialPill";
import { aboutIntro } from "@/lib/content";

/** "Join the largest Business community" — org introduction, vision & mission. */
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
        <Reveal className="mx-auto mb-12 flex max-w-4xl flex-col items-center gap-4 text-center md:flex-row md:justify-center">
          <Image
            src={aboutIntro.sealLogo.src}
            alt={aboutIntro.sealLogo.alt}
            width={100}
            height={100}
            className="h-24 w-24 shrink-0 object-contain"
          />
          <h2 className="font-serif text-h2">{aboutIntro.joinTitle}</h2>
        </Reveal>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="overline-label">Who We Are</p>
            <h3 className="mt-3 font-serif text-h3 leading-snug">
              {aboutIntro.orgTitleLines[0]}
              <br />
              {aboutIntro.orgTitleLines[1]}
            </h3>
            <span className="gold-rule" aria-hidden="true" />
            <p className="text-body-lg font-semibold text-ink">{aboutIntro.lead}</p>
            <p className="mt-4 text-body text-secondary">{aboutIntro.body}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <CredentialPill>501(c)(6) Chamber of Commerce</CredentialPill>
              <CredentialPill>Founded 20+ years ago</CredentialPill>
              <CredentialPill>Headquartered in Denver, Colorado</CredentialPill>
            </div>
          </Reveal>

          <Reveal as="figure">
            <div className="overflow-hidden rounded-card border border-line shadow-md">
              <Image
                src={aboutIntro.photo.src}
                alt={aboutIntro.photo.alt}
                width={920}
                height={620}
                className="h-auto w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-body-sm italic text-secondary">
              {aboutIntro.photo.caption}
            </figcaption>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-10 max-w-4xl space-y-4 text-body text-secondary">
          <p>{aboutIntro.founderRecord}</p>
          <p>{aboutIntro.delivers}</p>
          <p className="font-semibold text-ink">{aboutIntro.closing}</p>
        </Reveal>

        <Reveal stagger className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="card-lift rounded-card border border-line bg-surface p-6 shadow-xs md:p-8">
            <p className="overline-label text-green-500">
              Our Vision
            </p>
            <span className="gold-rule" aria-hidden="true" />
            <p className="text-body text-secondary">{aboutIntro.vision}</p>
          </article>
          <article className="card-lift rounded-card border border-line bg-surface p-6 shadow-xs md:p-8">
            <p className="overline-label text-green-500">
              Our Mission
            </p>
            <span className="gold-rule" aria-hidden="true" />
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
