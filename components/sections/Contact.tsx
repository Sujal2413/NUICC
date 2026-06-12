import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { contact, site } from "@/lib/content";

/** Contact — world-map panel, office details, and the validated inquiry form. */
export function Contact() {
  return (
    <section id="contact" className="section scroll-mt-24 relative isolate overflow-hidden bg-sunken">
      <Image src={contact.background} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-[0.06]" />
      <div className="container-site">
        <SectionHeader overline="Get in Touch" title="Contact Us" />
        <Reveal className="grid items-stretch gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-between rounded-card border border-line bg-surface p-6 shadow-xs">
            <Image
              src={contact.map.src}
              alt={contact.map.alt}
              width={1000}
              height={560}
              className="h-auto w-full rounded-md object-cover"
            />
            <address className="mt-6 space-y-3 not-italic">
              <p className="flex items-start gap-3 text-body-sm text-secondary">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                {site.address}
              </p>
              <p className="flex items-center gap-3 text-body-sm">
                <Phone className="h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                <a href={site.phoneHref} className="text-link hover:text-link-hover">
                  {site.phone}
                </a>
              </p>
              <p className="flex items-center gap-3 text-body-sm">
                <Mail className="h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="text-link hover:text-link-hover">
                  {site.email}
                </a>
              </p>
            </address>
          </div>
          <div className="rounded-card border border-line bg-surface p-6 shadow-xs md:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
