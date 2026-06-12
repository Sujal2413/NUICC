import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import type { EventCard } from "@/lib/content";

/** Captioned event photo cards used throughout the Featured Launches. */
export function EventCardGrid({ cards }: { cards: readonly EventCard[] }) {
  return (
    <Reveal stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <article
          key={card.src}
          className="card-lift flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface shadow-xs"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={card.src}
              alt={card.alt}
              fill
              sizes="(max-width: 40rem) 100vw, (max-width: 64rem) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col p-4">
            <h4 className="font-serif text-h4 text-heading">{card.title}</h4>
            <p className="mt-1 text-body-sm text-secondary">{card.text}</p>
          </div>
        </article>
      ))}
    </Reveal>
  );
}
