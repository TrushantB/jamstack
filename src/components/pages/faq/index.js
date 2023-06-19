import { React } from "react";
import Layout from "@/components/layout";
import Banner from "@/components/presentational/banner/Banner";
import BlogCard from "@/components/blogCard/BlogCard";
import Accordion from "@/components/accordian/accordion";

const Faq = ({ faqData, settings, preview }) => {
  return (
    <Layout header={settings.header} footer={settings.footer} preview={preview}>
      <div className="container mx-auto">
        <div className="">
          <Banner {...faqData?.banner} />
        </div>

        <div className="conatiner mx-auto px-4 lg:px-0">
          <Accordion {...faqData?.accordinData} isActiveFirst={true} />
        </div>

        <div className="container mx-auto px-4 lg:px-0 py-12 lg:py-18">
          <div className="text-center">
            <h2>{faqData?.blogCard?.heading}</h2>
          </div>
          <div>
            <BlogCard {...faqData?.blogCard} />
          </div>
        </div>
      </div>
    </Layout>
  );
};


export default Faq;
