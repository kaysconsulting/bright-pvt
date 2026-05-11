import { BrightPvtServiceDetailHero } from "../components/bright-pvt-service-detail-hero";
import { BrightPvtServiceDetailContent } from "../components/bright-pvt-service-detail-content";
import { BrightPvtServiceQualifications } from "../components/bright-pvt-service-qualifications";
import { BrightPvtCta } from "@/modules/landing/components/bright-pvt-cta";
import { BrightPvtFooter } from "@/modules/shared/components/bright-pvt-footer";
import type { ServiceDetail } from "@/modules/services/types";

interface Props {
  data: ServiceDetail;
}

export function ServiceDetailScreen({ data }: Props) {
  return (
    <>
      <BrightPvtServiceDetailHero data={data} />
      <BrightPvtServiceDetailContent data={data} />
      {data.qualifications && (
        <BrightPvtServiceQualifications qualifications={data.qualifications} />
      )}
      <BrightPvtCta />
      <BrightPvtFooter />
    </>
  );
}
