import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailScreen } from "@/modules/services/screens/service-detail-screen";
import { getService } from "@/modules/services/types";

const data = getService("clinical-capability");

export const metadata: Metadata = {
  title: "Clinical Capability — Bright Pvt",
  description:
    "Advanced clinical support from qualified Registered Nurses in Canberra ACT — assessment, medication management, wound care, chronic disease management, emergency response, and palliative care.",
};

export default function ClinicalCapabilityPage() {
  if (!data) notFound();
  return <ServiceDetailScreen data={data} />;
}
