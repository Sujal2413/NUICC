"use client";

import { useState } from "react";
import Image from "next/image";
import { Instagram, Facebook, ExternalLink, Play } from "lucide-react";

type SocialEmbedFacadeProps = {
  /** The iframe src loaded on demand. */
  embedSrc: string;
  /** The post's public URL, offered as a fallback link. */
  href: string;
  title: string;
  network: "instagram" | "facebook";
  /** Real NUICC photograph rendered behind the load button. */
  poster?: string;
  /** Compact is used for the Facebook video slot in a denser media grid. */
  size?: "standard" | "compact";
};

/**
 * Click-to-load facade for Instagram/Facebook embeds: no third-party script,
 * cookie, or iframe until the visitor opts in. The poster keeps the slot
 * visually real (authentic photography), and the embed loads on demand.
 */
export function SocialEmbedFacade({
  embedSrc,
  href,
  title,
  network,
  poster,
  size = "standard",
}: SocialEmbedFacadeProps) {
  const [loaded, setLoaded] = useState(false);
  const Icon = network === "instagram" ? Instagram : Facebook;
  const label = network === "instagram" ? "Instagram" : "Facebook";
  const frameClass = `social-embed-frame ${size === "compact" ? "social-embed-frame--compact" : ""}`;

  if (loaded) {
    return (
      <iframe
        src={embedSrc}
        title={title}
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        allowFullScreen
        className={`w-full border-0 ${frameClass}`}
      />
    );
  }

  return (
    <div className={`relative flex w-full flex-col items-center justify-center gap-3 overflow-hidden p-6 text-center ${frameClass}`}>
      {poster ? (
        <>
          <Image
            src={poster}
            alt={title}
            fill
            sizes="(max-width: 48rem) 100vw, 33vw"
            className="object-cover"
          />
          <span
            aria-hidden="true"
            className="social-poster-overlay absolute inset-0"
          />
        </>
      ) : (
        <span
          aria-hidden="true"
          className="social-fallback absolute inset-0"
        />
      )}
      <Icon className="relative h-8 w-8 text-gold-300" aria-hidden="true" />
      <p className="relative text-body-sm font-medium text-stone-0">{title}</p>
      <button type="button" onClick={() => setLoaded(true)} className="btn-primary relative">
        <Play className="h-4 w-4" aria-hidden="true" />
        Load {label} post
      </button>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center gap-1 text-caption text-on-inverse hover:text-gold-300"
      >
        Open on {label}
        <ExternalLink className="h-3 w-3" aria-hidden="true" />
      </a>
    </div>
  );
}
