import { React, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BlogCard({ cards, hasIcon, label , sliderControls }) {
  const [hoverItem, setHoverItem] = useState(null);
  const onMouseEnter = (card) => {
    setHoverItem(card);
  };
  const onMouseLeave = () => {
    setHoverItem(null);
  };

  const sliderSetting = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay:true,
          autoplaySpeed:2000
          
        }
      }
    ]
  }


  return (
    <div className=" px-5 py-10  h-full w-full blog">
      <div className="">
        <Slider {...sliderSetting} className="flex flex-grow">
          {cards?.map((card, index) => (
            <div
              key={index}
              className="border-2 border-accent-100 border-opacity-60 rounded-2xl card  py-1 lg:w-1/3 hover:bg-accent-100"
              onMouseEnter={() => onMouseEnter(card)}
              onMouseLeave={() => onMouseLeave()}
            >
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-2xl"
                src={card.image}
                alt={card.altTag}
              />
              <div className="p-4  flex flex-col justify-between">
                <h4 className="mb-3">{label}</h4>
                <p className="leading-relaxed mb-5 w-9/12">
                  {card.description}
                </p>
                <div className="h-8">
                  {hoverItem === card && (
                    <a className="flex gap-3 items-center text-primary" href="#">
                      {label}
                      <span className="icon-arrow-right2 text-2xl text-primary "></span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

        </Slider>
      </div>
     
    </div>
  );
}

export default BlogCard;
