import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Decoupled = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.set(".rect-frame", { y:30,opacity: 0,});
        gsap.set("#rectangle-1", {x:30, opacity: 0 ,});
        gsap.set("#rectangle-2", { opacity: 0 ,});
        gsap.set("#rectangle-3", { x:-30, opacity: 0 ,});
        gsap.set("#star", {  opacity: 0 ,});
        gsap.set("#ellipse", {  opacity: 0 ,});
        gsap.set(".rectangle-box", {  opacity: 0 });


    
        const decoupled = gsap.timeline();
    
        decoupled
        .to(".rect-frame", { y:0,opacity: 1,})
        .to("#rectangle-2", { opacity: 1 ,})
        .to("#rectangle-1", {x:0, opacity: 1 ,})
        .to("#rectangle-3", { x:0, opacity: 1 ,})
        .to("#star", {  opacity: 1 ,})
        .to("#ellipse", { opacity: 1 ,})
        .to(".rectangle-box", { opacity: 1 ,});
         

    
          ScrollTrigger.create({
            trigger: "#decoupled",
            start: "1% 20%",
            end: "80% 70%",
            animation:decoupled,
            toggleActions: "restart none none reverse",
            markers:true
          });

      }, []);
  return (
    <div>
        <svg id="decoupled" width="416" height="271" viewBox="0 0 416 271" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="Group 1070">
<g id="decoupled">
    <g className='rect-frame'>
    <rect id="Rectangle 469" x="1" y="1" width="413" height="269" rx="9" fill="white" stroke="#4767F6" stroke-width="2"/>
<path id="Rectangle 470" d="M11 2.5H406C411.247 2.5 415.5 6.75329 415.5 12V17.5H1.5V12C1.5 6.75329 5.75329 2.5 11 2.5Z" fill="#4767F6" stroke="#4767F6"/>
    </g>
<rect id="rectangle-1" x="23" y="40" width="118" height="206" fill="#F1F2F6"/>
<rect id="rectangle-2" x="151" y="40" width="118" height="206" fill="#F1F2F6"/>
<rect id="rectangle-3" x="279" y="40" width="118" height="206" fill="#F1F2F6"/>
<path id="star" d="M79.5 63L57.6344 79.4046L35.2759 95.1307L44.1207 120.995L52.168 147.119L79.5 146.7L106.832 147.119L114.879 120.995L123.724 95.1307L101.366 79.4046L79.5 63Z" fill="#FF5223"/>
<path id="ellipse" d="M253.5 143.5C253.5 120.325 233.822 101.5 209.5 101.5C185.178 101.5 165.5 120.325 165.5 143.5C165.5 166.675 185.178 185.5 209.5 185.5C233.822 185.5 253.5 166.675 253.5 143.5Z" fill="#4767F6" stroke="#4767F6"/>
<rect className="rectangle-box" width="63.6406" height="63.6406" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 338 231.001)" fill="#F0027F"/>
</g>
</g>
</svg>

    </div>
    
  )
}

export default Decoupled