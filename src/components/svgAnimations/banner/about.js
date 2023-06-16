import React, { useEffect } from "react";
import gsap from "gsap";
import { AboutBanner } from "@/components/animationSvg/about";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const about = gsap.timeline();

    gsap.set("#two", { x: 0, y: 0 });

    about

      .to("#nestedDiamond", { y: 30, opacity: 0, duration: 0.6 })
      .to("#orangeUnion", { x: 50, opacity: 0, duration: 0.6 })
      .to("#white-pentagon", { x: -50, opacity: 0, duration: 0.6 })
      .to("#dotCircle", { y: -20, opacity: 0, duration: 0.6 })
      .to("#blueUnion", { y: -30, opacity: 0, duration: 0.6 })
      .to("#two", {
        opacity: 0,
        rotate: 180,
        scale: 0,
        transformOrigin: "center center",
        duration: 0.6,
      })
      .to("#one", { opacity: 0, duration: 0.6 })
      .to("#nestedPentagon", { opacity: 0, duration: 0.6 })
      .to("#nestedCircle", { x: -50, opacity: 0, duration: 0.6 })
      .to("#pinkCircle", { x: -30, opacity: 0, duration: 0.6 })
      .to("#longCylinder", { y: -30, opacity: 0, duration: 0.6 })
      .to("#grayUnion", { opacity: 0, y: 50, duration: 0.6 });

    ScrollTrigger.create({
      trigger: ".about",
      start: "top 20%",
      end: "+=510",
      animation: about,
      toggleActions: "restart none none reverse",
      scrub: true,
    });
  }, []);

  return (
    <div id="#about" className="mx-auto lg:w-10/12 about">
      <AboutBanner />
    </div>
  );
};

export default About;
