
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Ecomj = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin
    
        const ecomj = gsap.timeline();
    
        gsap.set("#frame", { opacity: 0, y: 20 });
        gsap.set("#avatar-card", { scale: 0, opacity: 0 });
        gsap.set("#avatar", { y: 30, opacity: 0 });
        gsap.set("#symbol-card", { x: -50, opacity: 0 });
        gsap.set("#text-card", { y: 30, opacity: 0 });
        gsap.set("#diamond-card", { x: -30, opacity: 0 });
        gsap.set("#card-dot", { x: 30, opacity: 0 });
    
        ecomj
          .to("#frame", { opacity: 1, y: 0, duration: 0.3 })
          .to("#avatar-card", { scale: 1, opacity: 1, duration: 0.3 })
          .to("#avatar", { y: 0, opacity: 1, duration: 0.3 })
          .to("#symbol-card", { x: 0, opacity: 1, duration: 0.3 })
          .to("#text-card", { y: 0, opacity: 1, duration: 0.3 })
          .to("#diamond-card", { x: 0, opacity: 1, duration: 0.3 })
          .to("#card-dot", { x: 0, opacity: 1, duration: 0.3 });

    
        ScrollTrigger.create({
          trigger: "#ecomj",
          start: "1% 20%",
          end: "80% 70%",
          animation: ecomj,
          toggleActions: "restart none none reverse",
          markers: true,
     
        });
      }, []);



  return (
    <div  > 
   <svg id="ecomj" className=" overflow-hidden" width="436" height="329" viewBox="0 0 436 329" fill="none" xmlns="http://www.w3.org/2000/svg">

<g clip-path="url(#clip0_0_1)">
<g id="frame">
<path id="Vector" d="M403.788 1H10C5.02944 1 1 5.02944 1 10V319C1 323.971 5.02944 328 10 328H403.788C408.759 328 412.788 323.971 412.788 319V10C412.788 5.02944 408.759 1 403.788 1Z" fill="white"/>
<path id="Vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M10 2C5.58172 2 2 5.58172 2 10V319C2 323.418 5.58172 327 10 327H403.788C408.206 327 411.788 323.418 411.788 319V10C411.788 5.58172 408.206 2 403.788 2H10ZM0 10C0 4.47715 4.47715 0 10 0H403.788C409.311 0 413.788 4.47715 413.788 10V319C413.788 324.523 409.311 329 403.788 329H10C4.47715 329 0 324.523 0 319V10Z" fill="#4767F6"/>
<path id="Vector_2" d="M0.5 10C0.5 4.7533 4.7533 0.5 10 0.5H403.788C409.034 0.5 413.288 4.75329 413.288 10V19.8013H0.5V10Z" fill="#4767F6"/>
<path id="Vector (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd" d="M10 1C5.02944 1 1 5.02944 1 10V19.3013H412.788V10C412.788 5.02946 408.758 1 403.788 1H10ZM0 10C0 4.47716 4.47716 0 10 0H403.788C409.31 0 413.788 4.47712 413.788 10V20.3013H0V10Z" fill="#4767F6"/>
</g>
<g id="card-dot">
<path id="Vector_3" d="M304.52 240.256C304.52 237.494 306.758 235.256 309.52 235.256H378.336C381.098 235.256 383.336 237.494 383.336 240.256V294.145C383.336 296.907 381.098 299.145 378.336 299.145H309.52C306.758 299.145 304.52 296.907 304.52 294.145V240.256Z" fill="#F0027F"/>
<g id="Group 331">
<path id="Vector_4" d="M319.149 247.197C322.282 247.197 324.822 249.737 324.822 252.87C324.822 256.002 322.282 258.542 319.149 258.542C316.017 258.542 313.477 256.002 313.477 252.87C313.477 249.737 316.017 247.197 319.149 247.197Z" fill="white"/>
</g>
</g>
<g id="diamond-card">
<g id="Group 330">
<path id="Vector_5" d="M216.148 240.256C216.148 237.494 218.387 235.256 221.148 235.256H289.965C292.727 235.256 294.965 237.494 294.965 240.256V294.145C294.965 296.907 292.727 299.145 289.965 299.145H221.148C218.387 299.145 216.148 296.907 216.148 294.145V240.256Z" fill="#F1F2F6"/>
<path id="Vector_6" d="M265.112 262.423L244.512 283.023L223.912 262.423L244.512 241.823L265.112 262.423Z" fill="#FF5223"/>
</g>
</g>
<g id="avatar-card">
<path id="Vector_7" d="M28.6602 53.9619C28.6602 51.2005 30.8987 48.9619 33.6602 48.9619H195.027C197.788 48.9619 200.027 51.2005 200.027 53.9619V294.145C200.027 296.907 197.788 299.145 195.027 299.145H33.6602C30.8987 299.145 28.6602 296.907 28.6602 294.145V53.9619Z" fill="#F1F2F6"/>
<g id="avatar">
<path id="Vector_8" d="M173.159 136.437C173.159 147.172 170.283 157.24 165.249 165.907C165.06 166.235 164.858 166.563 164.656 166.891C164.189 167.673 163.697 168.455 163.18 169.212C162.966 169.527 162.751 169.843 162.512 170.158C154.841 181.146 143.487 189.346 130.266 193.068C129.989 193.144 129.698 193.219 129.421 193.295C124.614 194.569 119.555 195.251 114.345 195.251C94.0216 195.251 76.0947 184.944 65.5607 169.262C64.564 167.812 63.6431 166.298 62.7978 164.759C58.1679 156.357 55.5312 146.706 55.5312 136.437C55.5312 103.951 81.8601 77.6226 114.345 77.6226C146.83 77.6226 173.159 103.951 173.159 136.437Z" fill="#EDDDD6"/>
<path id="Vector_9" d="M89.605 128.477C89.605 128.477 83.2998 95.1837 107.8 89.0903C132.301 82.9969 133.779 117.572 133.779 117.572C133.779 117.572 160.441 122.623 160.618 148.403C160.832 180.629 129.521 175.202 129.521 175.202L99.8526 163.191C99.8526 163.191 70.1334 147.097 89.6177 128.477H89.605Z" fill="#1C1C1C"/>
<path id="Vector_10" d="M162.409 170.321C154.756 181.238 143.428 189.385 130.237 193.082C129.96 193.157 129.671 193.233 129.394 193.308C124.599 194.574 119.551 195.251 114.353 195.251C94.0755 195.251 76.1897 185.011 65.6797 169.432C73.559 158.703 83.4397 150.581 90.161 147.699C100.105 143.437 115.876 140.58 130.439 144.728C130.477 144.741 130.527 144.741 130.577 144.753C134.957 146.007 139.212 147.887 143.177 150.556C151.748 156.322 157.991 163.014 162.409 170.321Z" fill="#FF5223"/>
<path id="Vector_11" d="M102.699 134.075V134.431L103.01 141.23L103.229 146.565C103.229 146.565 102.764 147.8 109.075 147.405C117.521 146.832 120.25 143.267 120.25 143.267L120.612 130.764L118.051 131.248L102.712 134.075H102.699Z" fill="#FCA397"/>
<path id="Vector_12" d="M102.699 134.58L103.001 141.512C106.988 141.006 114.256 139.227 117.199 132.75C117.425 132.218 117.576 131.751 117.627 131.361L102.737 134.49L102.712 134.593L102.699 134.58Z" fill="#1C1C1C"/>
<path id="Vector_13" d="M100.376 102.455C100.376 102.455 92.802 120.123 95.5303 130.062C98.2585 139.989 107.128 138.425 112.423 136.506C117.73 134.587 120.184 131.269 120.184 131.269C120.184 131.269 125.142 132.985 128.456 128.283C131.77 123.58 129.727 118.178 126.899 116.945C124.071 115.712 120.707 117.797 120.707 117.797L123.349 112.662C123.349 112.662 112.249 86.5549 100.364 102.468L100.376 102.455Z" fill="#FCA397"/>
<path id="Vector_14" d="M102.712 99.9356C102.712 99.9356 102.157 109.298 111.536 113.548C120.915 117.799 127.18 116.964 127.18 116.964L126.575 104.756L114.826 91.9526L104.325 95.3052L102.699 99.9356H102.712Z" fill="#1C1C1C"/>
<path id="Vector_15" d="M120.613 114.643L120.646 120.016L124.793 115.294L120.613 114.643Z" fill="#1C1C1C"/>
<path id="Vector_16" d="M164.798 166.766C164.324 167.539 163.824 168.312 163.298 169.06C163.08 169.371 162.862 169.683 162.618 169.995C154.819 180.855 143.275 188.959 129.832 192.637C129.55 192.712 129.255 192.787 128.973 192.862L129.794 144.497C129.794 144.497 129.883 144.51 130.037 144.534C130.076 144.547 130.127 144.547 130.178 144.559C133.129 145.046 152.459 148.761 162.836 163.549C163.541 164.534 164.183 165.618 164.798 166.766Z" fill="#FF5223"/>
<path id="Vector_17" d="M107.001 148.08C103.245 148.08 100.434 147.354 100.204 147.299C99.8587 147.203 99.6542 146.834 99.7309 146.478C99.8203 146.108 100.165 145.889 100.498 145.971C100.613 145.998 111.869 148.874 119.599 142.834C119.88 142.615 120.289 142.684 120.493 142.985C120.698 143.286 120.634 143.725 120.353 143.944C116.111 147.258 111 148.08 106.988 148.08H107.001Z" fill="#7772D3"/>
<path id="Vector_18" d="M97.9639 109.269C97.6981 109.269 97.445 109.045 97.3565 108.711C97.2552 108.296 97.4324 107.85 97.7741 107.706L101.279 106.319C101.608 106.191 101.963 106.415 102.077 106.845C102.178 107.26 102.001 107.706 101.659 107.85L98.1537 109.237C98.1537 109.237 98.0271 109.269 97.9639 109.269Z" fill="#1C1C1C"/>
<path id="Vector_19" d="M121.236 125.987C121.075 125.987 120.901 125.921 120.777 125.775C120.541 125.509 120.566 125.084 120.814 124.831L126.137 119.595C126.385 119.342 126.782 119.369 127.018 119.635C127.253 119.9 127.229 120.326 126.981 120.578L121.658 125.815C121.534 125.934 121.385 125.987 121.236 125.987Z" fill="#1C1C1C"/>
<path id="Vector_20" d="M126.592 125.39C126.51 125.39 126.428 125.376 126.357 125.334L123.353 123.757C123.06 123.603 122.919 123.18 123.048 122.828C123.177 122.476 123.529 122.308 123.823 122.462L126.827 124.039C127.12 124.194 127.261 124.616 127.132 124.968C127.038 125.235 126.815 125.39 126.592 125.39Z" fill="#1C1C1C"/>
<path id="Vector_21" d="M99.134 117.628C99.134 117.628 99.0571 117.628 99.0241 117.615C98.7272 117.537 98.5403 117.199 98.5953 116.848L99.156 113.65L98.0565 112.142C97.8586 111.869 97.8806 111.466 98.1115 111.219C98.3424 110.985 98.6832 111.011 98.8921 111.284L100.179 113.039C100.289 113.195 100.333 113.403 100.3 113.598L99.6838 117.108C99.6288 117.42 99.3979 117.628 99.145 117.628H99.134Z" fill="#1C1C1C"/>
<path id="Vector_22" d="M109.589 118.225C109.589 118.225 109.493 118.225 109.452 118.212C109.081 118.134 108.847 117.796 108.916 117.445L109.617 114.247L108.242 112.739C107.995 112.466 108.023 112.063 108.311 111.816C108.6 111.582 109.026 111.608 109.287 111.881L110.895 113.636C111.033 113.792 111.088 114 111.046 114.195L110.277 117.705C110.208 118.017 109.919 118.225 109.603 118.225H109.589Z" fill="#1C1C1C"/>
<path id="Vector_23" d="M101.211 125.39C100.925 125.39 100.664 125.195 100.602 124.901C99.4462 119.464 102.118 116.727 102.229 116.617C102.466 116.372 102.863 116.372 103.112 116.617C103.36 116.849 103.36 117.24 103.112 117.484C103.012 117.594 100.801 119.916 101.807 124.657C101.882 124.987 101.658 125.317 101.322 125.378C101.285 125.378 101.235 125.39 101.198 125.39H101.211Z" fill="#1C1C1C"/>
<path id="Vector_24" d="M107.015 130.764C106.666 130.764 105.84 130.585 104.119 128.488C103.921 128.245 103.851 127.912 103.921 127.605C104.002 127.285 104.235 127.03 104.537 126.927C108.69 125.559 109.248 126.032 109.493 126.224C109.702 126.39 110.016 126.812 109.783 127.656C109.469 128.82 108.143 130.675 107.12 130.738C107.096 130.738 107.061 130.738 107.015 130.738V130.764ZM105.317 128.027C106.247 129.089 106.91 129.472 107.05 129.485C107.155 129.485 107.538 129.229 108.015 128.564C108.422 128.002 108.632 127.503 108.69 127.247C108.353 127.285 107.329 127.375 105.317 128.014V128.027Z" fill="#1C1C1C"/>
<path id="Vector_25" d="M85.8046 166.441C85.7412 166.516 79.6806 172.942 80.8344 184.503C80.4667 184.277 80.1244 184.026 79.7694 183.775C79.668 183.712 79.5792 183.637 79.4778 183.561C78.7297 172.089 84.8156 165.675 84.8917 165.587C85.1326 165.336 85.5257 165.336 85.7919 165.562C86.0455 165.8 86.0455 166.202 85.7919 166.453L85.8046 166.441Z" fill="#7772D3"/>
</g>
<path id="Vector_26" d="M185.293 253.766H45.1836C44.6313 253.766 44.1836 254.214 44.1836 254.766V257.543C44.1836 258.095 44.6313 258.543 45.1836 258.543H185.293C185.845 258.543 186.293 258.095 186.293 257.543V254.766C186.293 254.214 185.845 253.766 185.293 253.766Z" fill="#D1D5E6"/>
<path id="Vector_27" d="M114.835 264.514H45.1836C44.6313 264.514 44.1836 264.962 44.1836 265.514V268.291C44.1836 268.843 44.6313 269.291 45.1836 269.291H114.835C115.387 269.291 115.835 268.843 115.835 268.291V265.514C115.835 264.962 115.387 264.514 114.835 264.514Z" fill="#D1D5E6"/>
<path id="Vector_28" d="M160.812 275.261H45.1836C44.6313 275.261 44.1836 275.709 44.1836 276.261V279.038C44.1836 279.59 44.6313 280.038 45.1836 280.038H160.812C161.364 280.038 161.812 279.59 161.812 279.038V276.261C161.812 275.709 161.364 275.261 160.812 275.261Z" fill="#D1D5E6"/>
</g>
<g id="text-card">
<path id="Vector_29" d="M211.969 147.109C211.969 144.347 214.207 142.109 216.969 142.109H378.335C381.097 142.109 383.335 144.347 383.335 147.109V217.12C383.335 219.881 381.097 222.12 378.335 222.12H216.969C214.207 222.12 211.969 219.881 211.969 217.12V147.109Z" fill="#F1F2F6"/>
<path id="Vector_30" d="M365.019 168.381H224.91C224.358 168.381 223.91 168.829 223.91 169.381V172.158C223.91 172.71 224.358 173.158 224.91 173.158H365.019C365.571 173.158 366.019 172.71 366.019 172.158V169.381C366.019 168.829 365.571 168.381 365.019 168.381Z" fill="#D1D5E6"/>
<path id="Vector_31" d="M294.561 179.129H224.91C224.358 179.129 223.91 179.577 223.91 180.129V182.906C223.91 183.458 224.358 183.906 224.91 183.906H294.561C295.114 183.906 295.561 183.458 295.561 182.906V180.129C295.561 179.577 295.114 179.129 294.561 179.129Z" fill="#D1D5E6"/>
<path id="Vector_32" d="M340.538 189.876H224.91C224.358 189.876 223.91 190.324 223.91 190.876V193.653C223.91 194.205 224.358 194.653 224.91 194.653H340.538C341.09 194.653 341.538 194.205 341.538 193.653V190.876C341.538 190.324 341.09 189.876 340.538 189.876Z" fill="#D1D5E6"/>
</g>
<g id="symbol-card">
<path id="Vector_33" d="M265.125 53.9619C265.125 51.4766 267.14 49.4619 269.625 49.4619H430.992C433.477 49.4619 435.492 51.4766 435.492 53.9619V123.973C435.492 126.458 433.477 128.473 430.992 128.473H269.625C267.14 128.473 265.125 126.458 265.125 123.973V53.9619Z" fill="#4767F6"/>
<path id="Vector (Stroke)_3" fill-rule="evenodd" clip-rule="evenodd" d="M269.625 49.9619C267.416 49.9619 265.625 51.7528 265.625 53.9619V123.973C265.625 126.182 267.416 127.973 269.625 127.973H430.992C433.201 127.973 434.992 126.182 434.992 123.973V53.9619C434.992 51.7528 433.201 49.9619 430.992 49.9619H269.625ZM264.625 53.9619C264.625 51.2004 266.864 48.9619 269.625 48.9619H430.992C433.753 48.9619 435.992 51.2004 435.992 53.9619V123.973C435.992 126.734 433.753 128.973 430.992 128.973H269.625C266.864 128.973 264.625 126.734 264.625 123.973V53.9619Z" fill="#4767F6"/>
<path id="Vector_34" d="M305.229 68.666L294.279 76.8813L283.082 84.7568L287.511 97.7096L291.541 110.792L305.229 110.582L318.916 110.792L322.946 97.7096L327.376 84.7568L316.179 76.8813L305.229 68.666Z" fill="#F0027F"/>
<path id="Vector_35" d="M417.081 84.1904H338.473C337.921 84.1904 337.473 84.6381 337.473 85.1904V87.9672C337.473 88.5195 337.921 88.9672 338.473 88.9672H417.081C417.633 88.9672 418.081 88.5195 418.081 87.9672V85.1904C418.081 84.6381 417.633 84.1904 417.081 84.1904Z" fill="#D1D5E6"/>
<path id="Vector_36" d="M377.076 94.9385H338.473C337.921 94.9385 337.473 95.3862 337.473 95.9385V98.7153C337.473 99.2676 337.921 99.7153 338.473 99.7153H377.076C377.628 99.7153 378.076 99.2676 378.076 98.7153V95.9385C378.076 95.3862 377.628 94.9385 377.076 94.9385Z" fill="#D1D5E6"/>
<path id="Vector_37" d="M403.348 105.686H338.473C337.921 105.686 337.473 106.134 337.473 106.686V109.463C337.473 110.015 337.921 110.463 338.473 110.463H403.348C403.9 110.463 404.348 110.015 404.348 109.463V106.686C404.348 106.134 403.9 105.686 403.348 105.686Z" fill="#D1D5E6"/>
</g>
</g>
<defs>
<clipPath id="clip0_0_1">
<rect width="436" height="329" fill="white"/>
</clipPath>
</defs>
</svg>


    </div>
  )
}

export default Ecomj