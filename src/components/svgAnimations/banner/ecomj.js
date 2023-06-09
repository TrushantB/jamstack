import React, { useEffect } from "react";
import gsap from "gsap";
import { EcomJBanner } from "@/components/animationSvg/ecomj";

const Ecomj = () => {
  useEffect(() => {
    const ecomj = gsap.timeline({ repeat: -1 });

    gsap.set("#frame", { opacity: 0, y: 20 });
    gsap.set("#avatar-card", { scale: 0, opacity: 0 });
    gsap.set("#avatar", { y: 30, opacity: 0 });
    gsap.set("#symbol-card", { x: 50, opacity: 0 });
    gsap.set("#text-card", { x: 50, opacity: 0 });
    gsap.set("#diamond-card", { x: -30, opacity: 0 });
    gsap.set("#card-dot", { x: 30, opacity: 0 });

    ecomj
      .to("#frame", { opacity: 1, y: 0, duration: 0.3 })
      .to("#avatar-card", { scale: 1, opacity: 1, duration: 0.3 })
      .to("#avatar", { y: 0, opacity: 1, duration: 0.3 })
      .to("#diamond-card", { x: 0, opacity: 1, duration: 0.3 })
      .to("#card-dot", { x: 0, opacity: 1, duration: 0.3 })
      .to("#text-card", { x: 0, opacity: 1, duration: 0.3 })
      .to("#symbol-card", { x: 0, opacity: 1, duration: 0.3 });

    ecomj.repeatDelay(3);

    ecomj.play();

    return () => {
      ecomj.kill();
    };
  }, []);

  return (
    <div className="mx-auto lg:w-10/12">
      <EcomJBanner/>
    </div>
  );
};

export default Ecomj;
