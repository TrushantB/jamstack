import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { JamstackOne } from "@/components/animationSvg/jamtack";

const Cdn = () => {
  useEffect(() => {
    gsap.set("#diamondFrame", { opacity: 0 });
    gsap.set("#mainCircle", { opacity: 0 });
    gsap.set("#diamondOne", { y: 140, opacity: 0 });
    gsap.set("#diamondTwo", { y: -140, opacity: 0 });
    gsap.set("#pentagonOne", { x: 150, opacity: 0 });
    gsap.set("#pentagonTwo", { x: -150, opacity: 0 });

    const decoupled = gsap.timeline({ repeat: -1 });

    decoupled
      .to("#diamondFrame", { opacity: 1 })
      .to("#mainCircle", { opacity: 1 })
      .to("#diamondOne", { y: 0, opacity: 1 })
      .to("#diamondTwo", { y: 0, opacity: 1 })
      .to("#pentagonOne", { x: 0, opacity: 1 })
      .to("#pentagonTwo", { x: 0, opacity: 1 });

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
