import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Awarness = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const awarness = gsap.timeline();

    gsap.set("#frame", { opacity: 0, y: 20 });
    gsap.set("#shortcard-1", { y: 10, opacity: 0 });
    gsap.set("#shortcard-2", { y: 10, opacity: 0 });
    gsap.set("#shortcard-3", { y: 10, opacity: 0 });
    gsap.set("#long-card", { x: -100, opacity: 0 });

    awarness
      .to("#frame", { opacity: 1, y: 0, duration: 0.3 })
      .to("#shortcard-1", { y: 0, opacity: 1, duration: 0.3 })
      .to("#shortcard-2", { y: 0, opacity: 1, duration: 0.3 })
      .to("#shortcard-3", { y: 0, opacity: 1, duration: 0.3 })
      .to("#long-card", { x: 0, opacity: 1, duration: 0.3 });

    ScrollTrigger.create({
      trigger: "#Awarness",
      start: "1% 20%",
      end: "80% 70%",
      animation: awarness,
      toggleActions: "restart none none reverse",
    });
  }, []);
  return (
    <div className="w-10/12 mx-auto">
      <svg
        id="Awarness"
        width=""
        height=""
        viewBox="0 0 361 271"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <g id="frame">
            <g id="">
              <g id="Group 1074">
                <rect
                  id="Rectangle 498"
                  x="1"
                  y="1"
                  width="359"
                  height="269"
                  rx="9"
                  fill="white"
                  stroke="#4767F6"
                  stroke-width="2"
                />
              </g>
              <g id="Rectangle 499">
                <mask id="path-2-inside-1_147_40" fill="white">
                  <path d="M1 10C1 4.47715 5.47715 0 11 0H351C356.523 0 361 4.47715 361 10V16H1V10Z" />
                </mask>
                <path
                  d="M1 10C1 4.47715 5.47715 0 11 0H351C356.523 0 361 4.47715 361 10V16H1V10Z"
                  fill="#4767F6"
                  stroke="#4767F6"
                  stroke-width="2"
                  mask="url(#path-2-inside-1_147_40)"
                />
              </g>
            </g>
          </g>
          <g id="shortcard-2">
            <rect
              id="Rectangle 484"
              x="138"
              y="54"
              width="86.1576"
              height="86.1576"
              rx="5"
              fill="#F1F2F6"
            />
            <rect
              id="Rectangle 487"
              x="153.047"
              y="111.589"
              width="54.8175"
              height="6.44912"
              fill="#D1D5E6"
            />
            <rect
              id="Rectangle 488"
              x="153.047"
              y="123.413"
              width="54.8175"
              height="6.44912"
              fill="#D1D5E6"
            />
            <rect
              id="Rectangle 609"
              x="200"
              y="72"
              width="15.5563"
              height="15.5563"
              transform="rotate(45 200 72)"
              fill="#F0027F"
            />
            <rect
              id="Rectangle 607"
              x="180"
              y="63"
              width="28.2843"
              height="28.2843"
              transform="rotate(45 180 63)"
              fill="#4767F6"
            />
            <rect
              id="Rectangle 608"
              x="160"
              y="72"
              width="15.5563"
              height="15.5563"
              transform="rotate(45 160 72)"
              fill="#FF5223"
            />
          </g>
          <g id="shortcard-3">
            <rect
              id="Rectangle 484_2"
              x="248"
              y="54"
              width="86.1576"
              height="86.1576"
              rx="5"
              fill="#F1F2F6"
            />
            <g id="Group 1042">
              <ellipse
                id="Ellipse 219"
                cx="282.5"
                cy="81"
                rx="15.5"
                ry="15"
                fill="#FF5223"
              />
              <rect
                id="Rectangle 610"
                x="303.461"
                y="83.2507"
                width="23.3889"
                height="23.3889"
                transform="rotate(45 303.461 83.2507)"
                fill="#4767F6"
              />
              <path
                id="Polygon 27"
                d="M278 97L293.217 108.056L287.405 125.944H268.595L262.783 108.056L278 97Z"
                fill="#F0027F"
              />
            </g>
          </g>
          <g id="long-card">
            <g id="Group 1073">
              <rect
                id="Rectangle 611"
                x="28"
                y="166"
                width="306"
                height="74"
                rx="5"
                fill="#F1F2F6"
              />
            </g>
            <rect
              id="Rectangle 612"
              x="57"
              y="176"
              width="19.799"
              height="19.799"
              transform="rotate(45 57 176)"
              fill="#F0027F"
            />
            <rect
              id="Rectangle 615"
              x="262"
              y="179"
              width="55"
              height="48"
              rx="4"
              fill="white"
            />
            <rect
              id="Rectangle 487_2"
              x="78"
              y="187"
              width="54.8175"
              height="6.44912"
              fill="#D1D5E6"
            />
            <rect
              id="Rectangle 613"
              x="43"
              y="209"
              width="186"
              height="6"
              fill="#D1D5E6"
            />
            <rect
              id="Rectangle 614"
              x="43"
              y="220"
              width="157"
              height="6"
              fill="#D1D5E6"
            />
            <circle id="Ellipse 257" cx="290" cy="203" r="16" fill="#4767F6" />
          </g>
          <g id="shortcard-1">
            <rect
              id="Rectangle 484_3"
              x="27.8438"
              y="54"
              width="86.1576"
              height="86.1576"
              rx="5"
              fill="#F1F2F6"
            />
            <circle
              id="Ellipse 219_2"
              cx="70.8395"
              cy="83.6431"
              r="19.3473"
              fill="#FF5223"
            />
            <rect
              id="Rectangle 487_3"
              x="42.8906"
              y="111.589"
              width="54.8175"
              height="6.44912"
              fill="#D1D5E6"
            />
            <rect
              id="Rectangle 488_2"
              x="42.8906"
              y="123.413"
              width="54.8175"
              height="6.44912"
              fill="#D1D5E6"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Awarness;