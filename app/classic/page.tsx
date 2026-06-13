import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import CurvedTicker from "@/components/sections/CurvedTicker";
import About from "@/components/sections/About";
import Endorsements from "@/components/sections/Endorsements";
import Services from "@/components/sections/Services";
import DomeGallery from "@/components/sections/DomeGallery";
import Markets from "@/components/sections/Markets";
import Membership from "@/components/sections/Membership";
import FeaturedLaunches from "@/components/sections/FeaturedLaunches";
import Press from "@/components/sections/Press";
import FounderMessage from "@/components/sections/FounderMessage";
import Industries from "@/components/sections/Industries";
import ExecutiveCommittee from "@/components/sections/ExecutiveCommittee";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import PixelReveal from "@/components/motion/PixelReveal";

// The original dark-luxury site, preserved at /classic so no content is lost
// while the redesign is the homepage.
export default function ClassicHomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <CurvedTicker />
      <PixelReveal>
        <About />
      </PixelReveal>
      <Endorsements />
      <PixelReveal>
        <Services />
      </PixelReveal>
      <DomeGallery />
      <Markets />
      <Membership />
      <FeaturedLaunches />
      <Press />
      <FounderMessage />
      <Industries />
      <ExecutiveCommittee />
      <FAQ />
      <Contact />
    </main>
  );
}
