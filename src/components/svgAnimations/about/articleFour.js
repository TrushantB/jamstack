import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AboutFour } from "@/components/animationSvg/about";

const Aboutfour = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const articleThree = gsap.timeline();

    articleThree
      .to("#deployStack", { opacity: 0, duration: 0.3 })
      .to("#deployIndicator", { opacity: 0, duration: 0.3 })
      .to("#deployCardTwo", { opacity: 0, y: 50, duration: 0.3 })
      .to("#deployCardThree", { x: 50, opacity: 0, duration: 0.3 })
      .to("#deployCardFour", { y: -40, opacity: 0, duration: 0.3 })
      .to("#deployCardOne", { x: -50, opacity: 0, duration: 0.3 });

    ScrollTrigger.create({
      trigger: "#articleFour",
      start: "1% 20%",
      end: "+=350",
      animation: articleThree,
      toggleActions: "restart none none reverse",
      scrub: true,
    });
  }, []);

  return (
    <div className="w-10/12 mx-auto">
      <AboutFour />
    </div>
  );
};

export default Aboutfour;
