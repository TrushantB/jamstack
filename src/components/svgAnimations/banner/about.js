import React, { useEffect } from "react";
import gsap from "gsap";
import { AboutBanner } from "@/components/animationSvg/about";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const about = gsap.timeline();

    gsap.set("#grayUnion", { opacity: 0, y: 50 });
    gsap.set("#longCylinder", { y: -30, opacity: 0 });
    gsap.set("#pinkCircle", { x: -30, opacity: 0 });
    gsap.set("#nestedCircle", { x: -50, opacity: 0 });
    gsap.set("#nestedPentagon", { opacity: 0 });
    gsap.set("#one", { opacity: 0 });
    gsap.set("#two", { x: 35, y: 35, opacity: 0, scale: 0, rotate: 180 });
    gsap.set("#dotCircle", { y: -20, opacity: 0 });
    gsap.set("#blueUnion", { y: -30, opacity: 0 });
    gsap.set("#white-pentagon", { x: -50, opacity: 0 });
    gsap.set("#orangeUnion", { x: 50, opacity: 0 });
    gsap.set("#nestedDiamond", { y: 30, opacity: 0 });

    about

      .to("#grayUnion", { opacity: 1, y: 0, duration: 0.25 })
      .to("#longCylinder", { y: 0, opacity: 1, duration: 0.25 })
      .to("#pinkCircle", { x: 0, opacity: 1, duration: 0.25 })
      .to("#nestedCircle", { x: 0, opacity: 1, duration: 0.25 })
      .to("#nestedPentagon", { opacity: 1, duration: 0.25 })
      .to("#one", { opacity: 1, duration: 0.25 })
      .to("#two", {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transformOrigin: "center center",
        duration: 0.25,
      })
      .to("#blueUnion", { y: -0, opacity: 1, duration: 0.25 })
      .to("#dotCircle", { y: 0, opacity: 1, duration: 0.25 })
      .to("#white-pentagon", { x: 0, opacity: 1, duration: 0.25 })
      .to("#orangeUnion", { x: 0, opacity: 1, duration: 0.25 })
      .to("#nestedDiamond", { y: 0, opacity: 1, duration: 0.25 });

    ScrollTrigger.create({
      trigger: ".about",
      start: "8% 20%",
      end: "80% 70%",
      animation: about,
      toggleActions: "restart none none reverse",
    });
  }, []);

  return (
    <div id="#about" className="mx-auto lg:w-10/12 about">
      <AboutBanner />
    </div>
  );
};

export default About;
