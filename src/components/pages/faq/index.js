import { React } from "react";
import Layout from "@/components/layout";
import Banner from "@/components/presentational/banner/Banner";
import BlogCard from "@/components/blogCard/BlogCard";
import Accordion from "@/components/accordian/accordion";

const Faq = ({ faqData, settings, preview }) => {
  return (
    <Layout header={settings.header} footer={settings.footer} preview={preview}>
      <div className="container mx-auto">
        <section className="">
          <Banner {...faqData?.banner} />
        </section>

        <section className="conatiner mx-auto px-4 lg:px-0">
          <Accordion {...faqData?.accordinData} isActiveFirst={true} />
        </section>

        <section className="container mx-auto px-4 lg:px-0 py-12 lg:py-18">
          <div className="text-center">
            <h2>{faqData?.blogCard?.heading}</h2>
          </div>
          <section>
            <BlogCard {...faqData?.blogCard} />
          </section>
        </section>
      </div>
    </Layout>
  );
};

export default Faq;
