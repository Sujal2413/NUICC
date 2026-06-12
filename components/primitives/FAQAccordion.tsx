"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { Faq } from "@/lib/content";

/**
 * Radix-based accordion (keyboard & screen-reader correct), themed with the
 * tokens. Height + fade animation, 0.3s, disabled under reduced motion.
 */
export function FAQAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      defaultValue="faq-0"
      className="divide-y divide-line overflow-hidden rounded-card border border-line bg-surface shadow-xs"
    >
      {faqs.map((faq, i) => (
        <Accordion.Item key={faq.question} value={`faq-${i}`}>
          <Accordion.Header asChild>
            <h3 className="m-0 font-sans">
              <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-body font-semibold text-heading transition-colors hover:text-link-hover">
                <span>
                  {i + 1}. {faq.question}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-gold-600 transition-transform duration-300 group-data-[state=open]:rotate-180"
                />
              </Accordion.Trigger>
            </h3>
          </Accordion.Header>
          <Accordion.Content className="accordion-content">
            <div className="px-5 pb-5 text-body-sm leading-relaxed text-secondary">
              <p>{faq.answer}</p>
              {faq.list ? (
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {faq.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
