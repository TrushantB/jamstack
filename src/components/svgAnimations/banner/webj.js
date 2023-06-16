import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { WebJBanner } from "@/components/animationSvg/webj";

const Webj = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const webj = gsap.timeline();

    webj

      .to("#bag", { scale: 0, opacity: 0, duration: 0.3 })
      .to("#top-card_1", { x: 100, opacity: 0, duration: 0.3 })
      .to("#middle-card_1", { x: 100, opacity: 0, duration: 0.3 })
      .to("#bottom-card_1", { x: 50, opacity: 0, duration: 0.3 })
      .to("#side-card", { x: 30, duration: 0.3, opacity: 0 })
      .to("#frame", { opacity: 0, y: 20, duration: 0.3 });

    ScrollTrigger.create({
      trigger: ".webj",
      start: "20% 20%",
      end: "+=350",
      animation: webj,
      toggleActions: "restart none none reverse",
      scrub:true

      
      
    });
  }, []);

  return (
    <div className="lg:w-10/12">
      <WebJBanner />
    </div>
  );
};

export default Webj;
