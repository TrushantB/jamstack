import React, { useEffect } from "react";
import gsap from "gsap";
import { EcomJBanner } from "@/components/animationSvg/ecomj";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AboutBanner } from "@/components/animationSvg/about";

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ecomj = gsap.timeline({});

    gsap.set("#Group-1091", { opacity: 0, y: 50 });
    gsap.set("#long-cylinder", { y:-30, opacity: 0 });
    gsap.set("#pink-circle", { x: -30, opacity: 0 });
    gsap.set("#Group-1082", { x: -50, opacity: 0 });
    gsap.set("#Group-1083", {  opacity: 0 });
    gsap.set("#Group-1087", {  opacity: 0, rotate:180 });

   

    ecomj
    .to("#Group-1091", { opacity: 1, y: 0 })
    .to ("#long-cylinder", { y:0, opacity: 1 })
    .to ("#pink-circle", { x: 0, opacity: 1 })
    .to ("#Group-1082", { x: 0, opacity: 1 })
    .to ("#Group-1083", {   opacity: 1,  })
    .to("#Group-1087", {  opacity: 1, rotate:0,transformOrigin:"center center" });


    // ScrollTrigger.create({
    //   trigger: "#ecomj",
    //   start: "1% 20%",
    //   end: "80% 70%",
    //   animation: ecomj,
    //   toggleActions: "restart none none reverse",
    // });
  }, []);

  return (
    <div className="mx-auto lg:w-10/12">
      <AboutBanner/> 
    </div>
  );
};

export default About;
