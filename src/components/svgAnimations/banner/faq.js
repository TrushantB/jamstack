import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaqAnimation } from "@/components/animationSvg/faq";

const Faq = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const faq = gsap.timeline();

    faq
      .to("#questionSection", { opacity: 0, duration: 0.3 })
      .to("#colorSection", { opacity: 0, duration: 0.3 })
      .to("#sectionTwo", { y: 50, opacity: 0, duration: 0.3 })
      .to("#sectionOne", { y: 50, opacity: 0, duration: 0.3 })
      .to("#text", { x: 100, opacity: 0, duration: 0.3 });

    ScrollTrigger.create({
      trigger: "#faq",
      start: "20% 20%",
      end: "+=320",
      animation: faq,
      toggleActions: "restart none none reverse",
      scrub: true,
    });
  }, []);
  return (
    <div className="lg:w-10/12">
      <FaqAnimation />
    </div>
  );
};

export default Faq;
