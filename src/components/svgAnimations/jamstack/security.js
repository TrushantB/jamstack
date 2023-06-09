import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { JamstackThree } from "@/components/animationSvg/jamtack";

const Security = () => {
  useEffect(() => {
   
    gsap.set("#frame", { opacity: 0, y: 20 });
    gsap.set("#text", { opacity: 0 });
    gsap.set("#line", { scaleX: 0, opacity: 0 });
    gsap.set("#numbers", { y: 20, opacity: 0 });
    gsap.set("#passcode", { x: 50, opacity: 0 });
    gsap.set("#button", { x: -30, scale: 1.5, opacity: 0 });
    gsap.set("#lock-circle", { opacity: 0 });

    const security = gsap.timeline({repeat:-1});

    security
      .to("#frame", { opacity: 1, y: 0, duration: 0.3 })
      .to("#text", { duration: 0.3, opacity: 1 })
      .to("#line", { scaleX: 1, opacity: 1, duration: 0.3 })
      .to("#numbers", { y: 0, opacity: 1, duration: 0.3 })
      .to("#passcode", { x: 0, opacity: 1, duration: 0.3 })
      .to("#button", {
        opacity: 1,
        duration: 0.3,
        transformOrigin: "center center",
      })
      .to("#lock-circle", { opacity: 1, ease: "ease-in-out" });

      security.repeatDelay(3);

      security.play();
  
      return () => {
        security.kill();
      };
  }, []);
  return (
    <div className=" lg:w-10/12">
      <JamstackThree/>
    </div>
  );
};

export default Security;
