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
import { SiteMeta } from "@/components/shared/SiteMeta";

const IndexPage = ({ homeData, settings }) => {
  if (!homeData) {
    return <></>;
  }

  return (
    <Layout header={settings.header} footer={settings.footer}>
      <SiteMeta
        description={homeData.seo.seoDescription}
        image={homeData.seo.seoImage}
        title={homeData.seo.seoTitle}
      />
      <div>{<Banner {...homeData.banner} />}</div>

      <WebSection {...homeData.technologySolution} />

      <div>
        <TextBannerList {...homeData.textBannerList} />
      </div>

      <div>
        <VideoBanner {...homeData.videoBanner} />
      </div>

      <div>
        <TextBanner {...homeData.textBanner} />
      </div>

      <WebStactics {...homeData.Webstatstics} />

      <div className="">
        <Benefits {...homeData.benefits} />
      </div>

      <div className=" ">
        <h2 className="text-center pb-10">{homeData?.productCard?.heading}</h2>
        <ProductCard {...homeData.productCard} />
      </div>

      <div className="">
        <OurClient {...homeData.ourClient} />
      </div>

      <div className="">
        <EdgeNetwork {...homeData.edgeNetwork} />
      </div>

      <div className="">
        <CaseStudy {...homeData.caseStudy} />
      </div>

      <div className="pt-6 pb-4 my-16 lg:my-24 bg-accent-100 ">
        {<MordernTechnology {...homeData.morderTechnology} />}
      </div>

      <div className="">
        <TestimonialCard {...homeData.testimonialCard} />
      </div>

      <div className="lg:pt-24 pt-14 ">
        <div className="text-center">
          <h2>{homeData?.blogCard?.heading}</h2>
        </div>
        <div>
          <BlogCard {...homeData.blogCard} />
        </div>
      </div>
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
