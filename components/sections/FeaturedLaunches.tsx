import Image from "next/image";
import { Check } from "lucide-react";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { YouTubeFacade } from "@/components/primitives/YouTubeFacade";
import { PressCard } from "@/components/primitives/PressCard";
import { EventCardGrid } from "@/components/primitives/EventCardGrid";
import { ExpandableText } from "@/components/primitives/ExpandableText";
import { SocialEmbedFacade } from "@/components/primitives/SocialEmbedFacade";
import { Reveal } from "@/components/motion/Reveal";
import {
  featuredLaunchesIntro,
  northwestLaunch,
  bangaloreLaunch,
  rajasthanLaunch,
} from "@/lib/content";

function LaunchCard({ children }: { children: React.ReactNode }) {
  return (
    <article className="mt-12 rounded-card border border-line bg-surface p-6 shadow-sm md:p-10">
      {children}
    </article>
  );
}

function LaunchHeading({
  heading,
  tagline,
  subline,
  subheading,
}: {
  heading: string;
  tagline?: string;
  subline: string;
  subheading?: string;
}) {
  return (
    <header className="text-center">
      <h3 className="font-serif text-h3 text-heading">{heading}</h3>
      <span className="gold-rule gold-rule--center" aria-hidden="true" />
      {tagline ? <p className="text-body-lg italic text-secondary">{tagline}</p> : null}
      <p className="mt-1 text-body-sm text-muted">{subline}</p>
      {subheading ? (
        <h4 className="mx-auto mt-5 max-w-2xl font-serif text-h4 text-heading">{subheading}</h4>
      ) : null}
    </header>
  );
}

function MediaCenter({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <h4 className="mb-5 text-center font-serif text-h4 text-heading">Media Center</h4>
      {children}
    </div>
  );
}

/**
 * Featured Launches — all three regional chapters: Northwest, Bangalore, and
 * the Rajasthan Foundation New York Chapter, with every photo, video, social
 * embed, and press link from the original site.
 */
