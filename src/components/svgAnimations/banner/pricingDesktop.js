import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { DesktopPricing } from "@/components/animationSvg/pricing";

const Pricing = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pricing = gsap.timeline();

    gsap.set("#pricing-frame", { opacity: 0, y: 20 });
    gsap.set("#pricing-text", { opacity: 0 });
    gsap.set("#shape-box", { y: 100, opacity: 0 });
    gsap.set("#review", { x: -150, opacity: 0 });
    gsap.set("#text-card", { x: 50, opacity: 0 });
    gsap.set("#jamstack-logo", { opacity: 0 });
    gsap.set("#card-dot", { x: 30, opacity: 0 });

    pricing
      .to("#pricing-frame", { opacity: 1, y: 0, duration: 0.4 })
      .to("#pricing-text", { opacity: 1, duration: 0.4 })
      .to("#shape-box", { y: 0, opacity: 1, duration: 0.4 })
      .to("#review", { x: 0, opacity: 1, duration: 0.4 })
      .to("#jamstack-logo", { opacity: 1, duration: 0.4 });

    ScrollTrigger.create({
      trigger: "#Pricing-Desktop",
      start: "top 25%",
      end: "80% 70%",
      animation: pricing,
      toggleActions: "restart none none reverse",
      markers: true,
    });
  }, []);

  return (
    <div className="mx-auto mt-10 lg:mt-0 lg:w-11/12">
      <DesktopPricing />
    </div>
  );
};

export default Pricing;
