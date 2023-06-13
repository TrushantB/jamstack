import { React } from "react";
import Layout from "@/components/layout";
import Banner from "@/components/presentational/banner/Banner";
import BlogCard from "@/components/blogCard/BlogCard";
import Accordion from "@/components/accordian/accordion";
import { refactorSettings } from "@/utils/settings";
import { refactorFAQ } from "@/utils/faq";
import { getFAQ, getSettings } from "@/lib/sanity.client";

const Faq = ({ header, footer, faqData }) => {
  return (
    <Layout header={header} footer={footer}>
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

export const getStaticProps = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const token = previewData.token

  const [settings, faq] = await Promise.all([
    getSettings({ token }),
    getFAQ({ token }),
  ])

  if (!faq) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      faqData: refactorFAQ(faq),
      settings: refactorSettings(settings),
      preview,
      token: previewData.token ?? null,
    },
  }
}

export default Faq;
