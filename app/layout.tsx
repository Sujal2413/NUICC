import type { Metadata } from "next";
import { LenisProvider } from "@/components/motion/LenisProvider";
import { site } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "National U.S.-India Chamber of Commerce | NUICC",
    template: "%s | NUICC",
  },
  description:
    "NUICC is a 501(c)(6) chamber promoting bilateral trade between the United States and India — connecting businesses to the opportunities, partners, and policymakers that matter.",
  keywords: [
    "NUICC",
    "US India Chamber of Commerce",
    "bilateral trade",
    "US India business",
    "trade missions",
    "Purnima Voria",
  ],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "National U.S.-India Chamber of Commerce",
    description:
      "Your gateway to strategic partnership for business deals between the United States and India.",
    images: [{ url: "/assets/img/home/NUICC_Logo.png", alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@NUICC",
  },
  icons: { icon: "/assets/img/favicon.png" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  logo: `${site.url}/assets/img/home/NUICC_Logo.png`,
  email: site.email,
  telephone: "+1-720-323-3728",
  nonprofitStatus: "Nonprofit501c6",
  founder: { "@type": "Person", name: "Dr. Purnima Voria" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "1099 17th St, Suite 2150",
    addressLocality: "Denver",
    addressRegion: "CO",
    postalCode: "80202",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/www.nuicc.info/",
    "https://x.com/NUICC",
    "https://www.linkedin.com/company/nuicc/",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />

        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
