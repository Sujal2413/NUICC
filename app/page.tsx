import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { StatsBand } from "@/components/sections/StatsBand";
import { About } from "@/components/sections/About";
import { LeadersWall } from "@/components/sections/LeadersWall";
import { Services } from "@/components/sections/Services";
import { AboutExpanded } from "@/components/sections/AboutExpanded";
import { MarketsIndiaUSA } from "@/components/sections/MarketsIndiaUSA";
import { WhyJoin } from "@/components/sections/WhyJoin";
import { FounderMessage } from "@/components/sections/FounderMessage";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { Industries } from "@/components/sections/Industries";
import { ExecutiveCommittee } from "@/components/sections/ExecutiveCommittee";
import { FeaturedLaunches } from "@/components/sections/FeaturedLaunches";
import { Gallery } from "@/components/sections/Gallery";
import { Press } from "@/components/sections/Press";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

/** All twenty sections of the original site, in the original order. */
export default function HomePage() {
  return (
    <>
      <Header overlay />
      <main id="main">
        <Hero />
        <StatsBand />
        <About />
        <LeadersWall />
        <Services />
        <AboutExpanded />
        <MarketsIndiaUSA />
        <WhyJoin />
        <FounderMessage />
        <PartnerLogos />
        <Industries />
        <ExecutiveCommittee />
        <FeaturedLaunches />
        <Gallery />
        <Press />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
