import { React, useEffect, useState } from "react";
import { get } from "@/client/api";
import Layout from "@/components/layout";
import Banner from "@/components/presentational/banner/Banner";
import Accordion from "@/components/accordian/accordion";
import BlogCard from "@/components/blogCard/BlogCard";

const Faq = ({ header, footer }) => {
  const [faqData, setFaqData] = useState(null);

  useEffect(() => {
    get("faq").then((response) => {
      setFaqData(response);
    });
  }, []);

  return (
    <Layout header={header} footer={footer}>
      <div className="container mx-auto">
        <Banner {...faqData?.banner} />
      </div>

      <div className="pt-14 lg:px-25">
        <Accordion {...faqData?.accordinData} />
      </div>

       <div className="lg:px-24 pt-24 ">
        <div className="text-center">
          <h2>{faqData?.blogCard?.heading}</h2>
        </div>
        <div>
          <BlogCard {...faqData?.blogCard} />
        </div>
      </div>
    </Layout>
  );
};

export default Faq;
