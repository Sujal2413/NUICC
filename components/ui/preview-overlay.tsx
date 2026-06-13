"use client";

import { useEffect, type ReactNode } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { X, ArrowUpRight } from "lucide-react";

/* Dynamic preview panel: slides in over the canvas (never a new tab), with a
   gold [↗] that performs a full same-tab page transition to `href`. Closes on
   backdrop click, the X, or Escape; locks body scroll while open. */
export function PreviewOverlay({
  open,
  onClose,
  href,
  eyebrow,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  href: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <button
            aria-label="Close preview"
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-[#0B132B]/60 backdrop-blur-[20px]"
          />

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="relative h-full w-full overflow-y-auto bg-card text-card-foreground shadow-2xl md:w-[80%]"
          >
            {/* Sticky header */}
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-black/10 bg-card/90 px-6 py-5 backdrop-blur md:px-10">
              <div>
                {eyebrow && (
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8902A]">
                    {eyebrow}
                  </span>
                )}
                <h2 className="mt-1 font-bold tracking-tight text-card-foreground text-2xl md:text-3xl">
                  {title}
                </h2>
              </div>
              <div className="flex flex-shrink-0 items-center gap-2">
                <Link
                  href={href}
                  aria-label={`Open full ${title} page`}
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37] text-[#B8902A] transition-colors hover:bg-[#D4AF37] hover:text-[#0B132B]"
                >
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-card-foreground/70 transition-colors hover:bg-black/5"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="px-6 py-8 md:px-10 md:py-10">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
