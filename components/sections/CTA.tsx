import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { HeadingReveal } from "@/components/motion/HeadingReveal";
import { cta, site } from "@/lib/content";

/** Closing call to action — the bright gold "accent of office" moment. */
export function CTA() {
  return (
    <section aria-label="Membership call to action" className="cta-bright">
      <div className="container-site">
        <Reveal className="flex flex-col items-center justify-between gap-6 py-16 text-center md:flex-row md:text-left">
          <div>
            <HeadingReveal as="h2" className="font-serif text-h2 text-heading">
              {cta.title}
            </HeadingReveal>
            <p className="mt-2 text-body-lg text-secondary">{cta.text}</p>
          </div>
          <Link href={site.membershipUrl} className="btn-secondary shrink-0">
            Become a Member
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
