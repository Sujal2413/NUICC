import { ArrowUpRight } from "lucide-react";
import type { PressLink } from "@/lib/content";

/** Outbound press-coverage card. Flagged links keep a visible review note. */
export function PressCard({ item }: { item: PressLink }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="card-lift group flex h-full flex-col rounded-card border border-line bg-surface p-5 shadow-xs"
    >
      <span className="overline-label">{item.source}</span>
      <span className="mt-2 flex-1 text-body-sm font-semibold text-ink group-hover:text-link-hover">
        {item.title}
      </span>
      <span className="mt-3 inline-flex items-center gap-1 text-caption font-medium text-gold-700">
        Read full coverage
        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
      {item.flagged ? (
        <span className="mt-2 rounded-sm bg-gold-50 px-2 py-1 text-caption text-gold-800">
          Under review: {item.flagged}
        </span>
      ) : null}
    </a>
  );
}
