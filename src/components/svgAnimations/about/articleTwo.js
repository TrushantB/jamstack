import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = () => {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger); 

  //   const articleOne = gsap.timeline();

  //   gsap.set("#frame", {y:10, opacity: 0 ,duration:0.3})
  //   gsap.set("#icon-list", { opacity: 0})
  //   gsap.set("#scatter-shape", { rotate:0, opacity: 0})
  //   gsap.set("#box-text", {  opacity: 0 })
  //   gsap.set("#dot-square", {  opacity: 0})
  //   gsap.set("#line_chart", {  opacity: 0  })
  //   gsap.set("#pie_chart", {  opacity: 0  })

   

  //   articleOne
  //     .to("#frame", { opacity: 1,duration:0.3})
  //     .to("#icon-list", { opacity: 1,duration:0.3})
  //     .to("#scatter-shape", {  opacity: 1 ,duration:0.3})
  //     .to("#box-text", {  opacity: 1 ,duration:0.3})
  //     .to("#dot-square", {  opacity: 1,duration:0.3})
  //     .to("#line_chart", {  opacity: 1  ,duration:0.3})
  //     .to("#pie_chart", {  opacity: 1  ,duration:0.3})
 


  //   ScrollTrigger.create({
  //     trigger: "#articleOne",
  //     start: "1% 20%",
  //     end: "80% 70%",
  //     animation: articleOne,
  //     toggleActions: "restart none none reverse",
  //     markers: true,
 
  //   });
  // }, []);

  return (
    <div>
        
    </div>
  )
}

export default Aboutone