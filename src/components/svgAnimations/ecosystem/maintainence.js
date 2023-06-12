import React, { useEffect } from "react";
import gsap from "gsap";
import { EcomsystemFour } from "@/components/animationSvg/ecosystem";

const Maintainence = () => {
  useEffect(() => {
    const maintainence = gsap.timeline({ repeat: -1 });

    gsap.set("#background", { opacity: 0, y: 20 });
    gsap.set("#multi-box", {
      scale: 0,
      opacity: 0,
      transformOrigin: "center center",
    });
    gsap.set("#facebook", { y: -20, opacity: 0 });
    gsap.set("#instagram", { x: 20, opacity: 0 });
    gsap.set("#whatsapp", { x: -20, y: -20, opacity: 0 });
    gsap.set("#twitter", { x: 20, y: 20, opacity: 0 });
    gsap.set("#box-chart", { opacity: 0 });
    gsap.set("#cut-pie", { opacity: 0 });

    maintainence
      .to("#background", { opacity: 1, y: 0, duration: 0.3 })
      .to("#multi-box", { scale: 1, opacity: 1, duration: 0.3 })
      .to("#facebook", { y: 0, opacity: 1, duration: 0.2 })
      .to("#instagram", { x: 0, opacity: 1, duration: 0.2 })
      .to("#whatsapp", { x: 0, y: 0, opacity: 1, duration: 0.2 })
      .to("#twitter", { x: 0, y: 0, opacity: 1, duration: 0.2 })
      .to("#box-chart", { opacity: 1, duration: 0.3 })
      .to("#cut-pie", { opacity: 1, duration: 0.3 });

    maintainence.repeatDelay(3);

    maintainence.play();

    return () => {
      maintainence.kill();
    };
  }, []);
  return (
    <div id="maintainence" className="w-10/12 mx-auto">
      <EcomsystemFour />
    </div>
  );
};

export default Maintainence;
