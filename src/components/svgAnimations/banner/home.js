import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { HomeBanner } from "@/components/animationSvg/home";

const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const about = gsap.timeline();

    gsap.set(".two", { x: 0, y: 0 });

    about

      .to(".nestedDiamond", { y: 30, opacity: 0, duration: 0.6 })
      .to(".orangeUnion", { x: 50, opacity: 0, duration: 0.6 })
      .to(".white-pentagon", { x: -50, opacity: 0, duration: 0.6 })
      .to(".dotCircle", { y: -20, opacity: 0, duration: 0.6 })
      .to(".blueUnion", { y: -30, opacity: 0, duration: 0.6 })
      .to(".two", {
        opacity: 0,
        rotate: 180,
        scale: 0,
        transformOrigin: "center center",
        duration: 0.6,
      })
      .to(".one", { opacity: 0, duration: 0.6 })
      .to(".nestedPentagon", { opacity: 0, duration: 0.6 })
      .to(".nestedCircle", { x: -50, opacity: 0, duration: 0.6 })
      .to(".pinkCircle", { x: -30, opacity: 0, duration: 0.6 })
      .to(".longCylinder", { y: -30, opacity: 0, duration: 0.6 })
      .to(".grayUnion", { opacity: 0, y: 50, duration: 0.6 });

    ScrollTrigger.create({
      trigger: ".home",
      start: "top 20%",
      end: "+=450",
      animation: about,
      toggleActions: "restart none none reverse",
      scrub: true,
    });
  }, []);

  return (
    <div className="w-10/12">
      <HomeBanner />
    </div>
  );
};

export default Home;
