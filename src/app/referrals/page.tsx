import type { Metadata } from "next";
import { ReferralScreen } from "@/modules/referral/screens/referral-screen";

export const metadata: Metadata = {
  title: "Referrals — Bright Pvt",
  description:
    "Submit a referral for NDIS clinical capability, community nursing, domestic assistance, or transport in Canberra ACT.",
};

export default function ReferralsPage() {
  return <ReferralScreen />;
}
