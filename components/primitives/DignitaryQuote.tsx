import { Quote } from "lucide-react";

/**
 * Formal quotation card in the reference's testimonial language: a large
 * quotation mark, the words, the name — over a navy rule of office.
 */
export function DignitaryQuote({
  text,
  attribution,
}: {
  text: string;
  attribution: string;
}) {
  return (
    <figure className="card-lift card-formal flex h-full flex-col items-center p-8 text-center">
      <Quote className="h-8 w-8 rotate-180 text-stone-300" aria-hidden="true" />
      <blockquote className="mt-4 flex-1 font-serif text-body-lg italic leading-relaxed text-heading">
        {text}
      </blockquote>
      <figcaption className="mt-5 text-body-sm font-semibold tracking-wide text-link">
        {attribution}
      </figcaption>
    </figure>
  );
}
