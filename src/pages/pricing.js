import { React, useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { get } from "@/client/api";

const pricing = () => {
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

  const isButton = true;

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
    <div className="container">
      {/* Header Section */}
      <Header />

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
        <div className="mt-7">
          <p className="w-7/12">{priceData?.Webstatstics?.description}</p>
        </div>

        {/* input start  */}
        <div className="flex lg:flex-row gap-4 mt-12 lg:gap-0 items-center">
          <input
            placeholder={priceData?.Webstatstics?.placeholder}
            className="border rounded-full py-2 px-2 lg:pl-4 lg:w-1/2"
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {isMobileView ? (
            <div className="bg-primary rounded-full w-10 flex justify-center items-center -ml-14 h-10">
              <a
                href="#"
                className="icon-arrow-right2 text-2xl text-white "
              ></a>
            </div>
          ) : (
            isButton && (
              <button className="bg-primary py-2 px-4 rounded-full -ml-20 text-xl text-white">
                {priceData?.Webstatstics?.buttonLabel}
              </button>
            )
          )}
        </div>
        {error && (
          <div className="flex flex-wrap items-center ml-4 w-full sm:w-1/2 text-xs my-2">
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {/* input end  */}
      </div>

      {/* Custom Plan */}

      <div className="py-12 lg:py-24 px-3.5">
        <h2 className="text-center text-bold ">
          {priceData?.customPlan?.heading}
        </h2>
        <p className="text-center text-bold pt-6">
          {priceData?.customPlan?.description}
        </p>
      </div>

      {/* Pricing Faq section */}

      {/* Connect check choose section*/}

      <div className="pb-10 pt-8 lg:pb-44 lg:px-24 px-3.5">
        <h2 className=" ">{priceData?.threC?.heading}</h2>
        <div className="pt-4">
          <p className="ps-1 lg:w-5/12">{priceData?.threC?.description}</p>
        </div>
        <div className="my-12">
          <button
            className={`bg-pink-500 text-white rounded-full px-3 py-1 lg:px-4 lg:py-3 font-bold`}
          >
            {priceData?.threC?.label}
          </button>
        </div>
      </div>

      {/* Footer section*/}

      <Footer />
    </div>
  );
};

export default pricing;
