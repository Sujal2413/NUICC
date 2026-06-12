"use client";

import { useState, useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};
/** False during SSR/hydration, true after — without a cascading re-render. */
function useHydrated() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

/**
 * "View More" expansion for long launch narratives. The full text is always in
 * the DOM (content is never gated on JS); collapsed state only hides it
 * visually once hydrated.
 */
export function ExpandableText({
  children,
  more,
}: {
  children: React.ReactNode;
  more: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  // Server-render fully expanded so no-JS readers see all text; collapse into
  // "View More" mode only on the client.
  const hydrated = useHydrated();

  const showMore = expanded || !hydrated;

  return (
    <div>
      <div className="space-y-4 text-body text-secondary">{children}</div>
      <div className={showMore ? "mt-4 space-y-4 text-body text-secondary" : "hidden"}>{more}</div>
      {hydrated ? (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="btn-secondary mt-5"
        >
          {expanded ? "View Less" : "View More"}
        </button>
      ) : null}
    </div>
  );
}
