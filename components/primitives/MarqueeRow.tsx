type MarqueeRowProps = {
  children: React.ReactNode;
  /** Slower = more ceremonial; steady = denser logo wall. */
  pace?: "ceremonial" | "steady";
  label: string;
};

/**
 * One slow, continuous glide; pauses on hover/focus. Content is duplicated
 * once for the seamless loop — the duplicate is aria-hidden. Under
 * prefers-reduced-motion the row becomes a static wrapped grid (CSS).
 */
export function MarqueeRow({ children, pace = "ceremonial", label }: MarqueeRowProps) {
  return (
    <div className="marquee" role="region" aria-label={label}>
      <div className={`marquee-track marquee-track--${pace}`}>
        <div className="flex shrink-0 items-center gap-5">{children}</div>
        <div className="flex shrink-0 items-center gap-5" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