export function FeaturedLaunches() {
  return (
    <section id="features" className="section scroll-mt-24 bg-sunken">
      <div className="container-site">
        <SectionHeader overline="Regional Chapters" title="Featured Launches" seal />

        <Reveal className="mx-auto max-w-4xl space-y-4 text-body text-secondary">
          {featuredLaunchesIntro.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </Reveal>

        <Reveal stagger className="mt-8 grid gap-6 md:grid-cols-2">
          {featuredLaunchesIntro.images.map((img) => (
            <figure key={img.src} className="overflow-hidden rounded-card border border-line shadow-sm">
              <Image
                src={img.src}
                alt={img.alt}
                width={900}
                height={600}
                className="h-auto w-full object-cover"
              />
            </figure>
          ))}
        </Reveal>
        <Reveal className="mt-4 text-center">
          <p className="mx-auto max-w-3xl text-body font-semibold text-ink">
            {featuredLaunchesIntro.caption}
          </p>
        </Reveal>

        {/* ===== Northwest ===== */}
        <Reveal>
          <LaunchCard>
            <LaunchHeading
              heading={northwestLaunch.heading}
              tagline={northwestLaunch.tagline}
              subline={northwestLaunch.subline}
              subheading={northwestLaunch.subheading}
            />
            <div className="mt-6">
              <ExpandableText more={<p>{northwestLaunch.more}</p>}>
                <p>{northwestLaunch.body}</p>
              </ExpandableText>
            </div>
            <p className="mt-6 text-body font-semibold text-ink">{northwestLaunch.closing}</p>

            <MediaCenter>
              <div className="grid gap-6 md:grid-cols-2">
                {northwestLaunch.videos.map((video, i) => (
                  <YouTubeFacade key={`${video.id}-${i}`} id={video.id} title={video.title} poster={video.poster} />
                ))}
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {northwestLaunch.press.map((item) => (
                  <PressCard key={item.href} item={item} />
                ))}
              </div>
            </MediaCenter>

            <div className="mt-8">
              <EventCardGrid cards={northwestLaunch.eventCards} />
            </div>
          </LaunchCard>
        </Reveal>

        {/* ===== Bangalore ===== */}
        <Reveal>
          <LaunchCard>
            <LaunchHeading
              heading={bangaloreLaunch.heading}
              subline={bangaloreLaunch.subline}
              subheading={bangaloreLaunch.subheading}
            />
            <div className="mt-6">
              <ExpandableText more={<p>{bangaloreLaunch.more}</p>}>
                <p>{bangaloreLaunch.body}</p>
              </ExpandableText>
            </div>

            <p className="mt-6 text-body text-secondary">{bangaloreLaunch.hubIntro}</p>
            <ul className="mt-3 space-y-2">
              {bangaloreLaunch.hubPoints.map((point) => (
                <li key={point} className="flex gap-3 text-body-sm text-secondary">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-body font-semibold text-ink">{bangaloreLaunch.closing}</p>

            <MediaCenter>
              <div className="grid gap-6 md:grid-cols-2">
                {bangaloreLaunch.videos.map((video, i) => (
                  <YouTubeFacade key={`${video.id}-${i}`} id={video.id} title={video.title} poster={video.poster} />
                ))}
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {bangaloreLaunch.press.map((item) => (
                  <PressCard key={item.href} item={item} />
                ))}
              </div>
            </MediaCenter>

            <div className="mt-8">
              <h4 className="mb-5 text-center font-serif text-h4 text-heading">
                {bangaloreLaunch.galleryTitle}
              </h4>
              <Reveal stagger className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {bangaloreLaunch.gallery.map((img) => (
                  <figure key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-card border border-line shadow-xs">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 48rem) 50vw, 33vw"
                      className="object-cover"
                    />
                  </figure>
                ))}
              </Reveal>
            </div>
          </LaunchCard>
        </Reveal>

        {/* ===== Rajasthan Foundation NY ===== */}
        <Reveal>
          <LaunchCard>
            <LaunchHeading heading={rajasthanLaunch.heading} subline={rajasthanLaunch.subline} />
            <div className="mt-6">
              <ExpandableText
                more={
                  <>
                    <ul className="space-y-2">
                      {rajasthanLaunch.points.map((point) => (
                        <li key={point.slice(0, 40)} className="flex gap-3 text-body-sm text-secondary">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    {rajasthanLaunch.outro.map((p) => (
                      <p key={p.slice(0, 40)}>{p}</p>
                    ))}
                  </>
                }
              >
                {rajasthanLaunch.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </ExpandableText>
            </div>

            <MediaCenter>
              <div className="grid gap-6 md:grid-cols-3">
                {rajasthanLaunch.videos.map((video, i) => (
                  <YouTubeFacade key={`${video.id}-${i}`} id={video.id} title={video.title} poster={video.poster} />
                ))}
                <div className="overflow-hidden rounded-card bg-navy-900 shadow-sm">
                  <SocialEmbedFacade
                    embedSrc={rajasthanLaunch.facebookVideo.href}
                    href="https://www.facebook.com/1stIndiaNews/videos/1191246206285907/"
                    title={rajasthanLaunch.facebookVideo.title}
                    network="facebook"
                    poster={rajasthanLaunch.facebookVideo.poster}
                    size="compact"
                  />
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {rajasthanLaunch.instagramReels.map((reel) => (
                  <div key={reel.href} className="overflow-hidden rounded-card border border-line shadow-xs">
                    <SocialEmbedFacade
                      embedSrc={`${reel.href}embed/`}
                      href={reel.href}
                      title="NUICC on Instagram"
                      network="instagram"
                      poster={reel.poster}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {rajasthanLaunch.press.map((item) => (
                  <PressCard key={item.href} item={item} />
                ))}
              </div>
            </MediaCenter>

            <Reveal stagger className="mt-8 grid gap-6 md:grid-cols-2">
              {rajasthanLaunch.photos.map((photo) => (
                <figure
                  key={photo.src}
                  className="overflow-hidden rounded-card border border-line bg-surface shadow-xs"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={900}
                    height={620}
                    className="h-auto w-full object-cover"
                  />
                  {"caption" in photo && photo.caption ? (
                    <figcaption className="p-4">
                      {"title" in photo && photo.title ? (
                        <span className="block font-serif text-h4 text-heading">{photo.title}</span>
                      ) : null}
                      <span className="mt-1 block text-body-sm font-semibold text-secondary">
                        {photo.caption}
                      </span>
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </Reveal>

            <div className="mt-8">
              <EventCardGrid cards={rajasthanLaunch.eventCards} />
            </div>
          </LaunchCard>
        </Reveal>
      </div>
    </section>
  );
}
