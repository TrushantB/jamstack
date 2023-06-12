import React, { useEffect } from "react";
import gsap from "gsap";
import { EcomsystemThree } from "@/components/animationSvg/ecosystem";

const Acclerate = () => {
  useEffect(() => {
    const acclerate = gsap.timeline({ repeat: -1 });

    gsap.set("#frame", { opacity: 0, y: 20 });
    gsap.set("#dual-square", { opacity: 0 });
    gsap.set("#bar-chart", { opacity: 0 });
    gsap.set("#symbol-box", { opacity: 0 });
    gsap.set("#avatar_group", { opacity: 0 });
    gsap.set("#pie-box", { opacity: 0 });
    gsap.set("#horizontal-bar", { x: -100, opacity: 0 });

    acclerate
      .to("#frame", { opacity: 1, y: 0, duration: 0.3 })
      .to("#dual-square", { opacity: 1, duration: 0.3 })
      .to("#bar-chart", { opacity: 1, duration: 0.3 })
      .to("#symbol-box", { opacity: 1, duration: 0.3 })
      .to("#avatar_group", { opacity: 1, duration: 0.3 })
      .to("#pie-box", { opacity: 1 })
      .to("#horizontal-bar", { x: 0, opacity: 1, duration: 0.3 });

    acclerate.repeatDelay(3);

    acclerate.play();

    return () => {
      acclerate.kill();
    };
  }, []);
  return (
    <div className="w-10/12 mx-auto">
      <EcomsystemThree />
    </div>
  );
};

export default Acclerate;
