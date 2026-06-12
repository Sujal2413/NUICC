import { SectionHeader } from "@/components/primitives/SectionHeader";
import { DignitaryQuote } from "@/components/primitives/DignitaryQuote";
import { DocumentCard } from "@/components/primitives/DocumentCard";
import { StatCounter } from "@/components/primitives/StatCounter";
import { YouTubeFacade } from "@/components/primitives/YouTubeFacade";
import { Button } from "@/components/primitives/Button";
import { Reveal } from "@/components/motion/Reveal";
import { aboutExpanded, documents, aboutStats, aboutVideos } from "@/lib/content";

/**
 * About NUICC expanded — the Zakhem endorsement, the chamber's record, every
 * official letter of support, the member stats, and all six videos.
 */
export function AboutExpanded() {
  return (
    <section id="about" className="section scroll-mt-24">
      <div className="container-site">
        <SectionHeader overline="The Chamber" title="About NUICC" seal />

        <Reveal className="mx-auto max-w-4xl">
          <DignitaryQuote text={aboutExpanded.quote} attribution={aboutExpanded.quoteAttribution} />
        </Reveal>

        {/* Chamber programs (demo links flagged for the chamber — see README) */}
        <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {aboutExpanded.demoLinks.map((link) => (
            <Button key={link.label} href={link.href} external variant="secondary">
              {link.label}
            </Button>
          ))}
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-4xl space-y-4 text-body text-secondary">
          {aboutExpanded.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-5xl">
          <h3 className="mb-5 text-center font-serif text-h3">Official Letters & Documents</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {documents.map((doc) => (
              <DocumentCard key={doc.label} doc={doc} />
            ))}
          </div>
        </Reveal>

        <Reveal
          stagger
          className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line shadow-sm lg:grid-cols-4"
        >
          {aboutStats.map((stat) => (
            <div key={stat.label} className="bg-surface px-4 py-7">
              <StatCounter stat={stat} />
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-14">
          <h3 className="mb-5 text-center font-serif text-h3">NUICC in Motion</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aboutVideos.map((video, i) => (
              <YouTubeFacade key={`${video.id}-${i}`} id={video.id} title={video.title} poster={video.poster} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
