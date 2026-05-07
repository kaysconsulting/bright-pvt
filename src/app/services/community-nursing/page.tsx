import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailScreen } from "@/modules/services/screens/service-detail-screen";
import { getService } from "@/modules/services/types";

const data = getService("community-nursing");

export const metadata: Metadata = {
  title: "Community Nursing — Bright Pvt",
  description:
    "NDIS community nursing services in Canberra ACT — medication administration, wound management, catheter care, stoma care, and more.",
};

export default function CommunityNursingPage() {
  if (!data) notFound();
  return <ServiceDetailScreen data={data} />;
}
