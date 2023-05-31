import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function TestimonialCard({ cards, heading }) {
  const cardsRef = useRef(null);

  useEffect(() => {
    const cards = Array.from(cardsRef.current.children);
  
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          x: 1000,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "sine",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: true,
          },
        }
      );
    });
  }, []);

  const sliderSetting = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    autoplaySpeed: 2500,

    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2500,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2500,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col lg:flex-row container lg:mx-auto ">
      <div className="lg:w-5/12  mx-4 lg:mx-0">
        <h2 className="mb-5 lg:mb-0">{heading}</h2>
      </div>

      <div className="  gap-14 flex flex-col lg:w-8/12  mx-4 lg:mx-0 testimonial lg:hidden ">
        <Slider {...sliderSetting}>
          {cards &&
            cards?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-6 p-3  drop-shadow-2xl hover:drop-shadow-none justify-evenly items-center  py-5 rounded-3xl border border-black hover:rounded-3xl hover:bg-accent-100"
              >
                <div className="flex gap-7 ">
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

      <div ref={cardsRef}  className="gap-14 lg:w-8/12  mx-4 lg:mx-0 testimonial hidden lg:block overflow-hidden">
    <div>
          {cards &&
            cards?.map((item, index) => (
              <div 
                key={index}
                className="flex flex-col sm:flex-row gap-6 p-3  mb-14  drop-shadow-2xl hover:drop-shadow-none justify-evenly items-center  py-5 rounded-3xl border border-black hover:rounded-3xl hover:bg-accent-100 card"
              >
                <div className="flex gap-7 ">
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
    </div>
          
        
      </div>
    </div>
    
  );
}

export default TestimonialCard;
