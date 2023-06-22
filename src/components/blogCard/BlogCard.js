import { React, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { resolveHref } from "@/lib/sanity.links";

function BlogCard({ cards, hasIcon, label, sliderControls }) {
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
    slidesToShow: cards.length,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-5 lg:py-10 h-full blog">
      <div className="mx-4 lg:mx-0">
        <Slider {...sliderSetting} className="flex flex-grow">
          {cards?.map((card, index) => (
            <div
              key={index}
              className="border-2 border-accent-100 border-opacity-60 rounded-2xl card pb-1 lg:w-1/3 hover:bg-accent-100 h-full"
              onMouseEnter={() => onMouseEnter(card)}
              onMouseLeave={() => onMouseLeave()}
            >
              <Link
                href={resolveHref("blog", card.href)}
                className="flex flex-col h-full"
              >
                <img
                  className="lg:h-auto md:h-auto w-full object-cover object-center rounded-t-2xl"
                  src={card.image}
                  alt={card.image}
                />
                <div className="p-4 flex flex-col justify-between flex-1">
                  <h3 className="mb-3 text-3xl lg:text-2xl">{card.label}</h3>
                  <p className="leading-relaxed mb-5">{card.description}</p>
                  <div className="h-8">
                    {hoverItem === card && (
                      <a className="flex gap-3 items-center text-primary">
                        {label}
                        <span className="icon-arrow-right2 text-2xl text-primary"></span>
                      </a>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default BlogCard;
