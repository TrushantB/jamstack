import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AboutTwo } from "@/components/animationSvg/about";

const Abouttwo = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const articleTwo = gsap.timeline();

    articleTwo
      .to("#dualCard", { x: 30, opacity: 0 })
      .to("#mobileCirlceDot", { x: -30, opacity: 0 })
      .to("#mobileReview", { y: -50, opacity: 0 })
      .to("#mobileIndicator", {
        scale: 0,
        opacity: 0,
        transformOrigin: "center center",
      })
      .to("#innerScreen", { y: 30, opacity: 0 });

    ScrollTrigger.create({
      trigger: "#articleTwo",
      start: "1% 20%",
      end: "+=300",
      animation: articleTwo,
      toggleActions: "restart none none reverse",
      scrub: true,
    });
  }, []);

  return (
    <div className="w-8/12 mx-auto">
      <AboutTwo />
    </div>
  );
};

export default Abouttwo;
