import { React } from "react";
import Layout from "@/components/layout";
import Banner from "@/components/presentational/banner/Banner";
import WebSection from "@/components/webSection/webSection";
import TextBannerList from "@/components/textBannerList/textBannerList";
import VideoBanner from "@/components/VideoBanner/VideoBanner";
import TextBanner from "@/components/textBanner/TextBanner";
import WebStactics from "@/components/webStactics/WebStactics";
import Benefits from "@/components/presentational/benefits/Benefits";
import ProductCard from "@/components/productCard/productCard";
import OurClient from "@/components/ourClient/OurClient";
import EdgeNetwork from "@/components/EdgeNetwork/EdgeNetwork";
import CaseStudy from "@/components/caseStudy/CaseStudy";
import TestimonialCard from "@/components/presentational/testimonialCard/TestimonialCard";
import BlogCard from "@/components/blogCard/BlogCard";
import MordernTechnology from "@/components/modernTechonology/modernTechnology";
import { getSettings, getHomePage } from "@/lib/sanity.client";
import { refactorSettings } from "@/utils/settings";
import { refactorHome } from "@/utils/home";

const IndexPage = ({ homeData, settings }) => {
  if (!homeData) {
    return <></>;
  }

  return (
    <Layout header={settings.header} footer={settings.footer}>
      <section >{<Banner {...homeData.banner} />}</section>

      <section> 
        <WebSection {...homeData.technologySolution} />
      </section>

      <section >
        <TextBannerList {...homeData.textBannerList} />
      </section>

      <section aria-hidden="true" >
        <VideoBanner {...homeData.videoBanner} />
      </section>

      <section aria-label="web facts" >
        <TextBanner {...homeData.textBanner} />
      </section>
      <section >
      <WebStactics  {...homeData.Webstatstics} />
      </section>

      <section>
        <Benefits {...homeData.benefits} />
      </section>

      <section className=" ">
        <h2 className="text-center pb-10">{homeData?.productCard?.heading}</h2>
        <ProductCard {...homeData.productCard} />
      </section>

      <section className="">
        <OurClient {...homeData.ourClient} />
      </section>

      <section aria-hidden="true">
        <EdgeNetwork {...homeData.edgeNetwork} />
      </section>

      <section className="">
        <CaseStudy {...homeData.caseStudy} />
      </section>

      <section className="pt-6 pb-4 my-16 lg:my-24 bg-accent-100 ">
        {<MordernTechnology {...homeData.morderTechnology} />}
      </section>

      <section className="">
        <TestimonialCard {...homeData.testimonialCard} />
      </section>

      <section className="lg:pt-24 pt-14 ">
        <div className="text-center">
          <h2>{homeData?.blogCard?.heading}</h2>
        </div>
        <div>
          <BlogCard {...homeData.blogCard} />
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const token = previewData.token
  const [settings, page] = await Promise.all([
    getSettings({ token }),
    getHomePage({ token }),
  ])

  return {
    props: {
      homeData: refactorHome(page),
      settings: refactorSettings(settings),
      preview,
      token: previewData.token ?? null,
    },
  }
}

export default IndexPage;
