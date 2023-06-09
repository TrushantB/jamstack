import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Onboarding = () => {
  useEffect(() => {
    const tl = gsap.timeline({});

    gsap.set("#top-card", { opacity: 0, y: 20 });
    gsap.set("#middle-card", { opacity: 0, y: 20 });
    gsap.set("#bottom-card", { opacity: 0, y: 50 });
    gsap.set("#bottom", { y: 30, opacity: 0 });
    gsap.set("#you-circle", {
      scale: 0,
      opacity: 0,
      transformOrigin: "center center",
    });
    gsap.set("#j-circle", {
      scale: 0,
      opacity: 0,
      transformOrigin: "center center",
    });
    gsap.set("#transfer", {
      scale: 0,
      opacity: 0,
      transformOrigin: "center center",
    });

    tl.to("#j-circle", { scale: 1, opacity: 1, duration: 0.3 })
      .to("#transfer", { scale: 1, opacity: 1, duration: 0.3 })
      .to("#you-circle", { scale: 1, opacity: 1, duration: 0.3 })
      .to("#top-card", { opacity: 1, y: 0, duration: 0.3 })
      .to("#middle-card", { opacity: 1, y: 0, duration: 0.3 })
      .to("#bottom-card", { opacity: 1, y: 0, duration: 0.3 });

    ScrollTrigger.create({
      trigger: "#main",
      start: "10% 60%",
      end: "80% 70%",
      animation: tl,
      toggleActions: "restart none none reverse",
      stagger: 0.2,
    });
  }, []);
  return (
    <div className="lg:w-8/12">
    <OnBoarding/>
    </div>
  );
};

export default Onboarding;
