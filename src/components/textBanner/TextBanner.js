import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TextBanner({ info, sliderControls }) {

  return (
    <div className="flex flex-col bg-accent-100 overflow-hidden">
      <div className="container gap-5 px-6 py-12 mx-auto lg:px-20">
        <Slider {...sliderControls}>
          {info &&
            info?.map((item, index) => (
              <div key={index}>
                <div className={`${item.icon} w-20 h-20 mb-5 bg-tertiary`}></div>
                <div>
                  <h3 className="w-11/12">{item.label}</h3>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default TextBanner;
