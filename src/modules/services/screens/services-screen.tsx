import { BrightPvtServicesHero } from "../components/bright-pvt-services-hero";
import { BrightPvtServices } from "@/modules/landing/components/bright-pvt-services";
import { BrightPvtCta } from "@/modules/landing/components/bright-pvt-cta";
import { BrightPvtFooter } from "@/modules/shared/components/bright-pvt-footer";

export function ServicesScreen() {
  return (
    <>
      <BrightPvtServicesHero />
      <BrightPvtServices />
      <BrightPvtCta />
      <BrightPvtFooter />
    </>
  );
}
