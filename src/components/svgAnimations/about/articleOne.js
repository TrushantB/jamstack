import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AboutOne } from "@/components/animationSvg/about";

const Aboutone = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const articleOne = gsap.timeline();

    articleOne
      .to("#sixthGroup", { opacity: 0 })
      .to("#fifthGroup", { opacity: 0 })
      .to("#fourthGroup", { opacity: 0 })
      .to("#thirdGroup", { opacity: 0 })
      .to("#secondGroup", { opacity: 0 })
      .to("#firstGroup", { opacity: 0 })
      .to("#horizontalLineOne", { x: -40, opacity: 0 })
      .to("#verticalLineTwo", { y: -40, opacity: 0 })
      .to("#verticalLineOne", { y: -40, opacity: 0 });

    ScrollTrigger.create({
      trigger: "#articleOne",
      start: "1% 20%",
      end: "+=350",
      animation: articleOne,
      toggleActions: "restart none none reverse",
      scrub: -2,
    });
  }, []);

  return (
    <div className="w-10/12 mx-auto">
      <AboutOne />
    </div>
  );
};

export default Aboutone;
