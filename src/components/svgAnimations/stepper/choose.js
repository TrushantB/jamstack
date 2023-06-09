import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { StepperTwo } from "@/components/animationSvg/mobj";

const Choose = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set("#Nuxt", { x: 30, opacity: 0 });
    gsap.set("#Gatsby", { y: 30, opacity: 0 });
    gsap.set("#Strapi", { y: -30, opacity: 0 });
    gsap.set("#Next", { opacity: 0, y: 50 });
    gsap.set("#Prismic", { y: -50, opacity: 0 });

    tl.to("#Nuxt", { x: 0, opacity: 1, duration: 0.3 })
      .to("#Gatsby", { y: 0, opacity: 1, duration: 0.3 })
      .to("#Strapi", { y: 0, opacity: 1, duration: 0.3 })
      .to("#Next", { y: 0, opacity: 1, duration: 0.3 })
      .to("#Prismic", { y: 0, opacity: 1, duration: 0.3 });

    ScrollTrigger.create({
      trigger: ".technology",
      start: "25% 60%",
      end: "80% 70%",
      animation: tl,
      toggleActions: "restart none none reverse",
    });
  }, []);

  return (
    <div className="lg:w-10/12 mx-auto">
      <StepperTwo />
    </div>
  );
};

export default Choose;
