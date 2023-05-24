import { React, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TestimonialCard({ cards, heading }) {
  const sliderSetting = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    autoplaySpeed: 2500,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplaySpeed: 2500,
          autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="lg:w-5/12">
        <h2 className="mb-5 lg:mb-0">{heading}</h2>
      </div>

      <div className="container  gap-14 flex flex-col lg:w-8/12">
        <Slider {...sliderSetting}>
          {cards &&
            cards?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-6 p-3  drop-shadow-2xl justify-evenly items-center  py-5 rounded-3xl border border-black hover:bg-accent-100 hover:border-transparent"
              >
                <div className="flex gap-7">
                  <div className="w-4/12 lg:w-3/12 flex items-start sm:justify-center mt-7 sm:mt-0">
                    <img src={item.image} />
                  </div>
                  <div className="flex-grow sm:text-left w-5/12 lg:w-10/12  mt-6 sm:mt-0">
                    <p className="leading-relaxed text-base pb-3">
                      {item.description}
                    </p>
                    <p>{item.name}</p>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialCard;
