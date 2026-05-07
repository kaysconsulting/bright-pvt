import type { Metadata } from "next";
import { ContactScreen } from "@/modules/contact/screens/contact-screen";

export const metadata: Metadata = {
  title: "Contact Us — Bright PVT",
  description:
    "Get in touch with the Bright PVT team. Ask about our NDIS services in Canberra — community nursing, domestic assistance, and transport.",
};

export default function ContactPage() {
  return <ContactScreen />;
}
