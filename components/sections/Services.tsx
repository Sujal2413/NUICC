import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { ServiceCard } from "@/components/primitives/ServiceCard";
import { Reveal } from "@/components/motion/Reveal";
import { whatWeDo, services, site, aboutIntro } from "@/lib/content";

/** "What We Do" — the six service capability cards. */
export function Services() {
  return (
    <section className="section relative isolate overflow-hidden">
      <Image src={whatWeDo.background} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-[0.06]" />
      <div className="container-site">
        <SectionHeader
          overline={whatWeDo.label}
          title={
            <>
              Partner with NUICC to <span className="text-gold-700">Ensure Global</span> Business Success
            </>
          }
          lead={whatWeDo.subtext}
        />
        <Reveal className="mb-10 text-center">
          <Image
            src={aboutIntro.sealLogo.src}
            alt={aboutIntro.sealLogo.alt}
            width={96}
            height={96}
            className="mx-auto h-24 w-24 object-contain"
          />
        </Reveal>
        <Reveal stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </Reveal>
        <Reveal className="mt-10 text-center">
          <Link href={site.membershipUrl} className="btn-primary">
            Become a Member
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
