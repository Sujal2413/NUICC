import { FileText, ExternalLink } from "lucide-react";
import type { DocumentLink } from "@/lib/content";

/**
 * Letter-of-support / official document card — the credibility unit for the
 * diplomatic visitor. Placeholder targets are labelled, never silently fixed.
 */
export function DocumentCard({ doc }: { doc: DocumentLink }) {
  return (
    <a
      href={doc.href}
      target={doc.placeholder ? undefined : "_blank"}
      rel={doc.placeholder ? undefined : "noopener noreferrer"}
      className="card-lift group flex items-start gap-3 rounded-card border border-line bg-surface p-4 shadow-xs"
      aria-disabled={doc.placeholder || undefined}
    >
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-navy-50 text-navy-700">
        <FileText className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="flex-1">
        <span className="block text-body-sm font-medium text-ink group-hover:text-link-hover">
          {doc.label}
        </span>
        <span className="mt-0.5 block text-caption text-muted">
          {doc.placeholder ? "Document link pending — to be provided by the chamber" : "PDF · Official document"}
        </span>
      </span>
      {!doc.placeholder && (
        <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-stone-400 group-hover:text-gold-600" aria-hidden="true" />
      )}
    </a>
  );
}
