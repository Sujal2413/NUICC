import Image from "next/image";
import { HeadingReveal } from "@/components/motion/HeadingReveal";
import { aboutIntro } from "@/lib/content";

type SectionHeaderProps = {
  overline?: string;
  title: React.ReactNode;
  lead?: string;
  /** Show the 20-years seal under the title, as on the original site. */
  seal?: boolean;
  inverse?: boolean;
  align?: "center" | "left";
  id?: string;
};

/**
 * Section heading in the reference language: small-caps eyebrow with a
 * trailing hairline dash, then a serif title revealed line by line.
 */
export function SectionHeader({
  overline,
  title,
  lead,
  seal = false,
  inverse = false,
  align = "center",
  id,
}: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <header className={`mb-12 max-w-3xl ${centered ? "mx-auto text-center" : "text-left"}`} id={id}>
      {overline ? (
        <p
          className={`eyebrow-dash ${inverse ? "eyebrow-dash--inverse" : ""} ${centered ? "eyebrow-dash--center" : ""} mb-4`}
        >
          {overline}
        </p>
      ) : null}
      <HeadingReveal
        as="h2"
        className={`font-serif text-h2 ${inverse ? "text-on-inverse" : "text-heading"}`}
      >
        {title}
      </HeadingReveal>
      {seal ? (
        <Image
          src={aboutIntro.sealLogo.src}
          alt={aboutIntro.sealLogo.alt}
          width={88}
          height={88}
          className={`mt-4 h-16 w-16 object-contain ${centered ? "mx-auto" : ""}`}
        />
      ) : null}
      {lead ? (
        <p className={`mt-4 text-body-lg ${inverse ? "text-on-inverse-soft" : "text-secondary"}`}>{lead}</p>
      ) : null}
    </header>
  );
}
