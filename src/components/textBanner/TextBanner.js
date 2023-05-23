import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TextBanner({info ,sliderControls}) {
  return (
    <div className=" lg:px-24 px-6 flex flex-col gap-5 py-12 bg-accent-100">
    <Slider {...sliderControls}>
      {info && info?.map((item, index) => (
        <div key={index}>
          <div className={`${item.icon} w-20 h-20 bg-tertiary`}></div>
          <div>
            <h3 className="w-11/12">{item.label}</h3>
          </div>
        </div>
      ))}
    </Slider>
  </div>
  )
}

export default TextBanner