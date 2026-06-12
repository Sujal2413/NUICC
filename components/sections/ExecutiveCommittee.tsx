import Image from "next/image";
import { FileText } from "lucide-react";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { executiveCommittee, committeeBackground } from "@/lib/content";

/** The formal officer table — a signature credibility component. */
export function ExecutiveCommittee() {
  return (
    <section className="section relative isolate overflow-hidden">
      <Image src={committeeBackground} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-[0.07]" />
      <div className="container-site">
        <SectionHeader overline="Governance" title="NUICC Executive Committee" />
        <Reveal className="mx-auto max-w-3xl overflow-hidden rounded-card border border-line shadow-sm">
          <table className="w-full border-collapse bg-surface text-left">
            <caption className="sr-only">NUICC Executive Committee officers</caption>
            <thead className="sr-only">
              <tr>
                <th scope="col">Office</th>
                <th scope="col">Officer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {executiveCommittee.map((member) => (
                <tr key={member.role}>
                  <th
                    scope="row"
                    className="w-[45%] bg-navy-800 px-5 py-4 align-top text-body-sm font-semibold text-on-inverse"
                  >
                    {member.role}
                  </th>
                  <td className="px-5 py-4 text-body-sm text-ink">
                    {member.name}
                    {"bio" in member && member.bio ? (
                      <>
                        {" — "}
                        <a
                          href={member.bio.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-medium text-link underline-offset-2 hover:text-link-hover hover:underline"
                        >
                          <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                          {member.bio.label}
                        </a>
                      </>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
