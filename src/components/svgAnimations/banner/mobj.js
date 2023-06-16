import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import MobJPAGE, { MobJBanner } from "@/components/animationSvg/mobj";


const Mobj = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

    const mobj = gsap.timeline({ });

 

    mobj
    .to("#content-card", { x: 50, opacity: 0 , duration: 0.3 })
    .to("#circle_2", { opacity: 0, duration: 0.3 })
    .to("#circle_1", { opacity: 0, duration: 0.3 })
    .to("#avatar_group", {y: 10, opacity: 0, transformOrigin: "center center",duration: 0.3,})
    .to(".shape .inner", {rotate: 360,opacity: 1,transformOrigin: "center center",duration: 0.3,})
    .to(".shape .outer", { rotate: -360, opacity: 0, transformOrigin: "center center", duration: 0.3 })
    .to("#shapes-card", { y: 30, opacity: 0 })
    .to("#frame", { opacity: 0, y:20, duration: 0.3 })
    
    ScrollTrigger.create({
      trigger: "#mobj",
      start: "10% 20%",
      end: "+=300",
      animation: mobj,
      toggleActions: "restart none none reverse",
      markers:true,
      scrub:true
    });
    
  }, []);
  return (
    <div className="lg:w-7/12">
      <MobJBanner/>
    </div>
  );
};

export default Mobj;
