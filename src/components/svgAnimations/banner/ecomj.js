import React, { useEffect } from "react";
import gsap from "gsap";
import { EcomJBanner } from "@/components/animationSvg/ecomj";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Ecomj = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ecomj = gsap.timeline();

    ecomj

      .to("#symbol-card", { x: 50, opacity: 0 })
      .to("#text-card", { x: 50, opacity: 0 })
      .to("#card-dot", { x: 30, opacity: 0 })
      .to("#diamond-card", { x: -30, opacity: 0 })
      .to("#avatar", { y: 30, opacity: 0 })
      .to("#avatar-card", { scale: 0, opacity: 0 })
      .to("#frame", { opacity: 0, y: 20 });

    ScrollTrigger.create({
      trigger: "#ecomj",
      start: "10% 20%",
      end: "+=350",
      animation: ecomj,
      toggleActions: "restart none none reverse",
      scrub: true,
    });
  }, []);

  return (
    <div className="mx-auto lg:w-10/12">
      <EcomJBanner />
    </div>
  );
};

export default Ecomj;
