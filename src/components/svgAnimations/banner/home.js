import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { HomeBanner } from "@/components/animationSvg/home";

const Component = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    setIsScrolling(true);
  };

  useEffect(() => {
    if (isScrolling) {
      gsap.registerPlugin(ScrollTrigger);

      const aboutElse = gsap.timeline();

      gsap.set(".two", { x: 0, y: 0 });

      aboutElse
        .to(".nested-diamond", { y: 30, opacity: 0, duration: 0.3 })
        .to(".orange-union", { x: 50, opacity: 0, duration: 0.3 })
        .to(".white-pentagon", { x: -50, opacity: 0, duration: 0.3 })
        .to(".dot-circle", { y: -20, opacity: 0, duration: 0.3 })
        .to(".blue-union", { y: -30, opacity: 0, duration: 0.3 })
        .to(".shape-two", {
          opacity: 0,
          rotate: 180,
          scale: 0,
          transformOrigin: "center center",
          duration: 0.3,
        })
        .to(".shape-one", { opacity: 0, duration: 0.3 })
        .to(".nested-pentagon", { opacity: 0, duration: 0.3 })
        .to(".nested-circle", { x: -50, opacity: 0, duration: 0.3 })
        .to(".pink-circle", { x: -30, opacity: 0, duration: 0.3 })
        .to(".long-cylinder", { y: -30, opacity: 0, duration: 0.3 })
        .to(".gray-union", { opacity: 0, y: 50, duration: 0.3 });

      ScrollTrigger.create({
        trigger: ".home",
        start: "top 20%",
        end: "+=450",
        animation: aboutElse,
        toggleActions: "restart none none reverse",
        scrub: true,
      });
    } else if (window.scrollY === 0 && window.scrollX === 0) {
      const aboutss = gsap.timeline();

      gsap.set(".gray-union", { opacity: 0, y: 50, duration: 0.3 });
      gsap.set(".long-cylinder", { y: -30, opacity: 0, duration: 0.3 });
      gsap.set(".pink-circle", { x: -30, opacity: 0, duration: 0.3 });
      gsap.set(".nested-circle", { x: -50, opacity: 0, duration: 0.3 });
      gsap.set(".nested-pentagon", { opacity: 0, duration: 0.3 });
      gsap.set(".shape-one", { opacity: 0, duration: 0.3 });
      gsap.set(".shape-two", {
        opacity: 0,
        rotate: 180,
        scale: 0,
        transformOrigin: "center center",
        duration: 0.3,
      });
      gsap.set(".blue-union", { y: -30, opacity: 0, duration: 0.3 });
      gsap.set(".dot-circle", { y: -20, opacity: 0, duration: 0.3 });
      gsap.set(".nested-diamond", { y: 30, opacity: 0, duration: 0.3 });
      gsap.set(".white-pentagon", { x: -50, opacity: 0, duration: 0.3 });
      gsap.set(".orange-union", { x: 50, opacity: 0, duration: 0.3 });

      aboutss
        .to(".gray-union", { opacity: 1, y: 0, duration: 0.3 })
        .to(".long-cylinder", { y: 0, opacity: 1, duration: 0.3 })
        .to(".pink-circle", { x: 0, opacity: 1, duration: 0.3 })
        .to(".nested-circle", { x: 0, opacity: 1, duration: 0.3 })
        .to(".nested-pentagon", { opacity: 1, duration: 0.3 })
        .to(".shape-one", { opacity: 1, duration: 0.3 })
        .to(".shape-two", {
          opacity: 1,
          rotate: 0,
          scale: 1,
          transformOrigin: "center center",
          duration: 0.3,
        })
        .to(".blue-union", { y: 0, opacity: 1, duration: 0.3 })
        .to(".dot-circle", { y: 0, opacity: 1, duration: 0.3 })
        .to(".white-pentagon", { x: 0, opacity: 1, duration: 0.3 })
        .to(".orange-union", { x: 0, opacity: 1, duration: 0.3 })
        .to(".nested-diamond", { y: 0, opacity: 1, duration: 0.3 });

      aboutss.eventCallback("onComplete", handleScroll);
    } else {
      const abouts = gsap.timeline();

      gsap.set(".gray-union", { opacity: 0, y: 50, duration: 0.3 });
      gsap.set(".long-cylinder", { y: -30, opacity: 0, duration: 0.3 });
      gsap.set(".pink-circle", { x: -30, opacity: 0, duration: 0.3 });
      gsap.set(".nested-circle", { x: -50, opacity: 0, duration: 0.3 });
      gsap.set(".nested-pentagon", { opacity: 0, duration: 0.3 });
      gsap.set(".shape-one", { opacity: 0, duration: 0.3 });
      gsap.set(".shape-two", {
        opacity: 0,
        rotate: 180,
        scale: 0,
        transformOrigin: "center center",
        duration: 0.3,
      });
      gsap.set(".blue-union", { y: -30, opacity: 0, duration: 0.3 });
      gsap.set(".dot-circle", { y: -20, opacity: 0, duration: 0.3 });
      gsap.set(".nested-diamond", { y: 30, opacity: 0, duration: 0.3 });
      gsap.set(".white-pentagon", { x: -50, opacity: 0, duration: 0.3 });
      gsap.set(".orange-union", { x: 50, opacity: 0, duration: 0.3 });

      abouts
        .to(".gray-union", { opacity: 1, y: 0, duration: 0.3 })
        .to(".long-cylinder", { y: 0, opacity: 1, duration: 0.3 })
        .to(".pink-circle", { x: 0, opacity: 1, duration: 0.3 })
        .to(".nested-circle", { x: 0, opacity: 1, duration: 0.3 })
        .to(".nested-pentagon", { opacity: 1, duration: 0.3 })
        .to(".shape-one", { opacity: 1, duration: 0.3 })
        .to(".shape-two", {
          opacity: 1,
          rotate: 0,
          scale: 1,
          transformOrigin: "center center",
          duration: 0.3,
        })
        .to(".blue-union", { y: 0, opacity: 1, duration: 0.3 })
        .to(".dot-circle", { y: 0, opacity: 1, duration: 0.3 })
        .to(".white-pentagon", { x: 0, opacity: 1, duration: 0.3 })
        .to(".orange-union", { x: 0, opacity: 1, duration: 0.3 })
        .to(".nested-diamond", { y: 0, opacity: 1, duration: 0.3 });

      abouts.eventCallback("onComplete", handleScroll);
    }
  }, [isScrolling]);

  return (
    <div className="w-10/12">
      <HomeBanner />
    </div>
  );
};

export default Component;
