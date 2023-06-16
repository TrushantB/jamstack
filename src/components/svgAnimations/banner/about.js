import React, { useEffect } from "react";
import gsap from "gsap";
import { AboutBanner } from "@/components/animationSvg/about";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const about = gsap.timeline();

    // gsap.set("#grayUnion", { opacity: 0, y: 50 });
    // gsap.set("#longCylinder", { y: -30, opacity: 0 });
    // gsap.set("#pinkCircle", { x: -30, opacity: 0 });
    // gsap.set("#nestedCircle", { x: -50, opacity: 0 });
    // gsap.set("#nestedPentagon", { opacity: 0 });
    // gsap.set("#one", { opacity: 0 });
    gsap.set("#two", { x: 0, y: 0});
    // gsap.set("#dotCircle", { y: -20, opacity: 0 });
    // gsap.set("#blueUnion", { y: -30, opacity: 0 });
    // gsap.set("#white-pentagon", { x: -50, opacity: 0 });
    // gsap.set("#orangeUnion", { x: 50, opacity: 0 });
    // gsap.set("#nestedDiamond", { y: 30, opacity: 0 });

    about

    .to("#nestedDiamond", { y: 30, opacity: 0, duration: 0.25 })
    .to("#orangeUnion", { x: 50, opacity: 0, duration: 0.25 })
    .to("#white-pentagon", { x: -50, opacity: 0, duration: 0.25 })
    .to("#dotCircle", { y: -20, opacity: 0, duration: 0.25 })
    .to("#blueUnion", { y: -30, opacity: 0, duration: 0.25 })
    .to("#two", { opacity: 0, rotate: 180, scale: 0, transformOrigin: "center center", duration: 0.25,})
    .to("#one", { opacity: 0, duration: 0.25 })
    .to("#nestedPentagon", { opacity: 0, duration: 0.25 })
    .to("#nestedCircle", { x: -50, opacity: 0, duration: 0.25 })
    .to("#pinkCircle", { x: -30, opacity: 0, duration: 0.25 })
    .to("#longCylinder", { y: -30, opacity: 0, duration: 0.25 })
      .to("#grayUnion", { opacity: 0, y: 50, duration: 0.25 })

    ScrollTrigger.create({
      trigger: ".about",
      start: "top 20%",
      end: "+=510",
      animation: about,
      toggleActions: "restart none none reverse",
      scrub:true,
      markers:true
    });
  }, []);

  return (
    <div id="#about" className="mx-auto lg:w-10/12 about">
      <AboutBanner />
    </div>
  );
};

export default About;
