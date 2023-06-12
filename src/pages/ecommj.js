import { React } from "react";
import { get } from "@/client/api";
import Layout from "@/components/layout";
import Stepper from "@/components/stepper/stepper";
import Banner from "@/components/presentational/banner/Banner";
import Info from "@/components/presentational/info/info";
import BlogCard from "@/components/blogCard/BlogCard";
import TestimonialCard from "@/components/presentational/testimonialCard/TestimonialCard";
import CaseStudy from "@/components/caseStudy/CaseStudy";
import ModernTechnologyOne from "@/components/modernTechnologyOne/modernTechnologyOne";
import PlatformAccordian from "@/components/platformAccordian/platformAccordian";
import Cta from "@/components/cta/cta";
import { getPlatformsQueryEcomj, getSettings } from "@/lib/sanity.client";
import { refactorSettings } from "@/utils/settings";
import { refactorPlatforms } from "@/utils/platforms";

const Ecommj = ({ header, footer, ecommjData, settings }) => {
  if (!ecommjData) {
    return <></>;
  }
  return (
    <Layout header={settings.header} footer={settings.footer}>
      <div className="pb-0 pt-0">
        <Banner {...ecommjData.banner} />
      </div>

      <Info {...ecommjData.info} />

      <div className="pb-12 md:pb-24 lg:px-24 px-5 ">
        <Stepper {...ecommjData?.stepperData} />
      </div>

      <div className="">
        <ModernTechnologyOne {...ecommjData?.morderTechnologyOne} />
      </div>

      <div className="container mx-auto px-4 md:px-0 py-16 md:py-24">
        {<PlatformAccordian {...ecommjData?.accordian} />}
      </div>
      <div className="container mx-auto px-4 md:px-0 pb-12 md:pb-24">
        <CaseStudy {...ecommjData?.caseStudy} />
      </div>

      <div className="flex flex-col bg-accent-100 justify-center items-center">
        <Cta {...ecommjData?.cta} />
      </div>

      <div className="py-12 md:py-24 container mx-auto px-4 md:px-0">
        <TestimonialCard {...ecommjData?.testimonialCard} />
      </div>

      <div className="container mx-auto px-4 md:px-0 pb-12 md:pb-24">
        <BlogCard {...ecommjData?.blogCard} />
      </div>
    </Layout>
  );
};
export async function getStaticProps(ctx) {
  const { preview = false, previewData = {} } = ctx

  const token = previewData.token
  const [settings, platform] = await Promise.all([
    getSettings({ token }),
    getPlatformsQueryEcomj({ token }),
  ])

  return {
    props: {
      ecommjData: refactorPlatforms(platform),
      settings: refactorSettings(settings),
      preview,
      token: previewData.token ?? null,
    },
  }
}

export default Ecommj;
