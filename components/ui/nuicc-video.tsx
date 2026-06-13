"use client";

import { useState } from "react";
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { motion, useMotionValue, useSpring } from "motion/react";

/* YouTube facade: shows a real NUICC poster image; clicking loads the embed
   (lazy = fast first paint). Video IDs are carried over from the original
   site. TODO(chamber): these two IDs were previously unavailable on YouTube —
   replace with current links when ready. */
type Vid = { id: string; title: string; blurb: string; poster: string };

const VIDEOS: Vid[] = [
  {
    id: "NCNOAIUm5q4",
    title: "20 Years of U.S.–India Trade",
    blurb: "How NUICC turns policy conversations into signed business deals.",
    poster: "/assets/img/home/nuicc_image.jpg",
  },
  {
    id: "gzAzi46z0v4",
    title: "A Message from Our Founder",
    blurb: "Dr. Purnima Voria on building bridges between two democracies.",
    poster: "/assets/img/gallery/sulekha_nk_q25.jpg",
  },
];

function VideoCard({ video, index }: { video: Vid; index: number }) {
  const [playing, setPlaying] = useState(false);
  // Magnetic play icon: glides toward the cursor across the thumbnail.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 14, mass: 0.3 });
  const sy = useSpring(my, { stiffness: 200, damping: 14, mass: 0.3 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-2xl"
    >
      <div className="relative aspect-video w-full">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerated-content; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${video.title}`}
            className="group absolute inset-0 h-full w-full"
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              mx.set((e.clientX - (r.left + r.width / 2)) * 0.4);
              my.set((e.clientY - (r.top + r.height / 2)) * 0.4);
            }}
            onMouseLeave={() => {
              mx.set(0);
              my.set(0);
            }}
          >
            <Image
              src={video.poster}
              alt={`${video.title} — NUICC`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
            <motion.span
              style={{ x: sx, y: sy }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <PlayCircle className="h-16 w-16 text-white/85 transition-colors duration-300 group-hover:text-white" />
            </motion.span>
          </button>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-foreground">{video.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{video.blurb}</p>
      </div>
    </motion.div>
  );
}

export function NuiccVideo() {
  return (
    <section className="section-pad mx-auto w-full max-w-6xl px-4">
      <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
          Watch
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          See the chamber in action.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Two decades of trade missions, diplomatic engagement, and deals across
          the U.S.–India corridor.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {VIDEOS.map((v, i) => (
          <VideoCard key={v.id} video={v} index={i} />
        ))}
      </div>
    </section>
  );
}
