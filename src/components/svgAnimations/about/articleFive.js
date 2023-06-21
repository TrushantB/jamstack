import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AboutFive } from "@/components/animationSvg/about";

const Aboutfive = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const articleFive = gsap.timeline();

    articleFive
      .to("#rocket", { opacity: 0, y: 50 })
      .to("#acclerateLineChart", { opacity: 0, y: 50, duration: 0.3 })
      .to("#accelerateBarChart", { opacity: 0, y: 50, duration: 0.3 })
      .to("#acceleratePieChart", { x: 50, opacity: 0, duration: 0.3 });

    ScrollTrigger.create({
      trigger: "#articleFive",
      start: "10% 20%",
      end: "+=430",
      animation: articleFive,
      toggleActions: "restart none none reverse",
      scrub: true,
    });
  }, []);
  return (
    <div className="lg:w-8/12 mx-auto">
      <AboutFive />
    </div>
  );
};

export default Aboutfive;
