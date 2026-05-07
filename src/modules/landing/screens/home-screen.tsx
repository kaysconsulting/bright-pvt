import { BrightPvtHero } from "../components/bright-pvt-hero";
import { BrightPvtAbout } from "../components/bright-pvt-about";
import { BrightPvtServices } from "../components/bright-pvt-services";
import { BrightPvtTestimonials } from "../components/bright-pvt-testimonials";
import { BrightPvtCta } from "../components/bright-pvt-cta";
import { BrightPvtFooter } from "@/modules/shared/components/bright-pvt-footer";

export function HomeScreen() {
  return (
    <>
      <BrightPvtHero />
      <BrightPvtAbout />
      <BrightPvtServices />
      <BrightPvtTestimonials />
      <BrightPvtCta />
      <BrightPvtFooter />
    </>
  );
}
