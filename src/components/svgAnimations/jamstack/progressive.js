import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { JamstackFour, JamstackThree } from "@/components/animationSvg/jamtack";

const Progressive = () => {
  useEffect(() => {
    gsap.set("#mobile", { y: 30, opacity: 0 });
    gsap.set("#tablet", { x: 30, opacity: 0 });
    gsap.set("#desktop", { y: 10, opacity: 0 });
    gsap.set("#tabletOne", { opacity: 0 });
    gsap.set("#tabletTwo", { opacity: 0 });
    gsap.set("#tabletThree", { opacity: 0 });
    gsap.set("#tabletFour", { opacity: 0 });
    gsap.set("#desktopOne", { x: -20, opacity: 0 });
    gsap.set("#desktopTwo", { y: 20, opacity: 0 });
    gsap.set("#desktopThree", { x: 40, opacity: 0 });
    gsap.set("#desktopFour", { y: 40, opacity: 0 });

    const progressive = gsap.timeline({ repeat: -1 });

    progressive
      .to("#desktop", { y: 0, opacity: 1, duration: 0.3 })
      .to("#desktopOne", { x: 0, opacity: 1, duration: 0.3 })
      .to("#desktopTwo", { y: 0, opacity: 1, duration: 0.3 })
      .to("#desktopThree", { x: 0, opacity: 1, duration: 0.3 })
      .to("#desktopFour", { y: 0, opacity: 1, duration: 0.3 })
      .to("#tablet", { x: 0, opacity: 1, duration: 0.3 })
      .to("#tabletOne", { opacity: 1, duration: 0.3 })
      .to("#tabletTwo", { opacity: 1, duration: 0.3 })
      .to("#tabletThree", { opacity: 1, duration: 0.3 })
      .to("#tabletFour", { opacity: 1, duration: 0.3 })
      .to("#mobile", { y: 0, opacity: 1, duration: 0.3 });

    progressive.repeatDelay(3);

    progressive.play();

    return () => {
      progressive.kill();
    };
  }, []);
  return (
    <div className="mx-auto lg:w-10/12">
      <JamstackFour />
    </div>
  );
};

export default Progressive;
