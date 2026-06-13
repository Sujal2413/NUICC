import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership Tiers & Benefits | NUICC",
  description:
    "Join the National U.S.-India Chamber of Commerce. Compare membership tiers — Individual, Small Business, Associate, Corporate, and Chairman's Circle — and the benefits each unlocks for U.S.–India business.",
};

export default function MembershipLayout({ children }: { children: React.ReactNode }) {
  return children;
}
