import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { WebJBanner } from "@/components/animationSvg/webj";

const Webj = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set("#frame", { opacity: 0, y: 20 });
    gsap.set("#side-card", { x: 30, opacity: 0 });
    gsap.set("#top-card_1", { x: 50, opacity: 0 });
    gsap.set("#middle-card_1", { x: 100, opacity: 0 });
    gsap.set("#bottom-card_1", { x: 100, opacity: 0 });
    gsap.set("#bag", { scale: 0, opacity: 0 });

    const webj = gsap.timeline();

    webj
      .to("#frame", { opacity: 1, y: 0, duration: 0.3 })
      .to("#side-card", { x: 0, duration: 0.3, opacity: 1 })
      .to("#bottom-card_1", { x: 0, opacity: 1, duration: 0.3 })
      .to("#middle-card_1", { x: 0, opacity: 1, duration: 0.3 })
      .to("#top-card_1", { x: 0, opacity: 1, duration: 0.3 })
      .to("#bag", { scale: 1, opacity: 1, duration: 0.3 });

    ScrollTrigger.create({
      trigger: ".webj",
      start: "1% 20%",
      end: "80% 70%",
      animation: webj,
      toggleActions: "restart none none reverse",
    });
  }, []);

  return (
    <div className="lg:w-10/12">
      <WebJBanner />
    </div>
  );
};

export default Webj;
