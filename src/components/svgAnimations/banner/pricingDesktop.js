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
    gsap.set("#pricing-frame", { opacity: 0, y: 20 });
    gsap.set("#pricing-text", { opacity: 0 });
    gsap.set("#shape-box", { y: 100, opacity: 0 });
    gsap.set("#review", { x: -150, opacity: 0 });
    gsap.set("#text-card", { x: 50, opacity: 0 });
    gsap.set("#jamstack-logo", { opacity: 0 });

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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mobile = gsap.timeline();
    gsap.set("#mobile-screen", { opacity: 0, y: 20 });
    gsap.set("#mobile-heading", { opacity: 0, y: 50 });
    gsap.set("#mobile-shapes", { y: 50, opacity: 0 });
    gsap.set("#mobile-review", { x: 50, opacity: 0 });
    gsap.set("#mobile-logo", { opacity: 0 });

    mobile
      .to("#mobile-screen", { opacity: 1, y: 0 })
      .to("#mobile-heading", { opacity: 1, y: 0 })
      .to("#mobile-shapes", { y: 0, opacity: 1 })
      .to("#mobile-review", { x: 0, opacity: 1 })
      .to("#mobile-logo", { opacity: 1 });

    ScrollTrigger.create({
      trigger: "#mobile-pricing",
      start: "5% 25%",
      end: "80% 70%",
      animation: mobile,
      toggleActions: "restart none none reverse",
      markers: true,
    });
  }, []);

  return (
    <div className="w-full">
      <div className="mx-auto mt-10 lg:mt-0 lg:w-11/12 hidden sm:block">
        <DesktopPricing />
      </div>

      <div className="sm:hidden mx-auto mt-10 lg:mt-0 w-9/12">
        <MobilePricing />
      </div>
    </div>
  );
};

export default Pricing;
