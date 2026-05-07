import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailScreen } from "@/modules/services/screens/service-detail-screen";
import { getService } from "@/modules/services/types";

const data = getService("transport");

export const metadata: Metadata = {
  title: "Transport — Bright Pvt",
  description:
    "Reliable, supportive NDIS transport in Canberra ACT — medical appointments, therapy, community access, shopping, and emergency transport.",
};

export default function TransportPage() {
  if (!data) notFound();
  return <ServiceDetailScreen data={data} />;
}
