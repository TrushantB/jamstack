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

const Platform = ({ platformsData, settings, preview }) => {
  if (!platformsData) {
    return <></>;
  }
  return (
    <Layout header={settings.header} footer={settings.footer} preview={preview}>
      <section className="pb-0 pt-0">
        <Banner {...platformsData.banner} />
      </section>

      <Info {...platformsData.info} />

      <section className="pb-4 md:pb-14 lg:pb-24 lg:px-24 px-5 ">
        <Stepper {...platformsData?.stepperData} />
      </section>

      <section className="">
        <ModernTechnologyOne {...platformsData?.morderTechnologyOne} />
      </section>

      <section className="container mx-auto px-4 md:px-0 pt-8 pb-14 md:py-20 lg:py-24">
        {<PlatformAccordian {...platformsData?.accordian} />}
      </section>

      <section className="container mx-auto px-4 md:px-0 pb-12 md:pb-24">
        <CaseStudy {...platformsData?.caseStudy} />
      </section>

      <section className="flex flex-col bg-accent-100 justify-center items-center">
        <Cta {...platformsData?.cta} />
      </section>

      <section className="py-12 md:py-20 lg:py-24 container mx-auto px-4 md:px-0">
        <TestimonialCard {...platformsData?.testimonialCard} />
      </section>

      <section className="container mx-auto px-4 md:px-0 pb-12 lg:pb-24">
        <BlogCard {...platformsData?.blogCard} />
      </section>
    </Layout>
  );
};

export default Platform;
