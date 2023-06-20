import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import MobJPAGE, { MobJBanner } from "@/components/animationSvg/mobj";

const Mobj = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

    const mobj = gsap.timeline({});

    mobj
      .to("#contentCard", { x: 50, opacity: 0, duration: 0.3 })
      .to("#nestedShapeOne", { opacity: 0, duration: 0.3 })
      .to("#nestedShapeTwo", { opacity: 0, duration: 0.3 })
      .to("#avatarGroup", {
        y: 10,
        opacity: 0,
        transformOrigin: "center center",
        duration: 0.3,
      })
      .to(".group .inner-shape", {
        rotate: 360,
        opacity: 1,
        transformOrigin: "center center",
        duration: 0.6,
      })
      .to(".group .outer-shape", {
        rotate: -360,
        opacity: 0,
        transformOrigin: "center center",
        duration: 0.6,
      })
      .to("#shapesCard", { y: 30, opacity: 0 });

    ScrollTrigger.create({
      trigger: "#mobj",
      start: "10% 20%",
      end: "+=300",
      animation: mobj,
      toggleActions: "restart none none reverse",
      scrub: true,
    });
  }, []);
  return (
    <div className="lg:w-7/12">
      <MobJBanner />
    </div>
  );
};

export default Mobj;
