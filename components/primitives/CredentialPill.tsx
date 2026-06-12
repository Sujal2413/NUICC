import { BadgeCheck } from "lucide-react";

/** Small credential marker (e.g. the 501(c)(6) trust line, founding year). */
export function CredentialPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-pill border border-line bg-surface px-3 py-1.5 text-caption font-medium text-secondary shadow-xs">
      <BadgeCheck className="h-3.5 w-3.5 text-gold-600" aria-hidden="true" />
      {children}
    </span>
  );
}
