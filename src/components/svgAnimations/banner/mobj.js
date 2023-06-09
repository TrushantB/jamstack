import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import MobJPAGE, { MobJBanner } from "@/components/animationSvg/mobj";


const Mobj = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

    const mobj = gsap.timeline({ repeat: -1 });

    gsap.set("#frame", { opacity: 0, y: 20 });
    gsap.set("#shapes-card", { y: 30, opacity: 0 });
    gsap.set("#shape #outer", { rotate: -360, opacity: 0 });
    gsap.set("#shape #inner", { rotate: 360, opacity: 0 });
    gsap.set("#avatar_group", { y: 10, opacity: 0 });
    gsap.set("#circle_1", { opacity: 0 });
    gsap.set("#circle_2", { opacity: 0 });
    gsap.set("#content-card", { x: 50, opacity: 0 });

    mobj
      .to("#frame", { opacity: 1, y: 0, duration: 0.3 })
      .to("#shapes-card", { y: 0, opacity: 1 })
      .to("#shape #outer", {
        rotate: 0,
        opacity: 1,
        transformOrigin: "center center",
        duration: 0.3,
      })
      .to("#shape #inner", {
        rotate: 0,
        opacity: 1,
        transformOrigin: "center center",
        duration: 0.3,
      })
      .to("#avatar_group", {
        y: 0,
        opacity: 1,
        transformOrigin: "center center",
        duration: 0.3,
      })
      .to("#circle_1", { opacity: 1, duration: 0.3 })
      .to("#circle_2", { opacity: 1, duration: 0.3 })
      .to("#content-card", { x: 0, opacity: 1, duration: 0.3 });

    mobj.repeatDelay(3);

    mobj.play();

    return () => {
      mobj.kill();
    };
  }, []);
  return (
    <div className="lg:w-7/12">
      <MobJBanner/>
    </div>
  );
};

export default Mobj;
