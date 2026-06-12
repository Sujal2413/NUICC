import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { cta, site } from "@/lib/content";

/** Closing call to action band above the footer. */
export function CTA() {
  return (
    <section aria-label="Membership call to action" className="bg-inverse">
      <div className="container-site">
        <Reveal className="flex flex-col items-center justify-between gap-6 border-b py-14 text-center md:flex-row md:text-left"
        >
          <div>
            <h2 className="font-serif text-h2 text-on-inverse">{cta.title}</h2>
            <p className="mt-2 text-body-lg text-on-inverse-soft">{cta.text}</p>
          </div>
          <Link href={site.membershipUrl} className="btn-primary shrink-0">
            Become a Member
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
