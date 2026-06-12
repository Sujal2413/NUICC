/* eslint-disable @next/next/no-img-element -- tiny local SVG flags need no optimizer */
import { Check } from "lucide-react";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { markets } from "@/lib/content";

/** Core services for each market — the India and USA capability cards. */
export function MarketsIndiaUSA() {
  return (
    <section id="services" className="section scroll-mt-24 bg-sunken">
      <div className="container-site">
        <SectionHeader overline="Two Markets, One Chamber" title="Our Core Services" seal />
        <Reveal stagger className="grid gap-6 lg:grid-cols-2">
          {markets.map((market) => (
            <article
              key={market.country}
              className="card-lift flex h-full flex-col rounded-card border border-line bg-surface p-6 shadow-xs md:p-8"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={market.flag}
                  alt={`Flag of ${market.country === "USA" ? "the United States" : market.country}`}
                  width={60}
                  height={40}
                  className="flag-frame rounded-xs border border-line object-cover shadow-xs"
                />
                <h3 className="mt-3 font-serif text-h3">{market.country}</h3>
                <span className="gold-rule gold-rule--center" aria-hidden="true" />
              </div>
              <ul className="mt-4 space-y-3">
                {market.items.map((item) => (
                  <li key={item} className="flex gap-3 text-body-sm text-secondary">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
