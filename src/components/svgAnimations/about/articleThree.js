import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AboutThree } from "@/components/animationSvg/about";

const Aboutthree = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const articleThree = gsap.timeline();

    articleThree
      .to("#codeBracket", { opacity: 0 })
      .to("#api", { opacity: 0 })
      .to("#commonShape", { opacity: 0, x: -30 })
      .to("#paragraphThree", { y: 10, opacity: 0 })
      .to("#paragraphTwo", { y: 10, opacity: 0 })
      .to("#paragrapghOne", { y: 10, opacity: 0 });

    ScrollTrigger.create({
      trigger: "#articleThree",
      start: "1% 20%",
      end: "+=350",
      animation: articleThree,
      toggleActions: "restart none none reverse",
      scrub: true,
    });
  }, []);
  return (
    <div className="w-10/12 mx-auto">
      <AboutThree />
    </div>
  );
};

export default Aboutthree;
