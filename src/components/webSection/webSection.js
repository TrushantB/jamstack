import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function WebSection({ heading, description, lineImage, logo }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      defaults: { duration: 6, ease: "linear" },
    });

    tl.fromTo(
      ".line",
      { opacity: 0, height: 0 },
      { opacity: 1, height: "100%", backgroundColor: "black", duration: 6 }
    )
      .to(".dot", { duration: 0.5, opacity: 1, scale: 1.2 })
      .fromTo(
        ".websection h2,.websection img",
        { opacity: 0, y: 200 },
        { opacity: 1, y: 0 }
      );

    ScrollTrigger.create({
      trigger: ".websection",
      start: "1% 70%",
      end: "90% center",
      scrub: true,
      animation: tl,
    });
  }, []);

  return (
    <div className="container mx-auto lg:px-0 text-black websection">
      <div className="flex flex-col items-center lg:pb-24 pb-16 mx-4 lg:mx-0">
        <p className="mx-auto font-normal text-center heading-4 mb-11 lg:w-10/12">
          {description}
        </p>
        <div className="flex justify-between items-center flex-col h-80">
          <div className="line border-3 w-[1px] border-green bg-black"></div>
          <div className="w-5 h-5 rounded-full bg-black dot opacity-0 "></div>
        </div>
        <h2 id="webSection" className="font-bold text-center lg:w-7/12 mt-4">
          {heading}
        </h2>
        <img
          className="mt-5 lg:w-2/12"
          src={logo?.url}
          alt={`Jamstack+ | ${heading}`}
        />
      </div>
    </div>
  );
}

export default WebSection;
