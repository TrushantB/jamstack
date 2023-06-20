import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Aboutone = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); 

    const articleOne = gsap.timeline();

articleOne
.to("#sixthGroup", { opacity: 0})
.to("#fifthGroup", { opacity: 0})
.to("#fourthGroup", { opacity: 0})
.to("#thirdGroup", { opacity: 0})
.to("#secondGroup", { opacity: 0})
.to("#firstGroup", { opacity: 0})
.to("#horizontalLineOne", {x:-40, opacity: 0})
.to("#verticalLineTwo", {y:-40, opacity: 0})
.to("#verticalLineOne", {y:-40, opacity: 0})
.to("#groupFrame", {y:10, opacity: 0 ,duration:0.3})

   

    ScrollTrigger.create({
      trigger: "#articleOne",
      start: "1% 20%",
      end: "+=350",
      animation: articleOne,
      toggleActions: "restart none none reverse",
      markers: true,
      scrub:-2
 
    });
  }, []);

  return (
    <div>
     
     <svg id="articleOne" width="607" height="352" viewBox="0 0 607 352" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="607" height="352" fill="#E0E0E0"/>
<g id="About Us">
<rect width="1440" height="8178" transform="translate(-756 -4222)" fill="white"/>
<g id="discuss">
<g id="groupFrame">
<path id="Rectangle 279" d="M10 7H597C601.971 7 606 11.0294 606 16V341C606 345.971 601.971 350 597 350H10C5.02945 350 1 345.971 1 341V16C1 11.0294 5.02944 7 10 7Z" fill="white" stroke="#4767F6" stroke-width="2"/>
<path id="Rectangle 281" d="M0.945312 10C0.945312 4.75329 5.19861 0.5 10.4453 0.5H596.979C602.226 0.5 606.479 4.75329 606.479 10V21.1619H0.945312V10Z" fill="#4767F6" stroke="#4767F6"/>
<circle id="Ellipse 100" cx="16.0553" cy="10.5123" r="4.14125" fill="white"/>
<circle id="Ellipse 101" cx="26.8873" cy="10.5123" r="4.14125" fill="white"/>
<circle id="Ellipse 102" cx="37.7155" cy="10.5123" r="4.14125" fill="white"/>
</g>
<g id="secondGroup">
<circle id="Ellipse 140" cx="296.067" cy="98.7529" r="32.4929" fill="#D1D5E5"/>
<path id="Polygon 2" d="M296.066 80.2764L313.638 93.0432L306.926 113.7H285.206L278.494 93.0432L296.066 80.2764Z" fill="#4767F6"/>
<path id="Polygon 3" d="M239.999 43.324L256.965 55.6506L250.485 75.5954H229.514L223.033 55.6506L239.999 43.324Z" fill="#F0027F"/>
<path id="Polygon 4" d="M252.105 126.149L263.012 134.073L258.846 146.895H245.364L241.198 134.073L252.105 126.149Z" fill="#F0027F"/>
<path id="Polygon 5" d="M358.508 75.1797L370.627 83.9844L365.998 98.2307H351.018L346.389 83.9844L358.508 75.1797Z" fill="#F0027F"/>
<path id="Polygon 6" d="M328.087 147.237L337.194 140.62L346.301 147.237L342.822 157.943H331.565L328.087 147.237Z" stroke="#F0027F"/>
</g>
<g id="sixthGroup">
<rect id="Rectangle 312" x="46.3164" y="216.619" width="93.0188" height="93.0188" rx="10" fill="#F1F2F6"/>
<circle id="Ellipse 147" cx="92.8284" cy="263.129" r="30.8558" stroke="#FF5223" stroke-width="2"/>
<circle id="Ellipse 148" cx="5.73404" cy="5.73404" r="5.73404" transform="matrix(1 0 0 -1 76.2617 291.162)" fill="#F0027F"/>
</g>
<g id="fifthGroup">
<line id="Line 91" x1="230.312" y1="202.603" x2="230.312" y2="313.461" stroke="#D1D5E5"/>
<line id="Line 93" x1="296.57" y1="202.603" x2="296.57" y2="313.461" stroke="#D1D5E5"/>
<line id="Line 92" x1="263.441" y1="202.603" x2="263.441" y2="313.461" stroke="#D1D5E5"/>
<line id="Line 94" x1="329.699" y1="202.603" x2="329.699" y2="313.461" stroke="#D1D5E5"/>
<line id="Line 95" x1="362.828" y1="202.603" x2="362.828" y2="313.461" stroke="#D1D5E5"/>
<line id="Line 96" x1="229.579" y1="265.872" x2="263.346" y2="248.033" stroke="#4767F6"/>
<line id="Line 97" x1="263.238" y1="248.072" x2="297.005" y2="272.92" stroke="#4767F6"/>
<line id="Line 98" x1="296.337" y1="272.995" x2="329.467" y2="234.768" stroke="#4767F6"/>
<line id="Line 99" x1="329.356" y1="234.619" x2="363.123" y2="245.45" stroke="#4767F6"/>
<line id="Line 101" x1="362.753" y1="245.697" x2="368.42" y2="242.929" stroke="#4767F6"/>
<circle id="Ellipse 172" cx="2.54846" cy="2.54846" r="2.54846" transform="matrix(1 0 0 -1 260.387 251.023)" fill="#FF5223"/>
<circle id="Ellipse 173" cx="2.54846" cy="2.54846" r="2.54846" transform="matrix(1 0 0 -1 293.52 275.234)" fill="#FF5223"/>
<circle id="Ellipse 174" cx="2.54846" cy="2.54846" r="2.54846" transform="matrix(1 0 0 -1 327.285 237.644)" fill="#FF5223"/>
<circle id="Ellipse 175" cx="2.54846" cy="2.54846" r="2.54846" transform="matrix(1 0 0 -1 360.414 248.475)" fill="#FF5223"/>
</g>
<g id="firstGroup">
<rect id="Rectangle 282" x="50.1406" y="62.4374" width="111.495" height="4.45981" rx="1" fill="#D1D5E6"/>
<rect id="Rectangle 284" x="50.1406" y="94.9302" width="111.495" height="4.45981" rx="1" fill="#D1D5E6"/>
<rect id="Rectangle 286" x="50.1406" y="127.423" width="111.495" height="4.45981" rx="1" fill="#D1D5E6"/>
<rect id="Rectangle 283" x="50.1406" y="75.1797" width="85.3734" height="4.45981" rx="1" fill="#D1D5E6"/>
<rect id="Rectangle 285" x="50.1406" y="107.672" width="85.3734" height="4.45981" rx="1" fill="#D1D5E6"/>
<rect id="Rectangle 287" x="50.1406" y="140.165" width="85.3734" height="4.45981" rx="1" fill="#D1D5E6"/>
<rect id="Rectangle 288" width="11.607" height="11.607" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 29.6758 111.345)" fill="#FF5223"/>
<circle id="Ellipse 111" cx="29.7544" cy="136.343" r="6.50827" fill="#4767F6" stroke="#4767F6"/>
<path id="Star 27" d="M30.0751 62.4374L26.3303 65.2469L22.501 67.9403L24.0158 72.3701L25.394 76.8443L30.0751 76.7725L34.7562 76.8443L36.1344 72.3701L37.6493 67.9403L33.82 65.2469L30.0751 62.4374Z" fill="#F0027F"/>
</g>
<path id="verticalLineTwo" d="M398.367 21.6619L398.367 351.05" stroke="#4767F6" stroke-width="2"/>
<line id="verticalLineOne" x1="204.047" y1="21.6619" x2="204.047" y2="351.05" stroke="#4767F6" stroke-width="2"/>
<line id="horizontalLineOne" x1="0.445312" y1="174.844" x2="606.979" y2="174.844" stroke="#4767F6" stroke-width="2"/>
<g id="thirdGroup">
<rect id="Rectangle 289" x="433.395" y="61" width="133.794" height="4.45981" rx="1" fill="#D1D5E6"/>
<rect id="Rectangle 291" x="433.395" y="89.0332" width="110.221" height="4.45981" rx="1" fill="#D1D5E6"/>
<rect id="Rectangle 293" x="433.395" y="117.066" width="91.7446" height="4.45981" rx="1" fill="#D1D5E6"/>
<rect id="Rectangle 290" x="433.395" y="75.0167" width="72.6311" height="4.45981" rx="1" fill="#D1D5E6"/>
<rect id="Rectangle 292" x="433.395" y="103.05" width="40.7754" height="4.45981" rx="1" fill="#D1D5E6"/>
<rect id="Rectangle 294" x="433.395" y="131.083" width="40.7754" height="4.45981" rx="1" fill="#D1D5E6"/>
</g>
<g id="fourthGroup">
<path id="Ellipse 141" d="M533.067 260.258C532.848 270.778 529.02 280.904 522.223 288.937C515.426 296.969 506.074 302.421 495.734 304.378C485.395 306.335 474.698 304.677 465.436 299.684C456.173 294.69 448.909 286.664 444.862 276.951C440.814 267.238 440.229 256.429 443.204 246.336C446.179 236.243 452.534 227.479 461.203 221.515C469.872 215.55 480.327 212.747 490.817 213.576C501.307 214.405 511.193 218.815 518.818 226.067L487.204 259.306L533.067 260.258Z" fill="#F1F2F6"/>
<path id="Ellipse 143" d="M453.749 227.922C457.87 223.529 462.816 219.99 468.305 217.508C473.794 215.026 479.718 213.649 485.739 213.457C491.76 213.264 497.76 214.259 503.396 216.385C509.033 218.512 514.195 221.727 518.589 225.849L487.206 259.305L453.749 227.922Z" fill="#F0027F"/>
<path id="Ellipse 142" d="M523.58 225.079C527.892 229.286 531.333 234.301 533.707 239.838C536.081 245.374 537.341 251.324 537.416 257.348L491.547 257.914L523.58 225.079Z" fill="#FF5223"/>
</g>
</g>
</g>
</svg>


    </div>
  )
}

export default Aboutone