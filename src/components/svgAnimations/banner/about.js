import React, { useEffect } from "react";
import gsap from "gsap";
import { AboutBanner } from "@/components/animationSvg/about";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const about = gsap.timeline();

    gsap.set("#Group-1091", { opacity: 0, y: 50 });
    gsap.set("#long-cylinder", { y: -30, opacity: 0 });
    gsap.set("#pink-circle", { x: -30, opacity: 0 });
    gsap.set("#Group-1082", { x: -50, opacity: 0 });
    gsap.set("#Group-1083", { opacity: 0 });
    gsap.set("#one", { opacity: 0 });
    gsap.set("#two", { x: 35, y: 35, opacity: 0, scale: 0, rotate: 180 });
    gsap.set("#about-circle", { y: -20, opacity: 0 });
    gsap.set("#Group-1086", { y: -30, opacity: 0 });
    gsap.set("#white-pentagon", { x: -50, opacity: 0 });
    gsap.set("#Group-1084", { x: 50, opacity: 0 });
    gsap.set("#Group-1088", { y: 30, opacity: 0 });

    about
      .to("#Group-1080", { opacity: 1, duration: 0.25 })
      .to("#Group-1091", { opacity: 1, y: 0, duration: 0.25 })
      .to("#long-cylinder", { y: 0, opacity: 1, duration: 0.25 })
      .to("#pink-circle", { x: 0, opacity: 1, duration: 0.25 })
      .to("#Group-1082", { x: 0, opacity: 1, duration: 0.25 })
      .to("#Group-1083", { opacity: 1, duration: 0.25 })
      .to("#one", { opacity: 1, duration: 0.25 })
      .to("#two", {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transformOrigin: "center center",
        duration: 0.25,
      })
      .to("#Group-1086", { y: -0, opacity: 1, duration: 0.25 })
      .to("#about-circle", { y: 0, opacity: 1, duration: 0.25 })
      .to("#white-pentagon", { x: 0, opacity: 1, duration: 0.25 })
      .to("#Group-1084", { x: 0, opacity: 1, duration: 0.25 })
      .to("#Group-1088", { y: 0, opacity: 1, duration: 0.25 });

    ScrollTrigger.create({
      trigger: ".about",
      start: "8% 20%",
      end: "80% 70%",
      animation: about,
      toggleActions: "restart none none reverse",
      markers: true,
    });
  }, []);

  return (
    <div id="#about" className="mx-auto lg:w-10/12 about">
      <AboutBanner />
    </div>
  );
};

export default About;