import React, { useEffect } from "react";
import gsap from "gsap";
import { EcomJBanner } from "@/components/animationSvg/ecomj";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Ecomj = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ecomj = gsap.timeline();

    ecomj

      .to("#symbolCard", { x: 50, opacity: 0 })
      .to("#textCard", { x: 50, opacity: 0 })
      .to("#cardDot", { x: 30, opacity: 0 })
      .to("#diamondCard", { x: -30, opacity: 0 })
      .to("#avatar", { y: 30, opacity: 0 })
      .to("#avatarCard", { scale: 0, opacity: 0 });

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
