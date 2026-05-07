import { BrightPvtAboutHero } from "../components/bright-pvt-about-hero";
import { BrightPvtAboutStory } from "../components/bright-pvt-about-story";
import { BrightPvtAboutMission } from "../components/bright-pvt-about-mission";
import { BrightPvtAboutValues } from "../components/bright-pvt-about-values";
import { BrightPvtCta } from "@/modules/landing/components/bright-pvt-cta";
import { BrightPvtFooter } from "@/modules/shared/components/bright-pvt-footer";

export function AboutScreen() {
  return (
    <>
      <BrightPvtAboutHero />
      <BrightPvtAboutStory />
      <BrightPvtAboutMission />
      <BrightPvtAboutValues />
      <BrightPvtCta />
      <BrightPvtFooter />
    </>
  );
}
