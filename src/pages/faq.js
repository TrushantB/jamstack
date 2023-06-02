import { React, useEffect, useState } from "react";
import { get } from "@/client/api";
import Layout from "@/components/layout";
import Banner from "@/components/presentational/banner/Banner";
import BlogCard from "@/components/blogCard/BlogCard";
import Accordion from "@/components/accordian/accordion";

const Faq = ({ header, footer, faqData }) => {
  return (
    <Layout header={header} footer={footer}>
      <div className="container mx-auto">
        <div className="">
          <Banner {...faqData?.banner} />
        </div>

        <div className="conatiner mx-auto px-4 lg:px-0">
          <Accordion {...faqData?.accordinData} />
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

export async function getStaticProps() {
  const faqData = await get("faq");
  return { props: { faqData } };
}

export default Faq;
