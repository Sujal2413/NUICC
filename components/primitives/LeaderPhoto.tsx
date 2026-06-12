import Image from "next/image";
import type { Leader } from "@/lib/content";

/** One framed dignitary photograph from the Global Leaders wall. */
export function LeaderPhoto({ leader, priority = false }: { leader: Leader; priority?: boolean }) {
  return (
    <figure className="card-lift leader-frame shrink-0 overflow-hidden rounded-card border border-line bg-surface p-2 shadow-sm">
      <div className="leader-photo relative w-full overflow-hidden rounded-md">
        <Image
          src={leader.src}
          alt={leader.alt}
          fill
          sizes="(max-width: 48rem) 78vw, 16rem"
          priority={priority}
          className="object-cover"
        />
      </div>
    </figure>
  );
}
