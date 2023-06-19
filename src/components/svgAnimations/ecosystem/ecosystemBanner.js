import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Ecosystembanner } from "@/components/animationSvg/ecosystem";

const EcosystemBanner = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ecosystem = gsap.timeline();

    gsap.set(".two", { x: 0, y: 0 });

    ecosystem

      .to(".nested-diamond", { y: 30, opacity: 0, duration: 0.6 })
      .to(".orange-union", { x: 50, opacity: 0, duration: 0.6 })
      .to(".white-pentagon", { x: -50, opacity: 0, duration: 0.6 })
      .to(".dot-circle", { y: -20, opacity: 0, duration: 0.6 })
      .to(".blue-union", { y: -30, opacity: 0, duration: 0.6 })
      .to(".shape-two", {
        opacity: 0,
        rotate: 180,
        scale: 0,
        transformOrigin: "center center",
        duration: 0.6,
      })
      .to(".shape-one", { opacity: 0, duration: 0.6 })
      .to(".nested-pentagon", { opacity: 0, duration: 0.6 })
      .to(".nested-circle", { x: -50, opacity: 0, duration: 0.6 })
      .to(".pink-circle", { x: -30, opacity: 0, duration: 0.6 })
      .to(".long-cylinder", { y: -30, opacity: 0, duration: 0.6 })
      .to(".gray-union", { opacity: 0, y: 50, duration: 0.6 });

    ScrollTrigger.create({
      trigger: ".ecosystem",
      start: "top 20%",
      end: "+=510",
      animation: ecosystem,
      toggleActions: "restart none none reverse",
      scrub: true,
    });
  }, []);

  return (
    <div className="ecosystem">
      <Ecosystembanner />
    </div>
  );
};

export default EcosystemBanner;
