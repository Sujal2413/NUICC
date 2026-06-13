import { Component as BackgroundGradient } from "@/components/ui/bg-gradient";
import { NuiccNavbar } from "@/components/ui/nuicc-navbar";
import { NuiccHero } from "@/components/ui/nuicc-hero";
import { NuiccVideo } from "@/components/ui/nuicc-video";
import { NuiccServices } from "@/components/ui/nuicc-services";
import { NuiccLeaders } from "@/components/ui/nuicc-leaders";
import { NuiccEndorsements } from "@/components/ui/nuicc-endorsements";
import { NuiccFooter } from "@/components/ui/nuicc-footer";

export default function RedesignPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <BackgroundGradient
        gradientFrom="#142447"
        gradientTo="#0B132B"
        gradientStop="32%"
        className="bg-background"
      />
      <NuiccNavbar />
      <NuiccHero />
      <NuiccVideo />
      <NuiccServices />
      <NuiccLeaders />
      <NuiccEndorsements />
      <NuiccFooter />
    </main>
  );
}
