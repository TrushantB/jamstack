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

const Home = () => {
  const [homeData, setHomeData] = useState([]);

  const isButton = true;

  const [hoverItem, setHoverItem] = useState(null);

  useEffect(() => {
    get("home").then((response) => {
      console.log(response?.caseStudy?.itemList[0]);
      setHomeData(response);
      setSelectedItem(
        response?.caseStudy?.itemList?.length
          ? response?.caseStudy?.itemList[0]
          : {}
      );
    });
  }, []);

  const [error, setError] = useState("");
  const [isMobileView, setIsMobileView] = useState(false);

  const handleBlur = (event) => {
    if (event.target.value === "") {
      setError("This field is required");
    } else {
      setError("");
    }
  };

  const handleChange = (event) => {
    if (error) {
      setError("");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const onMouseEnter = (card) => {
    setHoverItem(card);
  };
  const onMouseLeave = () => {
    setHoverItem(null);
  };

  const settings = {
    dots: homeData?.textBanner?.sliderControls?.dots,
    infinite: homeData?.textBanner?.sliderControls?.infinite,
    speed: homeData?.textBanner?.sliderControls?.speed,
    autoplaySpeed: homeData?.textBanner?.sliderControls?.autoplaySpeed,
    autoplay: homeData?.textBanner?.sliderControls?.autoplay,
    arrows: homeData?.textBanner?.sliderControls?.arrows,
    swipe: homeData?.textBanner?.sliderControls?.swipe,
  };

  if (!homeData) {
    return <></>;
  }

  return (
    <Layout>
      {<Banner {...homeData.banner} />}

      {<WebSection {...homeData.technologySolution} />}

      {/* textbannerList start  */}
      <TextBannerList {...homeData.textBannerList} />
      {/* textbannerList end  */}

      {/* video component section start */}

      <VideoBanner {...homeData.videoBanner} />

      {/* video banner end  */}

      {/* web facts section start*/}

      <TextBanner {...homeData.textBanner} />

      {/* web facts end  */}

      {/* web stactics section start*/}

      <WebStactics {...homeData.Webstatstics} />

      {/* web stactics end  */}

      {/* benifits section */}
      <Benefits {...homeData.benefits} />

      {/* Product card section start */}
      <ProductCard {...homeData.productCard} />

      {/* product card end  */}

      {/* Our client section start */}

      <OurClient {...homeData.ourClient} />

      {/* our client end  */}

      {/* Edge Network section */}
      <EdgeNetwork {...homeData.edgeNetwork} />

      {/* case study section start */}

      <CaseStudy {...homeData.caseStudy} />

      {/* case study end  */}

      {/* morderTechnology start  */}

      {<Banner {...homeData.morderTechnology} />}

      {/* morderTechnology end  */}

      {/* Testimonial section start*/}

      <TestimonialCard {...homeData.testimonialCard} />

      {/* Testimonial section end  */}

      {/* Blog card section start */}
      <div>
        <div>{homeData?.blogCard?.heading}</div>
        <div>
          <BlogCard {...homeData.blogCard} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
