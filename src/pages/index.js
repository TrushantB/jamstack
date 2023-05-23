import { React, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { get } from "@/client/api";
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

const Home = () => {
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    get("home").then((response) => {
      setHomeData(response);
    });
  }, []);

  if (!homeData) {
    return <></>;
  }

  return (
    <Layout>
      <div className="lg:px-24 px-5 py-24">
        {<Banner {...homeData.banner} />}
      </div>

      {<WebSection {...homeData.technologySolution} />}

      {/* textbannerList start  */}
      <div className="">
        <TextBannerList {...homeData.textBannerList} />
      </div>

      {/* textbannerList end  */}

      {/* video component section start */}
      <div className="lg:py-24">
        <VideoBanner {...homeData.videoBanner} />
      </div>

      {/* video banner end  */}

      {/* web facts section start*/}
      <div className="">
        <TextBanner {...homeData.textBanner} />
      </div>

      {/* web facts end  */}

      {/* web stactics section start*/}

      <WebStactics {...homeData.Webstatstics} />

      {/* web stactics end  */}

      {/* benifits section */}
      <div className="lg:px-24 pb-24">
        <Benefits {...homeData.benefits} />
      </div>

      {/* Product card section start */}
      <div className="pb-24 lg:px-24 ">
        <h2 className="text-center pb-14">{homeData?.productCard?.heading}</h2>
        <ProductCard {...homeData.productCard} />
      </div>

      {/* product card end  */}

      {/* Our client section start */}
      <div className="lg:px-24 px-5 pb-24">
        <OurClient {...homeData.ourClient} />
      </div>

      {/* our client end  */}

      {/* Edge Network section */}
      <div className="lg:px-24 px-5">
        <EdgeNetwork {...homeData.edgeNetwork} />
      </div>

      <div className="lg:px-24 px-5">
        {/* case study section start */}

        <CaseStudy {...homeData.caseStudy} />
      </div>

      {/* case study end  */}

      {/* morderTechnology start  */}
      <div className="my-24 pt-6 pb-4 bg-accent-100 ">
        {<MordernTechnology {...homeData.morderTechnology} />}
      </div>

      {/* morderTechnology end  */}

      {/* Testimonial section start*/}
      <div className="lg:px-24 px-5">
        <TestimonialCard {...homeData.testimonialCard} />
      </div>

      {/* Testimonial section end  */}

      {/* Blog card section start */}
      <div className="lg:px-24 pt-24 ">
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

export default Home;
