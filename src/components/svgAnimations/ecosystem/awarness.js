import React, { useEffect } from "react";
import gsap from "gsap";
import { EcomsystemOne } from "@/components/animationSvg/ecosystem";

const Awarness = () => {
  useEffect(() => {
    const awarness = gsap.timeline({ repeat: -1 });

    gsap.set("#frame", { opacity: 0, y: 20 });
    gsap.set("#shortcard-1", { y: 10, opacity: 0 });
    gsap.set("#shortcard-2", { y: 10, opacity: 0 });
    gsap.set("#shortcard-3", { y: 10, opacity: 0 });
    gsap.set("#long-card", { x: -100, opacity: 0 });

    awarness
      .to("#frame", { opacity: 1, y: 0, duration: 0.3 })
      .to("#shortcard-1", { y: 0, opacity: 1, duration: 0.3 })
      .to("#shortcard-2", { y: 0, opacity: 1, duration: 0.3 })
      .to("#shortcard-3", { y: 0, opacity: 1, duration: 0.3 })
      .to("#long-card", { x: 0, opacity: 1, duration: 0.3 });

    awarness.repeatDelay(3);

    awarness.play();

    return () => {
      awarness.kill();
    };
  }, []);
  return (
    <div className="w-10/12 mx-auto">
      <EcomsystemOne />
    </div>
  );
};

export default Awarness;
