import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default {
  title: "Core/Presentational Components/textBanner",
  argTypes: {
    heading: "text",
  },
};

const TextBanner = ({ info, sliderControls }) => {
  const settings = {
    dots: sliderControls.dots,
    infinite: sliderControls.infinite,
    speed: sliderControls.speed,
    autoplaySpeed: sliderControls.autoplaySpeed,
    autoplay: sliderControls.autoplay,
    arrows: sliderControls.arrows,
    swipe: true,
  };
  return (
    <>
      <div className=" lg:px-10 flex flex-col gap-5 py-12 bg-accent-100">
        <Slider {...settings}>
          {info.map((item, index) => (
            <div key={index}>
              <div className={`${item.icon} w-20 h-20 bg-tertiary`}></div>
              <div>
                <h3 className="w-11/12">{item.label}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export const Default = (args) => <TextBanner {...args} />;
Default.args = {
  sliderControls: {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2500,
    autoplay: true,
    arrows: true,
    swipe: true,
  },
  info: [
    {
      label:
        "Google found that 53% of mobile users will leave a website that takes longer than three seconds to load.",
      icon: "circle",
    },
    {
      label:
        "Microsoft found that 45% of Ecomm users will leave a website that takes longer than three seconds to load.",
      icon: "pentagon",
    },
    {
      label:
        "Yahoo found that 57% of mobile Web User will leave a website that takes longer than three seconds to load.",
      icon: "diamond",
    },
  ],
};
