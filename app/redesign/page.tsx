import { Component as BackgroundGradient } from "@/components/ui/bg-gradient";
import { NuiccNavbar } from "@/components/ui/nuicc-navbar";
import { NuiccHero } from "@/components/ui/nuicc-hero";
import { NuiccVideo } from "@/components/ui/nuicc-video";
import { NuiccAbout } from "@/components/ui/nuicc-about";
import { NuiccServices } from "@/components/ui/nuicc-services";
import { NuiccIndustries } from "@/components/ui/nuicc-industries";
import { NuiccGallery } from "@/components/ui/nuicc-gallery";
import { NuiccEndorsements } from "@/components/ui/nuicc-endorsements";
import { NuiccMedia } from "@/components/ui/nuicc-media";
import { NuiccMembershipCta } from "@/components/ui/nuicc-membership-cta";
import { NuiccFooter } from "@/components/ui/nuicc-footer";

export default function RedesignPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <BackgroundGradient
        gradientFrom="#fbf7ee"
        gradientTo="#e7eef5"
        gradientStop="35%"
        className="bg-background"
      />
      <NuiccNavbar />
      <NuiccHero />
      <NuiccVideo />
      <NuiccAbout />
      <NuiccServices />
      <NuiccIndustries />
      <NuiccGallery />
      <NuiccEndorsements />
      <NuiccMedia />
      <NuiccMembershipCta />
      <NuiccFooter />
    </main>
  );
}
