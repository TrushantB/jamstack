import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaqAnimation } from "@/components/animationSvg/faq";

const Faq = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const faq = gsap.timeline();

    gsap.set("#frame", { opacity: 0, y: 20 });
    gsap.set("#text", { x: 100, opacity: 0 });
    gsap.set("#section_1", { y: 30, opacity: 0 });
    gsap.set("#section_2", { y: 30, opacity: 0 });
    gsap.set("#color_section", { opacity: 0 });
    gsap.set("#question_section", { opacity: 0 });
    gsap.set("#circle_2", { opacity: 0 });

    gsap.set("#content-card", { x: 50, opacity: 0 });

    faq
      .to("#frame", { opacity: 1, y: 0, duration: 0.3 })
      .to("#text", { x: 0, opacity: 1, duration: 0.3 })
      .to("#section_1", { y: 0, opacity: 1, duration: 0.3 })
      .to("#section_2", { y: 0, opacity: 1, duration: 0.3 })
      .to("#color_section", { opacity: 1, duration: 0.3 })
      .to("#question_section", { opacity: 1, duration: 0.3 });

    ScrollTrigger.create({
      trigger: "#faq",
      start: "1% 20%",
      end: "80% 70%",
      animation: faq,
      toggleActions: "restart none none reverse",
    });
  }, []);
  return (
    <div className="lg:w-10/12">
      <FaqAnimation />
    </div>
  );
};

export default Faq;
