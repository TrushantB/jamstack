import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { JamstackTwo } from "@/components/animationSvg/jamtack";

const Decoupled = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".rect-frame", { y: 30, opacity: 0 });
    gsap.set("#rectangle-1", { x: 30, opacity: 0 });
    gsap.set("#rectangle-2", { opacity: 0 });
    gsap.set("#rectangle-3", { x: -30, opacity: 0 });
    gsap.set("#star", { opacity: 0 });
    gsap.set("#ellipse", { opacity: 0 });
    gsap.set(".rectangle-box", { opacity: 0 });

    const decoupled = gsap.timeline({repeat:-1});

    decoupled
      .to(".rect-frame", { y: 0, opacity: 1 })
      .to("#rectangle-2", { opacity: 1 })
      .to("#rectangle-1", { x: 0, opacity: 1 })
      .to("#rectangle-3", { x: 0, opacity: 1 })
      .to("#star", { opacity: 1 })
      .to("#ellipse", { opacity: 1 })
      .to(".rectangle-box", { opacity: 1 });

      decoupled.repeatDelay(3);

      decoupled.play();
  
      return () => {
        decoupled.kill();
      };
  }, []);
  return (
    <div className="lg:w-10/12 mx-auto ">
    <JamstackTwo/>
    </div>
  );
};

export default Decoupled;
