import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Acclerate = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin
    
        const acclerate = gsap.timeline();
    
        gsap.set("#frame", { opacity: 0, y: 20 });
        gsap.set("#dual-square", {  opacity: 0 })
        gsap.set("#bar-chart", { opacity: 0 })
        gsap.set("#symbol-box", {  opacity: 0 })
        gsap.set("#avatar_group", { opacity: 0 });
        gsap.set("#pie-box", {  opacity: 0 });
        gsap.set("#horizontal-bar", { x:-100, opacity: 0 });


    
        acclerate
          .to("#frame", { opacity: 1, y: 0 ,duration:0.3})
          .to("#dual-square", { opacity: 1 ,duration:0.3})
          .to("#bar-chart", {  opacity: 1 ,duration:0.3})
          .to("#symbol-box", {  opacity: 1 ,duration:0.3})
          .to("#avatar_group", {  opacity: 1 ,duration:0.3})
          .to("#pie-box", {  opacity: 1 })
          .to("#horizontal-bar", { x:0 ,opacity: 1 ,duration:0.3});
          
          ScrollTrigger.create({
            trigger: "#Acclerate",
            start: "1% 20%",
            end: "80% 70%",
            animation: acclerate,
            toggleActions: "restart none none reverse",
            markers: true,
       
          });
    
        
     
      }, []);
  return (
    <div className='w-10/12 mx-auto'> 
        <svg id="Acclerate" width="" height="" viewBox="0 0 361 271" fill="none" xmlns="http://www.w3.org/2000/svg">

<g  clip-path="url(#clip0_0_1)">
<g id="frame">
<path id="Vector" d="M351 1H10C5.02944 1 1 5.02944 1 10V261C1 265.971 5.02944 270 10 270H351C355.971 270 360 265.971 360 261V10C360 5.02944 355.971 1 351 1Z" fill="white" stroke="#4767F6" stroke-width="2"/>
<path id="Vector_2" d="M1.5 11C1.5 5.7533 5.7533 1.5 11 1.5H351C356.247 1.5 360.5 5.75329 360.5 11V16.5H1.5V11Z" fill="#4767F6" stroke="#4767F6"/>
</g>
<g id="dual-square">
<path id="Vector_3" d="M113 45H23C20.7909 45 19 46.7909 19 49V125C19 127.209 20.7909 129 23 129H113C115.209 129 117 127.209 117 125V49C117 46.7909 115.209 45 113 45Z" fill="#F1F2F6"/>
<path id="Vector_4" d="M80 58H42C39.7909 58 38 59.7909 38 62V100C38 102.209 39.7909 104 42 104H80C82.2091 104 84 102.209 84 100V62C84 59.7909 82.2091 58 80 58Z" fill="#F0027F"/>
<path id="Vector_5" d="M94 88H74C71.7909 88 70 89.7909 70 92V112C70 114.209 71.7909 116 74 116H94C96.2091 116 98 114.209 98 112V92C98 89.7909 96.2091 88 94 88Z" fill="#FF5223"/>
</g>
<g id="bar-chart">
<path id="Vector_6" d="M226 45H136C133.791 45 132 46.7909 132 49V125C132 127.209 133.791 129 136 129H226C228.209 129 230 127.209 230 125V49C230 46.7909 228.209 45 226 45Z" fill="#F1F2F6"/>
<path id="Vector_7" d="M155 71H143V120H155V71Z" fill="#D9D9D9"/>
<path id="Vector_8" d="M176 81H164V120H176V81Z" fill="#D9D9D9"/>
<path id="Vector_9" d="M197 61H185V120H197V61Z" fill="#D9D9D9"/>
<path id="Vector_10" d="M218 90H206V120H218V90Z" fill="#FF5223"/>
</g>
<g id="horizontal-bar">
<path id="Vector_11" d="M226 150H23C20.7909 150 19 151.791 19 154V237C19 239.209 20.7909 241 23 241H226C228.209 241 230 239.209 230 237V154C230 151.791 228.209 150 226 150Z" fill="#4767F6"/>
<path id="Vector_12" d="M206 168H44C40.6863 168 38 170.686 38 174C38 177.314 40.6863 180 44 180H206C209.314 180 212 177.314 212 174C212 170.686 209.314 168 206 168Z" fill="white"/>
<path id="Vector_13" d="M123 169H44C41.2386 169 39 171.239 39 174C39 176.761 41.2386 179 44 179H123C125.761 179 128 176.761 128 174C128 171.239 125.761 169 123 169Z" fill="#F0027F"/>
<path id="Vector_14" d="M206 189H44C40.6863 189 38 191.686 38 195C38 198.314 40.6863 201 44 201H206C209.314 201 212 198.314 212 195C212 191.686 209.314 189 206 189Z" fill="white"/>
<path id="Vector_15" d="M206 210H44C40.6863 210 38 212.686 38 216C38 219.314 40.6863 222 44 222H206C209.314 222 212 219.314 212 216C212 212.686 209.314 210 206 210Z" fill="white"/>
<path id="Vector_16" d="M148 190H44C41.2386 190 39 192.239 39 195C39 197.761 41.2386 200 44 200H148C150.761 200 153 197.761 153 195C153 192.239 150.761 190 148 190Z" fill="#F0027F"/>
<path id="Vector_17" d="M79 211H44C41.2386 211 39 213.239 39 216C39 218.761 41.2386 221 44 221H79C81.7614 221 84 218.761 84 216C84 213.239 81.7614 211 79 211Z" fill="#F0027F"/>
</g>
<g id="symbol-box">
<path id="Vector_18" d="M339 45H249C246.791 45 245 46.7909 245 49V125C245 127.209 246.791 129 249 129H339C341.209 129 343 127.209 343 125V49C343 46.7909 341.209 45 339 45Z" fill="#F1F2F6"/>
<path id="Vector_19" d="M271 62H259C256.791 62 255 63.7909 255 66V78C255 80.2091 256.791 82 259 82H271C273.209 82 275 80.2091 275 78V66C275 63.7909 273.209 62 271 62Z" fill="white"/>
<path id="Vector_20" d="M272.144 72.0013L265 64.8572L257.856 72.0013L265 79.1453L272.144 72.0013Z" fill="#FF5223"/>
<path id="Vector_21" d="M271 95H259C256.791 95 255 96.7909 255 99V111C255 113.209 256.791 115 259 115H271C273.209 115 275 113.209 275 111V99C275 96.7909 273.209 95 271 95Z" fill="white"/>
<path id="Vector_22" d="M265 99C268.314 99 271 101.686 271 105C271 108.314 268.314 111 265 111C261.686 111 259 108.314 259 105C259 101.686 261.686 99 265 99Z" fill="#F0027F"/>
<path id="Vector_23" d="M329 64H279V70H329V64Z" fill="white"/>
<path id="Vector_24" d="M329 97H279V103H329V97Z" fill="white"/>
<path id="Vector_25" d="M307 75H279V81H307V75Z" fill="white"/>
<path id="Vector_26" d="M307 108H279V114H307V108Z" fill="white"/>
</g>
<g id="pie-box">
<path id="Vector_27" d="M339 150H249C246.791 150 245 151.791 245 154V234C245 236.209 246.791 238 249 238H339C341.209 238 343 236.209 343 234V154C343 151.791 341.209 150 339 150Z" fill="#F1F2F6"/>
<path id="Vector_28" d="M294.469 215.388C304.919 215.388 313.391 206.916 313.391 196.466C313.391 186.016 304.919 177.544 294.469 177.544C284.019 177.544 275.547 186.016 275.547 196.466C275.547 206.916 284.019 215.388 294.469 215.388Z" stroke="#FF5223"/>
<path id="Vector_29" d="M294.467 222.5C308.845 222.5 320.501 210.844 320.501 196.466C320.501 182.088 308.845 170.432 294.467 170.432C280.089 170.432 268.433 182.088 268.433 196.466C268.433 210.844 280.089 222.5 294.467 222.5Z" stroke="#FF5223"/>
<path id="Vector_30" d="M316.954 197.07C316.954 199.944 316.388 202.79 315.288 205.445C314.188 208.1 312.576 210.512 310.544 212.544C308.512 214.576 306.1 216.188 303.445 217.288C300.79 218.388 297.944 218.954 295.07 218.954" stroke="#D1D5E6" stroke-width="5"/>
<path id="Vector_31" d="M272.159 195.667C272.159 192.793 272.725 189.948 273.825 187.292C274.925 184.637 276.537 182.225 278.569 180.193C280.601 178.161 283.013 176.549 285.668 175.449C288.324 174.349 291.169 173.783 294.043 173.783" stroke="#4767F6" stroke-width="5"/>
<path id="Vector_32" d="M293.863 218.954C290.989 218.954 288.144 218.388 285.489 217.288C282.834 216.188 280.421 214.576 278.389 212.544C276.357 210.512 274.745 208.1 273.645 205.445C272.546 202.79 271.98 199.944 271.98 197.07" stroke="#D1D5E6" stroke-width="5"/>
<path id="Vector_33" d="M295.07 174.035C297.944 174.035 300.79 174.601 303.445 175.701C306.1 176.801 308.512 178.413 310.544 180.445C312.576 182.477 314.188 184.889 315.288 187.544C316.388 190.199 316.954 193.045 316.954 195.919" stroke="#D1D5E6" stroke-width="5"/>
<path id="Vector_34" d="M275 158H255V161H275V158Z" fill="#D1D5E6"/>
<path id="Vector_35" d="M267 163H255V166H267V163Z" fill="#D1D5E6"/>
</g>
</g>
<defs>
<clipPath id="clip0_0_1">
<rect width="361" height="271" fill="white"/>
</clipPath>
</defs>
</svg>

    </div>
  )
}

export default Acclerate