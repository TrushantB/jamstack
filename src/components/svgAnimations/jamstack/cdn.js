import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { JamstackOne } from "@/components/animationSvg/jamtack";

const Cdn = () => {
  useEffect(() => {
    gsap.set("#diamond-frame", { opacity: 0 });
    gsap.set("#main_circle", { opacity: 0 });
    gsap.set("#diamond_1", { y: 140, opacity: 0 });
    gsap.set("#diamond_2", { y: -140, opacity: 0 });
    gsap.set("#pentagon_1", { x: 150, opacity: 0 });
    gsap.set("#pentagon_2", { x: -150, opacity: 0 });

    const decoupled = gsap.timeline({ repeat: -1 });

    decoupled
      .to("#diamond-frame", { opacity: 1 })
      .to("#main_circle", { opacity: 1 })
      .to("#diamond_1", { y: 0, opacity: 1 })
      .to("#diamond_2", { y: 0, opacity: 1 })
      .to("#pentagon_1", { x: 0, opacity: 1 })
      .to("#pentagon_2", { x: 0, opacity: 1 });

    decoupled.repeatDelay(3);

    decoupled.play();

    return () => {
      decoupled.kill();
    };
  }, []);
  return (
    <div className="w-8/12 mx-auto">
      <JamstackOne />
    </div>
  );
};

export default Cdn;
