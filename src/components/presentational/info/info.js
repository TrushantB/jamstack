import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Info = ({ description, question }) => {
  useEffect(() => {


    const tl = gsap.timeline({
      defaults: { duration: 6, ease: "linear" },
    });

    tl.fromTo(
      ".section .line",
      { opacity: 0, height: 0 },
      { opacity: 1, height: "100%", backgroundColor: "black", duration: 6 }
    ).to(".section .dot", { duration: 2, opacity: 1, scale: 1 });

    const start = window.innerWidth < 768 ? "center 30%" : "20% 30%";
    const end = window.innerWidth < 768 ? "100% 10%" : "bottom center";

    ScrollTrigger.create({
      trigger: ".section",
      start: start,
      end: end,
      scrub: true,
      animation: tl,
    });
  }, []);

  return (
    <div className="container mx-auto mb-14  md:mb-20 flex flex-col items-center px-5 lg:px-0 section">
      <h2 className="text-center pb-5">{question}</h2>
      <p className="lg:w-7/12 mx-auto text-center">{description}</p>
      <div className="flex justify-between items-center flex-col h-80">
        <div className="line border-3 w-[1px] border-green bg-black"></div>
        <div className="w-5 h-5 rounded-full bg-black dot opacity-0 "></div>
      </div>
    </div>
  );
};

export default Info;
