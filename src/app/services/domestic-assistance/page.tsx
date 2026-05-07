import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailScreen } from "@/modules/services/screens/service-detail-screen";
import { getService } from "@/modules/services/types";

const data = getService("domestic-assistance");

export const metadata: Metadata = {
  title: "Domestic Assistance — Bright Pvt",
  description:
    "In-home and domestic assistance NDIS services in Canberra ACT — personal care, meal preparation, household chores, companionship, and more.",
};

export default function DomesticAssistancePage() {
  if (!data) notFound();
  return <ServiceDetailScreen data={data} />;
}
