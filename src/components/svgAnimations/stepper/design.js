import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { StepperThree } from "@/components/animationSvg/mobj";

const Design = () => {
  useEffect(() => {
    const tl1 = gsap.timeline();

    gsap.set(".frame", { opacity: 0, y: 20 });
    gsap.set(".text", { y: 30, opacity: 0 });
    gsap.set(".testing", { x: 100, opacity: 0 });
    gsap.set(".pentagons", { x: -30, opacity: 0 });

    tl1
      .to(".frame", { opacity: 1, y: 0, duration: 0.3 })
      .to(".text", { y: 0, opacity: 1, duration: 0.3 })
      .to(".testing", { x: 0, opacity: 1, duration: 0.3 })
      .to(".pentagons", { x: 0, opacity: 1, duration: 0.3 });

    ScrollTrigger.create({
      trigger: ".design",
      start: "top 70%", // Adjust the starting position for the trigger
      end: "80% 70%", // Adjust the ending position for the trigger
      animation: tl1,
      toggleActions: "restart none none reverse",
      reverse: true,
    });
  }, []);

  return (
    <div className="lg:w-10/12 overflow-hidden">
      <StepperThree />
    </div>
  );
};

export default Design;
