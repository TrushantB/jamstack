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

  console.log("here", faqData?.accordinData?.accordin);

  return (
    <Layout header={header} footer={footer}>
      <div className="px-24 py-8">
        <Banner {...faqData?.banner} />
      </div>

      <div className="pt-14 lg:px-24">
        <Accordion {...faqData?.accordinData} />
      </div>
      <div className="pt-36 ">
        <BlogCard {...faqData?.blogCard} />
      </div>
    </Layout>
  );
};

export default Faq;
