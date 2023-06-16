import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  DesktopPricing,
  MobilePricing,
} from "@/components/animationSvg/pricing";

const Pricing = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pricing = gsap.timeline();

    pricing
      .to("#jamstack-logo", { opacity: 0, duration: 0.4 })
      .to("#review", { x: -150, opacity: 0, duration: 0.4 })
      .to("#shape-box", { y: 100, opacity: 0, duration: 0.4 })
      .to("#pricing-text", { opacity: 0, duration: 0.4 })
      .to("#pricing-frame", { opacity: 0, y: 20, duration: 0.4 });

    ScrollTrigger.create({
      trigger: "#Pricing-Desktop",
      start: "top 25%",
      end: "+=600",
      animation: pricing,
      toggleActions: "restart none none reverse",
      scrub: true,
      markers: true,
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mobile = gsap.timeline();

    mobile
      .to("#mobile-logo", { opacity: 0 })
      .to("#mobile-review", { x: 50, opacity: 0 })
      .to("#mobile-shapes", { y: 50, opacity: 0 })
      .to("#mobile-heading", { opacity: 0, y: 50 })
      .to("#mobile-screen", { opacity: 0, y: 20 });

    ScrollTrigger.create({
      trigger: "#mobile-pricing",
      start: "top 25%",
      end: "+=560",
      animation: mobile,
      toggleActions: "restart none none reverse",
      scrub: true,
    });
  }, []);

  return (
    <div className="w-full">
      <div className="mx-auto mt-10 lg:mt-0 lg:w-11/12 hidden sm:block">
        <DesktopPricing />
      </div>

      <div className="sm:hidden mx-auto mt-10 lg:mt-0 ">
        <MobilePricing />
      </div>
    </div>
  );
};

export default Pricing;
