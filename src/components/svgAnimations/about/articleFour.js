import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



const Aboutfour = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger); 
    
        const articleThree = gsap.timeline();
    
    articleThree
    .to("#deployStack", { opacity: 0, duration:0.3})
    .to("#deployIndicator", { opacity: 0, duration:0.3})
    .to("#deployCardTwo", { opacity: 0, y:50, duration:0.3})
    .to("#deployCardThree", { x:50, opacity: 0, duration:0.3})
    .to("#deployCardFour", { y:-40, opacity: 0, duration:0.3})
    .to("#deployCardOne", {x:-50, opacity: 0, duration:0.3})
    .to("#deployFrame", {y:30, opacity: 0, duration:0.3})

    
       
    
        ScrollTrigger.create({
          trigger: "#articleFour",
          start: "1% 20%",
          end: "+=350",
          animation: articleThree,
          toggleActions: "restart none none reverse",
          markers: true,
          scrub:true
          
        
     
        });
      }, []);


  return (
    <div>
        <svg id="articleFour" width="100%" height="auto" viewBox="0 0 649 374" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="649" height="374" fill="#E0E0E0"/>
<g id="About Us">
<rect width="1440" height="8178" transform="translate(-47 -5574)" fill="white"/>
<g id="deploy">
<g id="deployFrame">
<rect id="Rectangle 419" x="68.0586" y="1.19531" width="492.562" height="371.805" rx="9" fill="white" stroke="#4767F6" stroke-width="2"/>
<path id="Rectangle 420" d="M67.5586 10.1953C67.5586 4.94861 71.8119 0.695312 77.0586 0.695312H551.621C556.867 0.695312 561.121 4.94861 561.121 10.1953V22.7613H67.5586V10.1953Z" fill="#4767F6" stroke="#4767F6"/>
</g>
<g id="deployCardThree">
<rect id="Rectangle 426" x="265.832" y="211.181" width="260.51" height="143.823" rx="5" fill="#4767F6"/>
<g id="Group 1022">
<rect id="Rectangle 437" x="286.188" y="234.248" width="227.268" height="5.42729" fill="white"/>
<rect id="Rectangle 438" x="286.188" y="245.781" width="113.634" height="5.42729" fill="white"/>
<rect id="Rectangle 439" x="286.188" y="257.314" width="171.686" height="5.42729" fill="white"/>
<rect id="Rectangle 440" x="286.188" y="268.847" width="66.6982" height="5.42729" fill="white"/>
<rect id="Rectangle 509" x="286.188" y="314.979" width="66.6982" height="5.42729" fill="white"/>
<rect id="Rectangle 442" x="286.188" y="291.913" width="154.394" height="5.42729" fill="white"/>
<rect id="Rectangle 441" x="286.188" y="280.38" width="119.81" height="5.42729" fill="white"/>
<rect id="Rectangle 508" x="286.188" y="303.446" width="119.81" height="5.42729" fill="white"/>
<rect id="Rectangle 510" x="286.188" y="326.512" width="119.81" height="5.42729" fill="white"/>
</g>
</g>
<g id="deployCardOne">
<rect id="Rectangle 393" x="95.5508" y="55.8252" width="267.973" height="137.039" rx="10" fill="#F1F2F6"/>
<circle id="Ellipse 181" cx="159.323" cy="124.345" r="45.132" stroke="#FF5223" stroke-width="2"/>
<circle id="Ellipse 182" cx="8.14094" cy="8.14094" r="8.14094" transform="matrix(1 0 0 -1 135.578 165.728)" fill="#F0027F"/>
<rect id="Rectangle 441_2" x="223.094" y="124.345" width="119.81" height="5.42729" fill="white"/>
<rect id="Rectangle 508_2" x="223.094" y="137.913" width="57.665" height="5.42729" fill="white"/>
<rect id="Rectangle 509_2" x="223.094" y="151.481" width="85.4799" height="5.42729" fill="white"/>
<rect id="Rectangle 510_2" x="223.094" y="165.049" width="40.0263" height="5.42729" fill="white"/>
</g>
<g id="deployCardTwo">
<path id="Rectangle 537" d="M380.484 65.8252C380.484 60.3024 384.962 55.8252 390.484 55.8252H516.343C521.866 55.8252 526.343 60.3023 526.343 65.8252V182.864C526.343 188.387 521.866 192.864 516.343 192.864H390.484C384.962 192.864 380.484 188.387 380.484 182.864V65.8252Z" fill="#F0027F"/>
<circle id="Ellipse 246" cx="453.755" cy="124.344" r="51.5593" fill="white"/>
<rect id="Rectangle 538" x="453.754" y="92.4595" width="46.0519" height="46.0519" transform="rotate(45 453.754 92.4595)" fill="#4767F6"/>
</g>
<g id="deployIndicator">
<rect id="Rectangle 603" x="516" y="164" width="133" height="93" rx="5" fill="#F1F2F6"/>
<path id="Ellipse 254" d="M533 234C533 227.434 534.293 220.932 536.806 214.866C539.319 208.8 543.002 203.288 547.645 198.645C552.288 194.002 557.8 190.319 563.866 187.806C569.932 185.293 576.434 184 583 184C589.566 184 596.068 185.293 602.134 187.806C608.2 190.319 613.712 194.002 618.355 198.645C622.998 203.288 626.681 208.8 629.194 214.866C631.707 220.932 633 227.434 633 234" stroke="#4767F6" stroke-width="15"/>
<path id="Rectangle 604" d="M553.404 189.795L584.528 226.459L585.117 232.26L579.721 230.049L553.404 189.795Z" fill="#FF5223"/>
</g>
<g id="deployCardFour">
<path id="Rectangle 602" d="M99 217C99 214.239 101.239 212 104 212H247C249.761 212 252 214.239 252 217V346C252 348.761 249.761 351 247 351H104C101.239 351 99 348.761 99 346V217Z" fill="#D1D5E6"/>
<path id="Polygon 24" d="M176 232L223.553 266.549L205.389 322.451H146.611L128.447 266.549L176 232Z" fill="#FF5223"/>
</g>
<g id="deployStack">
<g id="Group 1103">
<rect id="Rectangle 423" y="254" width="108" height="101" rx="10" fill="#F1F2F6"/>
<rect id="Rectangle 429" x="9" y="263" width="90" height="23" rx="5" fill="#FF5223"/>
<rect id="Rectangle 430" x="9" y="294" width="90" height="23" rx="5" fill="#FF5223"/>
<rect id="Rectangle 431" x="9" y="326" width="90" height="21" rx="5" fill="#FF5223"/>
<ellipse id="Ellipse 190" cx="19" cy="274.5" rx="2" ry="2.5" fill="white"/>
<ellipse id="Ellipse 192" cx="19" cy="305.5" rx="2" ry="2.5" fill="white"/>
<circle id="Ellipse 194" cx="19" cy="336" r="2" fill="white"/>
<ellipse id="Ellipse 191" cx="24.5" cy="275" rx="1.5" ry="2" fill="white"/>
<ellipse id="Ellipse 193" cx="24.5" cy="306" rx="1.5" ry="2" fill="white"/>
<circle id="Ellipse 195" cx="24.5" cy="336.5" r="1.5" fill="white"/>
</g>
</g>
</g>
</g>
</svg>

    </div>
  )
}

export default Aboutfour