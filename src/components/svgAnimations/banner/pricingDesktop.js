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
      .to("#jamstackLogo", { opacity: 0, duration: 0.4 })
      .to("#review", { x: -150, opacity: 0, duration: 0.4 })
      .to("#shapeBox", { y: 100, opacity: 0, duration: 0.4 })
      .to("#pricingText", { opacity: 0, duration: 0.4 });

    ScrollTrigger.create({
      trigger: "#pricingDesktop",
      start: "top 25%",
      end: "+=600",
      animation: pricing,
      toggleActions: "restart none none reverse",
      scrub: true,
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mobile = gsap.timeline();

    mobile
      .to("#mobileLogo", { opacity: 0 })
      .to("#mobileReview", { x: 50, opacity: 0 })
      .to("#mobileShapes", { y: 50, opacity: 0 })
      .to("#mobileHeading", { opacity: 0, y: 50 });

    ScrollTrigger.create({
      trigger: "#mobilePricing",
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
