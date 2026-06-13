"use client";

import { motion } from "motion/react";
import { FileText, ArrowUpRight } from "lucide-react";

/* Real letters of support — PDFs carried over from the existing site. Labels
   mirror the originals so each endorsement stays correctly attributed. */
const LETTERS = [
  { name: "Prime Minister of India", role: "Government of India", file: "/assets/img/home/NUICC___Prime_Minister_of_India_Letter_of_Support.pdf" },
  { name: "Commerce Minister of India", role: "Ministry of Commerce & Industry", file: "/assets/img/home/NUICC___Commerce_Minister_of_India_Letter_of_Support.pdf" },
  { name: "President George W. Bush", role: "43rd President of the United States", file: "/assets/img/home/NUICC_Co_Chair_Letter_of_Recommendation_to_President_George_W_1_._Bush.pdf" },
  { name: "Congressman Mark Udall", role: "United States Congress · NUICC Co-Chair", file: "/assets/img/home/NUICC_Co_Chair_Congressman_Mark_Udall.pdf" },
  { name: "Congressman Bob Beauprez", role: "United States Congress", file: "/assets/img/home/Congressman_Bob_Beauprez_Supports_NUICC_in_Indo_US_Nuclear_Deal.pdf" },
  { name: "Governor Bill Owens", role: "Governor of Colorado", file: "/assets/img/home/Colorado_Gov_1_._Bill_Owens___Purnima_Voria.pdf" },
];

export function NuiccEndorsements() {
  return (
    <section
      id="endorsements"
      className="section-pad w-full bg-primary text-primary-foreground"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
            Letters of Support
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Backed at the highest levels of government.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
            For two decades, NUICC&rsquo;s work has been recognised by heads of state,
            members of the U.S. Congress, and ministers of the Government of India.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {LETTERS.map((l, i) => (
            <motion.a
              key={l.name}
              href={l.file}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
              className="group flex flex-col gap-4 rounded-2xl border border-[#D4AF37]/25 bg-white/[0.06] p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:bg-white/[0.1] hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/45 text-[#E8D9A8]">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-bold leading-tight">{l.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-primary-foreground/55">{l.role}</p>
                </div>
              </div>
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#D4AF37]/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#E8D9A8] transition-colors group-hover:bg-[#D4AF37] group-hover:text-[#0B132B]">
                View Letter <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
