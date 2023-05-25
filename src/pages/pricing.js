import { React, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { get } from "@/client/api";
import Layout from "@/components/layout";
import PricingPlan from "@/components/pricingPlan/PricingPlan";

const Pricing = () => {
  const [priceData, setPriceData] = useState([]);
  const [isMobileView, setIsMobileView] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    get("pricing").then((response) => {
      console.log(response?.caseStudy?.itemList[0]);
      setPriceData(response);
    });

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


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

  const settings = {
    dots: priceData?.textBanner?.sliderControls?.dots,
    infinite: priceData?.textBanner?.sliderControls?.infinite,
    speed: priceData?.textBanner?.sliderControls?.speed,
    autoplaySpeed: priceData?.textBanner?.sliderControls?.autoplaySpeed,
    autoplay: priceData?.textBanner?.sliderControls?.autoplay,
    arrows: priceData?.textBanner?.sliderControls?.arrows,
    swipe: priceData?.textBanner?.sliderControls?.swipe,
  };

  return (
    <Layout>
      {/* Banner section with image bottom  */}
      <div className="container px-3.5 lg:pt-32 pt-14 pb-14 lg:pb-32">
        <div>
          <div className="">
            <div>
              <div>
                <h2 className="text-center text-bold lg:w-6/12 mx-auto">
                  {priceData?.banner?.heading}
                </h2>
                <div className="lg:my-16 my-4 text-center pt-4 lg:pt-16">
                  <button
                    className={`bg-pink-500 text-white rounded-full lg:px-4  px-3  py-2 lg:py-3 font-bold`}
                  >
                    {priceData?.banner?.label}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex pt-16 lg:pt-24 items-center justify-center">
            <picture>
              <source
                media="(min-width:650px)"
                srcSet={priceData?.banner?.image}
              />
              <source
                media="(min-width:360px)"
                srcSet={priceData?.banner?.imageTwo}
              />
              <img
                src="img_orange_flowers.jpg"
                alt="Flowers"
                style={{ width: "auto" }}
              />
            </picture>
          </div>
        </div>
      </div>

      {/* web facts section */}
      <div className="p-5 lg:px-10 flex flex-col gap-5 py-12 bg-accent-100 ">
        <Slider {...settings}>
          {priceData?.textBanner?.info.map((item, index) => (
            <div key={index}>
              <div
                className={`${item.icon} w-20 h-20 bg-tertiary`}
                alt={item.alt}
              ></div>
              <div>
                <h3 className="w-11/12">{item.label}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* web statics */}

      <div className="bg-secondary text-white  px-3.5 lg:pl-28 py-6 lg:py-16">
        <div className="">
          <h2 className="">{priceData?.Webstatstics?.heading}</h2>
        </div>
        <div className="">
          <p className="w-7/12">
            Check your website performance and check how Jamstack+ can help you
            improve your business.
          </p>
        </div>
      </div>

      {/* Custom Plan */}

      <div className="border-t-2 border-b-2 border-red-600 py-24">
        {/* <h3 className="text-4xl text-center py-24 ">Custom Plan</h3> */}
        <PricingPlan customPlan={priceData.customPlan} />
      </div>

      {/* Pricing Faq section */}

      <div className="border-t-2 border-b-2 border-blue-600 pb-32">
        <h3 className="text-4xl  text-center ">Pricing Faq</h3>
      </div>

      {/* Connect check choose section*/}

      <div className="border-t-2 border-b-2 border-red-600 pb-32 lg:pl-24">
        <h2 className=" ">Connect, Check, Choose</h2>
        <p className="w-5/12">
          Not sure what will work for you. Connect with Jamstack+ and know how
          can we help you improve your business.
        </p>
      </div>
    </Layout>
  );
};

export default Pricing;
