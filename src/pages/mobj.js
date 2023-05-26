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
import Accordion2 from "@/components/platformAccordian/platformAccordian";
import Cta from "@/components/cta/cta";

const Ecommj = ({ header, footer }) => {
  const [mobjData, setMobjData] = useState(null);

  useEffect(() => {
    get("mobj").then((response) => {
      setMobjData(response);
    });
  }, []);

  console.log("here", mobjData?.cta);

  if (!mobjData) {
    return <></>;
  }
  return (
    <Layout header={header} footer={footer}>
      {/* Banner section */}
      <div className=" pb-32 pt-32 px-5 lg:px-24 ">
        <Banner {...mobjData.banner} />
      </div>

      {/* Ecomm section */}
      <Info {...mobjData.info} />

      {/* Ecomm process */}
      <div className="pb-24 lg:px-24 px-5 ">
        <Stepper {...mobjData?.stepperData} />
      </div>

      {/* Facts Section with bg color */}
      <div className="">
        <ModernTechnologyOne {...mobjData?.morderTechnologyOne} />
      </div>

      {/* Facts Section with bg color */}

      <div className="lg:px-24 py-32">
        {<Accordion2 {...mobjData?.accordian} />}
      </div>

      {/* case study section */}
      <div className=" pb-24 lg:px-24 px-5">
        <CaseStudy {...mobjData?.caseStudy} />
      </div>

      {/* cta section */}
      <div className="flex flex-col bg-accent-100 justify-center items-center">
        <Cta {...mobjData?.cta} />
      </div>

      {/* Testimonial section */}
      <div className="py-24 lg:px-24 px-5  ">
        <TestimonialCard {...mobjData?.testimonialCard} />
      </div>

      {/*  blog section */}
      <div className=" pb-24 px-5 lg:px-24 ">
        <BlogCard {...mobjData?.blogCard} />
      </div>
    </Layout>
  );
};

export default Ecommj;
