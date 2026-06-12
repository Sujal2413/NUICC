import Image from "next/image";
import type { Service } from "@/lib/content";

/** One of the six "What We Do" capability cards, with the original icon art. */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card-lift card-formal flex h-full flex-col p-7">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xs border border-line bg-stone-50">
          <Image src={service.icon} alt="" width={32} height={32} className="h-6 w-6 object-contain" />
        </span>
        <h3 className="font-serif text-h4 text-heading">{service.title}</h3>
      </div>
      <p className="mt-4 text-body-sm leading-relaxed text-secondary">{service.text}</p>
    </article>
  );
}
