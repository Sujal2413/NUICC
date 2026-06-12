/** Formal pull-quote from a dignitary, with the gold rule as the mark of office. */
export function DignitaryQuote({
  text,
  attribution,
}: {
  text: string;
  attribution: string;
}) {
  return (
    <figure className="rounded-card border border-line bg-surface p-6 shadow-xs md:p-8">
      <span className="gold-rule" aria-hidden="true" />
      <blockquote className="font-serif text-body-lg italic leading-relaxed text-heading">
        {text}
      </blockquote>
      <figcaption className="mt-4 text-body-sm font-semibold text-secondary">{attribution}</figcaption>
    </figure>
  );
}
