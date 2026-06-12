import Image from "next/image";
import { aboutIntro } from "@/lib/content";

type SectionHeaderProps = {
  overline?: string;
  title: React.ReactNode;
  lead?: string;
  /** Show the 20-years seal under the title, as on the original site. */
  seal?: boolean;
  inverse?: boolean;
  id?: string;
};

/** Centered section heading: overline eyebrow, serif title, gold rule, optional seal. */
export function SectionHeader({ overline, title, lead, seal = false, inverse = false, id }: SectionHeaderProps) {
  return (
    <header className="mx-auto mb-10 max-w-3xl text-center" id={id}>
      {overline ? (
        <p className={`overline-label ${inverse ? "overline-label--inverse" : ""} mb-3`}>{overline}</p>
      ) : null}
      <h2 className={`font-serif text-h2 ${inverse ? "text-on-inverse" : ""}`}>
        {title}
      </h2>
      <span className="gold-rule gold-rule--center" aria-hidden="true" />
      {seal ? (
        <Image
          src={aboutIntro.sealLogo.src}
          alt={aboutIntro.sealLogo.alt}
          width={88}
          height={88}
          className="mx-auto mt-2 h-20 w-20 object-contain"
        />
      ) : null}
      {lead ? (
        <p className={`mt-4 text-body-lg ${inverse ? "text-on-inverse-soft" : "text-secondary"}`}>{lead}</p>
      ) : null}
    </header>
  );
}
