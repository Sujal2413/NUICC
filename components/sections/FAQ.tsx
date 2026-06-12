import { SectionHeader } from "@/components/primitives/SectionHeader";
import { FAQAccordion } from "@/components/primitives/FAQAccordion";
import { Reveal } from "@/components/motion/Reveal";
import { faqs } from "@/lib/content";

/** All 15 frequently asked questions. */
export function FAQ() {
  return (
    <section id="faq" className="section scroll-mt-24">
      <div className="container-site">
        <SectionHeader overline="Questions" title="Frequently Asked Questions" />
        <Reveal className="mx-auto max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
