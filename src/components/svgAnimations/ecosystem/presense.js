import React, { useEffect } from "react";
import gsap from "gsap";
import { EcomsystemTwo } from "@/components/animationSvg/ecosystem";

const Presense = () => {
  useEffect(() => {
    const presense = gsap.timeline({ repeat: -1 });

    gsap.set(".presense .frame", { opacity: 0, y: 20 });
    gsap.set(".presense .avatar-card", { scale: 0, opacity: 0 });
    gsap.set(".presense .avatar", { y: 30, opacity: 0 });
    gsap.set(".presense .symbol-card", { x: 50, opacity: 0 });
    gsap.set(".presense .text-card", { x: 30, opacity: 0 });
    gsap.set(".presense .diamond-card", { x: -30, opacity: 0 });
    gsap.set(".presense .card-dot", { x: 30, opacity: 0 });

    presense
      .to(".presense .frame", { opacity: 1, y: 0, duration: 0.3 })
      .to(".presense .avatar-card", { scale: 1, opacity: 1, duration: 0.3 })
      .to(".presense .avatar", { y: 0, opacity: 1, duration: 0.3 })
      .to(".presense .diamond-card", { x: 0, opacity: 1, duration: 0.3 })
      .to(".presense .card-dot", { x: 0, opacity: 1, duration: 0.3 })
      .to(".presense .text-card", { x: 0, opacity: 1, duration: 0.3 })
      .to(".presense .symbol-card", { x: 0, opacity: 1, duration: 0.3 });

    presense.repeatDelay(3);

    presense.play();

    return () => {
      presense.kill();
    };
  }, []);

  return (
    <div className="lg:w-10/12 mx-auto">
      <EcomsystemTwo />
    </div>
  );
};

export default Presense;
