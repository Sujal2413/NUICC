import Image from "next/image";
import type { Service } from "@/lib/content";

/** One of the six "What We Do" capability cards, with the original icon art. */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card-lift card-gold-top flex h-full flex-col rounded-card border border-line bg-surface p-7 shadow-xs">
      <span className="flex h-12 w-12 items-center justify-center rounded-md border border-gold-200 bg-gold-50">
        <Image src={service.icon} alt="" width={32} height={32} className="h-6 w-6 object-contain" />
      </span>
      <h3 className="mt-5 font-serif text-h4 text-heading">{service.title}</h3>
      <p className="mt-2 text-body-sm leading-relaxed text-secondary">{service.text}</p>
    </article>
  );
}
