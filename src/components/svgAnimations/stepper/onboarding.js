import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { StepperOne } from "@/components/animationSvg/mobj";

const Onboarding = () => {
  useEffect(() => {
    const tl = gsap.timeline({});

    gsap.set("#topCard", { opacity: 0, y: 20 });
    gsap.set("#middleCard", { opacity: 0, y: 20 });
    gsap.set("#bottomCard", { opacity: 0, y: 50 });
    gsap.set("#bottom", { y: 30, opacity: 0 });
    gsap.set("#youCircle", {
      scale: 0,
      opacity: 0,
      transformOrigin: "center center",
    });
    gsap.set("#jCircle", {
      scale: 0,
      opacity: 0,
      transformOrigin: "center center",
    });
    gsap.set("#transfer", {
      scale: 0,
      opacity: 0,
      transformOrigin: "center center",
    });

    tl.to("#jCircle", { scale: 1, opacity: 1, duration: 0.3 })
      .to("#transfer", { scale: 1, opacity: 1, duration: 0.3 })
      .to("#youCircle", { scale: 1, opacity: 1, duration: 0.3 })
      .to("#topCard", { opacity: 1, y: 0, duration: 0.3 })
      .to("#middleCard", { opacity: 1, y: 0, duration: 0.3 })
      .to("#bottomCard", { opacity: 1, y: 0, duration: 0.3 });

    ScrollTrigger.create({
      trigger: "#stepperOne",
      start: "10% 60%",
      end: "80% 70%",
      animation: tl,
      toggleActions: "restart none none reverse",
      stagger: 0.2,
    });
  }, []);
  return (
    <div className="lg:w-8/12">
      <StepperOne />
    </div>
  );
};

export default Onboarding;
