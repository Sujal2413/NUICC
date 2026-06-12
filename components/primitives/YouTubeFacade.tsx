"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

type YouTubeFacadeProps = {
  id: string;
  title: string;
  /**
   * Local poster image. Required for videos whose YouTube thumbnails are
   * unavailable (deleted/private uploads) so the slot still renders real
   * NUICC photography; optional override otherwise.
   */
  poster?: string;
};

/**
 * Lightweight YouTube facade: renders only the poster frame until clicked,
 * then swaps in the real iframe. Keeps the long page fast (~14 videos).
 */
export function YouTubeFacade({ id, title, poster }: YouTubeFacadeProps) {
  const [playing, setPlaying] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);

  const posterSrc = poster ?? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-card bg-navy-900 shadow-sm">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          {posterFailed ? (
            <span className="absolute inset-0 flex items-end p-4 youtube-fallback">
              <span className="pb-2 text-left text-body-sm font-medium text-on-inverse-soft">
                {title}
              </span>
            </span>
          ) : (
            <Image
              src={posterSrc}
              alt={title}
              fill
              sizes="(max-width: 48rem) 100vw, 33vw"
              className="object-cover transition-opacity duration-300 group-hover:opacity-90"
              onError={() => setPosterFailed(true)}
            />
          )}
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-navy-800/85 text-gold-300 shadow-md transition-transform duration-300 group-hover:scale-105"
          >
            <Play className="ml-0.5 h-6 w-6 fill-current" />
          </span>
        </button>
      )}
    </div>
  );
}
