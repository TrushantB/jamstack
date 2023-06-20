import React, { useEffect } from "react";
import gsap from "gsap";
import { EcomsystemThree } from "@/components/animationSvg/ecosystem";

const Acclerate = () => {
  useEffect(() => {
    const acclerate = gsap.timeline({ repeat: -1 });

    gsap.set("#frame", { opacity: 0, y: 20 });
    gsap.set("#dualSquare", { opacity: 0 });
    gsap.set("#barChart", { opacity: 0 });
    gsap.set("#symbolBox", { opacity: 0 });
    gsap.set("#pieBox", { opacity: 0 });
    gsap.set("#horizontalBar", { x: -100, opacity: 0 });

    acclerate
      .to("#frame", { opacity: 1, y: 0, duration: 0.3 })
      .to("#dualSquare", { opacity: 1, duration: 0.3 })
      .to("#barChart", { opacity: 1, duration: 0.3 })
      .to("#symbolBox", { opacity: 1, duration: 0.3 })
      .to("#pieBox", { opacity: 1 })
      .to("#horizontalBar", { x: 0, opacity: 1, duration: 0.3 });

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
