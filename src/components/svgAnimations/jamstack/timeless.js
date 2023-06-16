import React, { useEffect } from "react";
import gsap from "gsap";
import { JamstackFive } from "@/components/animationSvg/jamtack";

const Timeless = () => {
  useEffect(() => {
    gsap.set("#timeLine", { opacity: 0, x: -100 });
    gsap.set("#jamstackPin", { opacity: 0 ,y:-50 });
    gsap.set("#today", { y: 50, opacity: 0 });
    gsap.set("#pinOne", { y: 50, opacity: 0 });
    gsap.set("#yearOne", { y: -50,x:0, opacity: 0 });
    gsap.set("#pinTwo", { y: -50,  opacity: 0 });
    gsap.set("#yearTwo", {y:50, opacity: 0 });

    const security = gsap.timeline({ repeat:-1 });

    security
      .to("#timeLine", { opacity: 1, x: 0, duration: 0.3 })
      .to("#jamstackPin", { opacity: 1 ,y:0 })
      .to("#today", { y: 0, opacity: 1, duration: 0.3 })
      .to("#pinOne", { y: 0, opacity: 1 })
      .to("#yearOne", { y:0, opacity: 1 })
      .to("#pinTwo", {y:0,opacity:1})
      .to("#yearTwo", { opacity: 1, y:0});

      security.repeatDelay(3);

      security.play();
  


    return () => {
      security.kill();
    };
  }, []);
  return (
    <div className="timeless lg:w-6/12 mx-auto">
      <JamstackFive />
    </div>
  );
};

export default Timeless;
