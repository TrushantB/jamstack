import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { JamstackFour, JamstackThree } from "@/components/animationSvg/jamtack";

const Progressive = () => {
  useEffect(() => {
    gsap.set("#mobile", { y: 30, opacity: 0 });
    gsap.set("#tablet", { x: 30, opacity: 0 });
    gsap.set("#desktop", { y: 10, opacity: 0 });
    gsap.set("#tablet-1", { opacity: 0 });
    gsap.set("#tablet-2", { opacity: 0 });
    gsap.set("#tablet-3", { opacity: 0 });
    gsap.set("#tablet-4", { opacity: 0 });
    gsap.set("#desktop-1", { x: -20, opacity: 0 });
    gsap.set("#desktop-2", { y: 20, opacity: 0 });
    gsap.set("#desktop-3", { x: 40, opacity: 0 });
    gsap.set("#desktop-4", { y: 40, opacity: 0 });

    const progressive = gsap.timeline({ repeat: -1 });

    progressive
      .to("#desktop", { y: 0, opacity: 1, duration: 0.3 })
      .to("#desktop-1", { x: 0, opacity: 1, duration: 0.3 })
      .to("#desktop-2", { y: 0, opacity: 1, duration: 0.3 })
      .to("#desktop-3", { x: 0, opacity: 1, duration: 0.3 })
      .to("#desktop-4", { y: 0, opacity: 1, duration: 0.3 })
      .to("#tablet", { x: 0, opacity: 1, duration: 0.3 })
      .to("#tablet-1", { opacity: 1, duration: 0.3 })
      .to("#tablet-2", { opacity: 1, duration: 0.3 })
      .to("#tablet-3", { opacity: 1, duration: 0.3 })
      .to("#tablet-4", { opacity: 1, duration: 0.3 })
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
