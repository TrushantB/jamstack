import { React, useState, useEffect } from "react";
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

const Ecommj = ({ header, footer }) => {
  const [webData, setWebData] = useState(null);

  useEffect(() => {
    get("webj").then((response) => {
      setWebData(response);
    });
  }, []);

  if (!webData) {
    return <></>;
  }
  return (
    <Layout header={header} footer={footer}>
      <div className="pb-0 pt-0">
        <Banner {...webData.banner} />
      </div>

      <Info {...webData.info} />

      <div className="pb-12 md:pb-24 lg:px-24 px-5 ">
        <Stepper {...webData?.stepperData} />
      </div>

      <div className="">
        <ModernTechnologyOne {...webData?.morderTechnologyOne} />
      </div>

      <div className="container mx-auto px-4 md:px-0 py-16 md:py-24">
        {<PlatformAccordian {...webData?.accordian} />}
      </div>

      <div className="container mx-auto px-4 md:px-0 pb-12 md:pb-24">
        <CaseStudy {...webData?.caseStudy} />
      </div>

      {/* cta section */}
      <div className="flex flex-col bg-accent-100 justify-center items-center">
        <Cta {...webData?.cta} />
      </div>

      {/* Testimonial section */}
      <div className="py-12 md:py-24 container mx-auto px-4 md:px-0">
        <TestimonialCard {...webData?.testimonialCard} />
      </div>

      {/*  blog section */}
    <div className="container mx-auto px-4 md:px-0 pb-12 md:pb-24">
        <BlogCard {...webData?.blogCard} />
      </div>
    </Layout>
  );
};

export default Ecommj;