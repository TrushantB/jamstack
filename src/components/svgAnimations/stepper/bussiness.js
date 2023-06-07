import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Bussiness = () => {
    useEffect(() => {
        const tl = gsap.timeline();
    
        // gsap.set("#truck-card", { y:50, opacity: 0 });
        // gsap.set("#credit-card", { y: 30, opacity: 0 });
        // gsap.set("#mail", { y: -30, opacity: 0 });
        // gsap.set("#Next", { opacity: 0, y: 50 });
        // gsap.set("#Prismic", { y:-50, opacity: 0 });
    
        // tl.to("#Nuxt", { opacity: 1, x: 0, duration: 0.2 })
        //   .to("#Gatsby", { y: 0, opacity: 1, duration: 0.2 })
        //   .to("#Strapi", { y: 0, opacity: 1, duration: 0.2 })
        //   .to("#Next", { y:0, opacity: 1, duration: 0.2 })
        //   .to("#Prismic", { y:0, opacity: 1, duration: 0.2 });
    
          
    
        // ScrollTrigger.create({
        //   trigger: ".technology",
        //   start: "25% 60%", 
        //   end: "80% 70%", 
        //   animation: tl,
        //   toggleActions: "restart none none reverse",
        //   markers: false,
        //   stagger: 0.2, 
        // });
      }, []);





  return (
    <div>
<svg width="100%" height="100%" viewBox="0 0 469 566" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="bussiness" clip-path="url(#clip0_0_1)" filter="url(#filter0_dd_0_1)">
<g id="truck-card">
<g id="Group 321">
<g id="Group 325">
<g id="Group" filter="url(#filter1_d_0_1)">
<path id="Vector" d="M216.734 186H56.7344C51.2115 186 46.7344 190.477 46.7344 196V398C46.7344 403.523 51.2115 408 56.7344 408H216.734C222.257 408 226.734 403.523 226.734 398V196C226.734 190.477 222.257 186 216.734 186Z" fill="white"/>
</g>
<g id="Group 320">
<path id="Vector_2" d="M203 247H71C70.4477 247 70 247.448 70 248V254C70 254.552 70.4477 255 71 255H203C203.552 255 204 254.552 204 254V248C204 247.448 203.552 247 203 247Z" fill="#D1D5E6"/>
<path id="Vector_3" d="M203 312H71C70.4477 312 70 312.448 70 313V319C70 319.552 70.4477 320 71 320H203C203.552 320 204 319.552 204 319V313C204 312.448 203.552 312 203 312Z" fill="#F1F2F6"/>
<path id="Vector_4" d="M137 269H71C70.4477 269 70 269.448 70 270V276C70 276.552 70.4477 277 71 277H137C137.552 277 138 276.552 138 276V270C138 269.448 137.552 269 137 269Z" fill="#D1D5E6"/>
<path id="Vector_5" d="M137 332H71C70.4477 332 70 332.448 70 333V339C70 339.552 70.4477 340 71 340H137C137.552 340 138 339.552 138 339V333C138 332.448 137.552 332 137 332Z" fill="#F1F2F6"/>
<path id="Vector_6" d="M180 291H71C70.4477 291 70 291.448 70 292V298C70 298.552 70.4477 299 71 299H180C180.552 299 181 298.552 181 298V292C181 291.448 180.552 291 180 291Z" fill="#D1D5E6"/>
<path id="Vector_7" d="M180 353H71C70.4477 353 70 353.448 70 354V360C70 360.552 70.4477 361 71 361H180C180.552 361 181 360.552 181 360V354C181 353.448 180.552 353 180 353Z" fill="#F1F2F6"/>
</g>
</g>
</g>
<g id="truck">
<path id="Vector_8" d="M46.8756 143L89.75 185.874L46.8756 228.748L4.00126 185.874L46.8756 143Z" fill="#FF5223"/>
<g id="Clip path group">
<mask id="mask0_0_1"  maskUnits="userSpaceOnUse" x="24" y="174" width="46" height="25">
<g id="clip0_1097_85">
<path id="Vector_9" d="M70 174H24V199H70V174Z" fill="white"/>
</g>
</mask>
<g mask="url(#mask0_0_1)">
<g id="Group_2">
<path id="Vector_10" d="M23.9992 181.968C24.3005 181.872 24.6017 181.7 24.9041 181.694C26.4163 181.665 27.9285 181.679 29.4407 181.682C30.0191 181.683 30.324 181.941 30.3168 182.406C30.3096 182.852 30.0083 183.118 29.4623 183.12C27.9045 183.127 26.3479 183.138 24.7913 183.107C24.5249 183.102 24.2633 182.893 23.998 182.778C23.998 182.508 23.998 182.237 23.998 181.967L23.9992 181.968Z" fill="white"/>
<path id="Vector_11" d="M57.1427 175.469H33.38V177.69C33.5588 177.69 33.7208 177.69 33.8816 177.69C35.0818 177.69 36.2819 177.685 37.4808 177.693C37.9957 177.697 38.2981 177.964 38.3101 178.386C38.3233 178.826 38.0101 179.128 37.4808 179.129C34.6317 179.137 31.7826 179.137 28.9335 179.129C28.4006 179.129 28.0838 178.835 28.0898 178.398C28.097 177.963 28.4102 177.698 28.9539 177.692C29.764 177.684 30.5741 177.69 31.3841 177.69C31.5462 177.69 31.707 177.69 31.9146 177.69C31.9146 176.921 31.9122 176.205 31.9146 175.487C31.9218 174.514 32.4127 174.004 33.3776 174.002C41.3117 173.999 49.2458 173.999 57.1811 174.002C58.1184 174.002 58.626 174.515 58.632 175.458C58.6428 177.066 58.6344 178.674 58.6344 180.36C58.8096 180.36 58.9669 180.36 59.1229 180.36C60.6531 180.36 62.1832 180.371 63.7122 180.355C64.5967 180.347 65.2196 180.716 65.6468 181.494C66.8686 183.716 68.1047 185.931 69.3432 188.144C69.7861 188.935 70.0093 189.773 69.9973 190.684C69.9817 191.901 69.9973 193.119 69.9925 194.336C69.9901 195.267 69.5017 195.806 68.5812 195.743C67.8095 195.691 67.4074 195.86 67.1062 196.676C66.5505 198.183 64.9243 199.093 63.3774 198.99C61.7032 198.88 60.3266 197.827 59.8154 196.264C59.7686 196.122 59.7289 195.977 59.6653 195.764C59.5285 195.764 59.3701 195.764 59.2117 195.764C55.1768 195.762 51.142 195.765 47.1083 195.752C46.7747 195.752 46.6223 195.821 46.5203 196.17C46.0246 197.855 44.504 198.98 42.7638 198.995C41.0572 199.011 39.4971 197.865 38.9942 196.185C38.8934 195.849 38.765 195.746 38.4157 195.749C36.5711 195.768 34.7265 195.76 32.8807 195.758C32.1474 195.758 31.9158 195.523 31.9146 194.786C31.9134 193.433 31.9146 192.08 31.9146 190.728C31.9146 190.567 31.9146 190.407 31.9146 190.195C31.7046 190.195 31.5426 190.195 31.3817 190.195C29.7616 190.195 28.1426 190.198 26.5224 190.195C25.9487 190.195 25.6223 189.931 25.6211 189.484C25.6211 189.042 25.9559 188.756 26.5176 188.754C29.4423 188.75 32.3671 188.752 35.2906 188.753C35.3806 188.753 35.4718 188.756 35.5594 188.771C35.9639 188.845 36.2075 189.142 36.1859 189.524C36.1643 189.908 35.8955 190.178 35.4754 190.188C34.7889 190.204 34.1013 190.192 33.3848 190.192V194.314C33.8852 194.314 34.3749 194.314 34.8657 194.314C36.0659 194.314 37.266 194.308 38.4649 194.319C38.7374 194.322 38.8766 194.274 38.9642 193.966C39.4587 192.225 40.9912 191.077 42.7614 191.076C44.5112 191.076 46.0234 192.212 46.5407 193.932C46.6091 194.162 46.6499 194.324 46.9643 194.323C50.2935 194.308 53.6239 194.313 56.953 194.312C56.9974 194.312 57.0418 194.3 57.1391 194.287V175.469H57.1427ZM68.5571 194.295C68.5571 193.07 68.5487 191.871 68.5607 190.672C68.5679 190.022 68.4107 189.427 68.0963 188.864C66.8602 186.649 65.6252 184.433 64.3999 182.212C64.2331 181.91 64.0242 181.793 63.681 181.797C62.1364 181.811 60.5906 181.803 59.0461 181.804C58.9297 181.804 58.8132 181.817 58.6884 181.826V194.305C59.2885 194.337 59.6949 194.087 59.9078 193.556C60.5054 192.064 61.9504 191.084 63.5574 191.079C65.1596 191.074 66.6105 192.051 67.2154 193.541C67.4362 194.086 67.8835 194.337 68.5571 194.295ZM40.2808 195.019C40.2856 196.448 41.3669 197.551 42.7674 197.554C44.1464 197.558 45.2517 196.422 45.2469 195.006C45.2421 193.629 44.1308 192.522 42.7518 192.524C41.3693 192.524 40.276 193.629 40.2808 195.02V195.019ZM66.0453 195.023C66.0417 193.628 64.9567 192.53 63.5742 192.522C62.176 192.515 61.0767 193.629 61.0803 195.046C61.0839 196.453 62.2072 197.571 63.5982 197.553C64.9687 197.535 66.0489 196.419 66.0453 195.023Z" fill="white"/>
<path id="Vector_12" d="M31.9163 185.487C31.9163 184.246 31.9163 183.062 31.9163 181.877C31.9163 181.727 31.9127 181.577 31.9175 181.426C31.9343 180.961 32.208 180.651 32.61 180.636C33.0216 180.622 33.3481 180.949 33.3517 181.426C33.3625 182.598 33.3553 183.77 33.3553 184.943C33.3553 185.105 33.3553 185.268 33.3553 185.486C33.5473 185.486 33.7069 185.486 33.8665 185.486C36.7601 185.486 39.6548 185.482 42.5483 185.493C42.774 185.493 43.0728 185.536 43.2048 185.68C43.3596 185.85 43.4736 186.182 43.4148 186.391C43.356 186.6 43.0812 186.771 42.8676 186.905C42.7584 186.973 42.5747 186.929 42.4247 186.929C38.3911 186.929 34.3574 186.929 30.3237 186.929C30.2037 186.929 30.0825 186.935 29.9637 186.922C29.5605 186.875 29.2988 186.59 29.2988 186.206C29.2988 185.803 29.5761 185.504 30.0069 185.492C30.6202 185.475 31.2334 185.488 31.9139 185.488L31.9163 185.487Z" fill="white"/>
</g>
</g>
</g>
</g>
</g>
<g id="credit-card">
<g id="Group 324">
<g id="Group 323">
<g id="Group_3" filter="url(#filter2_d_0_1)">
<path id="Vector_13" d="M430.734 38H270.734C265.211 38 260.734 42.4772 260.734 48V250C260.734 255.523 265.211 260 270.734 260H430.734C436.257 260 440.734 255.523 440.734 250V48C440.734 42.4772 436.257 38 430.734 38Z" fill="white"/>
</g>
</g>
<g id="Group 322">
<path id="Vector_14" d="M417 84H285C282.239 84 280 86.2386 280 89V137C280 139.761 282.239 142 285 142H417C419.761 142 422 139.761 422 137V89C422 86.2386 419.761 84 417 84Z" fill="#F1F2F6"/>
<path id="Vector_15" d="M408 94H289C288.448 94 288 94.4477 288 95V101C288 101.552 288.448 102 289 102H408C408.552 102 409 101.552 409 101V95C409 94.4477 408.552 94 408 94Z" fill="#D1D5E6"/>
<path id="Vector_16" d="M348 109H289C288.448 109 288 109.448 288 110V116C288 116.552 288.448 117 289 117H348C348.552 117 349 116.552 349 116V110C349 109.448 348.552 109 348 109Z" fill="#D1D5E6"/>
<path id="Vector_17" d="M386 149C389.866 149 393 145.642 393 141.5C393 137.358 389.866 134 386 134C382.134 134 379 137.358 379 141.5C379 145.642 382.134 149 386 149Z" fill="#4767F6"/>
<path id="Vector_18" d="M417 162H285C282.239 162 280 164.239 280 167V215C280 217.761 282.239 220 285 220H417C419.761 220 422 217.761 422 215V167C422 164.239 419.761 162 417 162Z" fill="#F1F2F6"/>
<path id="Vector_19" d="M410 170H291C290.448 170 290 170.448 290 171V177C290 177.552 290.448 178 291 178H410C410.552 178 411 177.552 411 177V171C411 170.448 410.552 170 410 170Z" fill="#D1D5E6"/>
<path id="Vector_20" d="M350 185H291C290.448 185 290 185.448 290 186V192C290 192.552 290.448 193 291 193H350C350.552 193 351 192.552 351 192V186C351 185.448 350.552 185 350 185Z" fill="#D1D5E6"/>
<path id="Vector_21" d="M296 221L283 208L270 221L283 234L296 221Z" fill="#4767F6"/>
</g>
</g>
<g id="card">
<path id="Vector_22" d="M258.5 0L276.134 13.0531L294.165 25.5664L287.032 46.1469L280.542 66.9336L258.5 66.6L236.458 66.9336L229.968 46.1469L222.835 25.5664L240.866 13.0531L258.5 0Z" fill="#FF5223"/>
<g id="Clip path group_2">
<mask id="mask1_0_1" maskUnits="userSpaceOnUse" x="239" y="21" width="39" height="32">
<g id="clip1_1097_85">
<path id="Vector_23" d="M278 21H239V53H278V21Z" fill="white"/>
</g>
</mask>
<g mask="url(#mask1_0_1)">
<g id="Group_4">
<path id="Vector_24" d="M273.323 41.1029C272.209 41.7875 271.171 42.3891 270.174 43.055C269.632 43.416 269.198 43.4054 268.656 43.0491C267.437 42.2466 266.16 41.5375 264.941 40.7349C262.26 38.9709 260.891 36.4206 260.844 33.1578C260.805 30.4849 260.833 27.812 260.837 25.1379C260.837 24.5386 260.971 24.347 261.522 24.1204C263.999 23.1017 266.472 22.0748 268.958 21.0818C269.23 20.9732 269.614 20.9732 269.886 21.0818C272.372 22.0737 274.844 23.104 277.324 24.1157C277.733 24.2828 277.999 24.5398 277.997 25.0176C277.985 27.9674 278.038 30.9206 277.938 33.8681C277.858 36.2045 276.834 38.1566 275.165 39.7384C274.959 39.9335 274.869 40.1192 274.87 40.4078C274.879 43.548 274.877 46.6893 274.876 49.8295C274.876 51.7828 273.695 53.0001 271.789 53.0001C261.897 53.0024 252.004 53.0024 242.111 53.0001C240.182 53.0001 239.004 51.7886 239.003 49.8026C238.999 42.8482 238.999 35.8949 239.002 28.9417C239.002 26.9417 240.162 25.7489 242.099 25.7489C247.472 25.7489 252.844 25.7489 258.217 25.7489C258.373 25.7489 258.533 25.7396 258.685 25.7723C259.043 25.8494 259.287 26.1998 259.271 26.5795C259.255 26.958 258.985 27.2758 258.615 27.3272C258.462 27.3482 258.303 27.3389 258.147 27.3389C252.817 27.3389 247.487 27.3389 242.157 27.3389C241.034 27.3389 240.574 27.8085 240.573 28.9522C240.573 29.4732 240.573 29.9942 240.573 30.5597H241.128C246.785 30.5597 252.442 30.5597 258.099 30.5597C258.255 30.5597 258.413 30.5526 258.568 30.5678C258.967 30.6052 259.253 30.9125 259.271 31.3108C259.289 31.7255 259.013 32.0795 258.606 32.1403C258.453 32.1636 258.295 32.1531 258.138 32.1531C252.467 32.1531 246.795 32.1531 241.124 32.1531H240.573C240.573 32.347 240.573 32.5036 240.573 32.659C240.573 38.3704 240.573 44.0818 240.573 49.7933C240.573 50.9206 241.028 51.3868 242.127 51.3868C252.005 51.3868 261.884 51.3868 271.762 51.3868C272.847 51.3868 273.323 50.8973 273.324 49.7875C273.325 47.0702 273.324 44.354 273.324 41.6368V41.1017L273.323 41.1029ZM276.422 29.8178H276.427C276.427 28.4884 276.421 27.159 276.433 25.8307C276.435 25.5748 276.361 25.4405 276.122 25.3435C273.971 24.4697 271.827 23.5807 269.676 22.7068C269.536 22.6496 269.337 22.6414 269.198 22.6975C267.021 23.5807 264.848 24.4744 262.681 25.3844C262.557 25.437 262.417 25.6484 262.417 25.7863C262.404 28.3272 262.367 30.8704 262.423 33.4101C262.478 35.9206 263.583 37.8926 265.62 39.2699C266.782 40.055 267.994 40.7606 269.195 41.4837C269.308 41.5526 269.527 41.5561 269.639 41.4884C270.827 40.7734 272.029 40.076 273.179 39.2991C275.242 37.9043 276.34 35.9136 276.417 33.3657C276.452 32.1835 276.422 31.0001 276.422 29.8167V29.8178Z" fill="white"/>
<path id="Vector_25" d="M247.563 48.188C246.555 48.188 245.546 48.1997 244.538 48.1834C243.86 48.1728 243.478 47.5303 243.799 46.9766C243.991 46.6448 244.297 46.5841 244.643 46.5852C246.518 46.5899 248.394 46.5876 250.269 46.5876C250.383 46.5876 250.497 46.5852 250.61 46.5876C251.145 46.6039 251.493 46.924 251.485 47.3913C251.477 47.8574 251.125 48.1798 250.591 48.1845C249.738 48.1927 248.887 48.1869 248.034 48.1869C247.878 48.1869 247.721 48.1869 247.565 48.1869L247.563 48.188Z" fill="white"/>
<path id="Vector_26" d="M268.36 32.5199C269.072 31.7839 269.731 31.1017 270.393 30.4206C270.915 29.8832 271.43 29.3388 271.963 28.812C272.307 28.4708 272.762 28.4708 273.073 28.7757C273.388 29.0865 273.414 29.5678 273.081 29.9136C271.703 31.3482 270.317 32.7734 268.92 34.1893C268.579 34.5351 268.167 34.5211 267.818 34.1729C267.124 33.4813 266.441 32.7792 265.768 32.0666C265.429 31.708 265.436 31.2559 265.748 30.9323C266.061 30.6075 266.503 30.5923 266.852 30.9393C267.353 31.4358 267.828 31.9591 268.361 32.5211L268.36 32.5199Z" fill="white"/>
</g>
</g>
</g>
</g>
</g>
<g id="mail-card">
<g id="Group 326">
<g id="Group_5" filter="url(#filter3_d_0_1)">
<path id="Vector_27" d="M452.734 331H292.734C287.211 331 282.734 335.477 282.734 341V544C282.734 549.523 287.211 554 292.734 554H452.734C458.257 554 462.734 549.523 462.734 544V341C462.734 335.477 458.257 331 452.734 331Z" fill="white"/>
</g>
<path id="Vector_28" d="M337 390H310C307.239 390 305 392.239 305 395V420C305 422.761 307.239 425 310 425H337C339.761 425 342 422.761 342 420V395C342 392.239 339.761 390 337 390Z" fill="#D1D5E6"/>
<path id="Vector_29" d="M386 390H359C356.239 390 354 392.239 354 395V420C354 422.761 356.239 425 359 425H386C388.761 425 391 422.761 391 420V395C391 392.239 388.761 390 386 390Z" fill="#D1D5E6"/>
<path id="Vector_30" d="M435 390H408C405.239 390 403 392.239 403 395V420C403 422.761 405.239 425 408 425H435C437.761 425 440 422.761 440 420V395C440 392.239 437.761 390 435 390Z" fill="#D1D5E6"/>
<path id="Vector_31" d="M337 438H310C307.239 438 305 440.239 305 443V468C305 470.761 307.239 473 310 473H337C339.761 473 342 470.761 342 468V443C342 440.239 339.761 438 337 438Z" fill="#F1F2F6"/>
<path id="Vector_32" d="M386 438H359C356.239 438 354 440.239 354 443V468C354 470.761 356.239 473 359 473H386C388.761 473 391 470.761 391 468V443C391 440.239 388.761 438 386 438Z" fill="#F1F2F6"/>
<path id="Vector_33" d="M435 438H408C405.239 438 403 440.239 403 443V468C403 470.761 405.239 473 408 473H435C437.761 473 440 470.761 440 468V443C440 440.239 437.761 438 435 438Z" fill="#F1F2F6"/>
<path id="Vector_34" d="M337 485H310C307.239 485 305 487.239 305 490V515C305 517.761 307.239 520 310 520H337C339.761 520 342 517.761 342 515V490C342 487.239 339.761 485 337 485Z" fill="#F1F2F6"/>
<path id="Vector_35" d="M386 485H359C356.239 485 354 487.239 354 490V515C354 517.761 356.239 520 359 520H386C388.761 520 391 517.761 391 515V490C391 487.239 388.761 485 386 485Z" fill="#F1F2F6"/>
<path id="Vector_36" d="M435 485H408C405.239 485 403 487.239 403 490V515C403 517.761 405.239 520 408 520H435C437.761 520 440 517.761 440 515V490C440 487.239 437.761 485 435 485Z" fill="#F1F2F6"/>
</g>
<g id="mail">
<path id="Vector_37" d="M288 375C307.33 375 323 359.106 323 339.5C323 319.894 307.33 304 288 304C268.67 304 253 319.894 253 339.5C253 359.106 268.67 375 288 375Z" fill="#FF5223"/>
<path id="Vector_38" d="M273.984 349.257C277.6 346.127 281.217 342.997 284.871 339.834C281.214 336.669 277.599 333.539 273.983 330.411C273.929 330.423 273.876 330.438 273.822 330.45C273.822 330.905 273.825 331.36 273.822 331.815C273.821 332.056 273.829 332.299 273.799 332.537C273.733 333.069 273.338 333.409 272.827 333.402C272.341 333.394 271.895 333.051 271.888 332.555C271.879 331.691 271.838 330.803 272.014 329.968C272.387 328.187 273.985 327.008 275.873 327.006C281.506 326.998 287.14 327.002 292.774 327.002C297.182 327.002 301.591 326.997 305.999 327.004C307.966 327.008 309.517 328.26 309.915 330.152C309.984 330.479 309.996 330.822 309.996 331.157C310.001 336.942 310.003 342.727 309.996 348.511C309.993 350.667 308.712 352.257 306.707 352.613C306.427 352.663 306.137 352.663 305.851 352.663C295.905 352.666 285.959 352.667 276.012 352.663C273.515 352.663 271.866 350.984 271.863 348.456C271.863 348.071 271.854 347.685 271.865 347.299C271.883 346.68 272.27 346.27 272.829 346.265C273.391 346.258 273.79 346.649 273.813 347.276C273.836 347.914 273.818 348.553 273.818 349.191C273.873 349.212 273.929 349.234 273.984 349.254V349.257ZM275.51 329.004C275.493 329.035 275.476 329.066 275.458 329.097C275.565 329.186 275.673 329.273 275.779 329.363C280.555 333.488 285.33 337.614 290.107 341.737C290.729 342.275 291.157 342.268 291.791 341.721C296.578 337.586 301.366 333.448 306.152 329.31C306.238 329.234 306.312 329.143 306.443 329.003H275.51V329.004ZM295.496 341.129C295.359 341.244 295.235 341.34 295.117 341.443C294.335 342.127 293.566 342.827 292.769 343.492C291.641 344.434 290.165 344.412 289.054 343.456C288.315 342.82 287.588 342.171 286.855 341.528C286.703 341.395 286.548 341.267 286.38 341.124C282.718 344.297 279.095 347.436 275.369 350.663H306.504C302.778 347.436 299.148 344.291 295.496 341.128V341.129ZM307.989 330.323C304.273 333.539 300.649 336.676 297 339.835C300.674 343.015 304.289 346.142 307.989 349.343V330.323Z" fill="white"/>
<path id="Vector_39" d="M271.385 343.298C269.969 343.298 268.555 343.295 267.139 343.298C266.672 343.298 266.292 343.142 266.087 342.696C265.847 342.172 266.124 341.541 266.675 341.376C266.869 341.318 267.083 341.306 267.288 341.306C270.007 341.302 272.726 341.303 275.445 341.303C275.573 341.303 275.701 341.3 275.826 341.317C276.404 341.392 276.764 341.803 276.74 342.352C276.717 342.87 276.335 343.263 275.774 343.286C275.17 343.312 274.566 343.295 273.961 343.295C273.103 343.295 272.243 343.295 271.385 343.295V343.298Z" fill="white"/>
<path id="Vector_40" d="M272.909 336.371C273.8 336.371 274.69 336.367 275.581 336.372C276.303 336.377 276.74 336.757 276.741 337.362C276.741 337.969 276.311 338.358 275.587 338.361C273.758 338.368 271.929 338.368 270.1 338.361C269.384 338.358 268.932 337.96 268.93 337.367C268.927 336.777 269.388 336.376 270.095 336.371C271.033 336.364 271.971 336.37 272.91 336.37L272.909 336.371Z" fill="white"/>
</g>
</g>
</g>
<defs>
<filter id="filter0_dd_0_1" x="0" y="0" width="473" height="574" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape"/>
</filter>
<filter id="filter1_d_0_1" x="40.7344" y="186" width="192" height="234" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="6"/>
<feGaussianBlur stdDeviation="3"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
</filter>
<filter id="filter2_d_0_1" x="254.734" y="38" width="192" height="234" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="6"/>
<feGaussianBlur stdDeviation="3"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
</filter>
<filter id="filter3_d_0_1" x="276.734" y="331" width="192" height="235" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="6"/>
<feGaussianBlur stdDeviation="3"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
</filter>
<clipPath id="clip0_0_1">
<rect width="465" height="566" fill="white" transform="translate(4)"/>
</clipPath>
</defs>
</svg>






    </div>
  )
}

export default Bussiness