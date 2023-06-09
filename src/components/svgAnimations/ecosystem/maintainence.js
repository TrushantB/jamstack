import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Maintainence = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const maintainence = gsap.timeline();
    
    gsap.set("#background", { opacity: 0, y: 20 });
    gsap.set("#multi-box", {
      scale: 0,
      opacity: 0,
      transformOrigin: "center center",
    });
    gsap.set("#facebook", { y: -20, opacity: 0 });
    gsap.set("#instagram", { x: 20, opacity: 0 });
    gsap.set("#whatsapp", { x: -20, y: -20, opacity: 0 });
    gsap.set("#twitter", { x: 20, y: 20, opacity: 0 });
    gsap.set("#box-chart", { opacity: 0 });
    gsap.set("#cut-pie", { opacity: 0 });

    maintainence
      .to("#background", { opacity: 1, y: 0, duration: 0.3 })
      .to("#multi-box", { scale: 1, opacity: 1, duration: 0.3 })
      .to("#facebook", { y: 0, opacity: 1, duration: 0.2 })
      .to("#instagram", { x: 0, opacity: 1, duration: 0.2 })
      .to("#whatsapp", { x: 0, y: 0, opacity: 1, duration: 0.2 })
      .to("#twitter", { x: 0, y: 0, opacity: 1, duration: 0.2 })
      .to("#box-chart", { opacity: 1, duration: 0.3 })
      .to("#cut-pie", { opacity: 1, duration: 0.3 });

    ScrollTrigger.create({
      trigger: "#maintainence",
      start: "top 20%",
      end: "80% 70%",
      animation: maintainence,
      toggleActions: "restart none none reverse",
    });
  }, []);
  return (
    <div id="maintainence" className="w-10/12 mx-auto">
      <svg
        width=""
        height=""
        viewBox="0 0 478 393"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_0_1)">
          <g id="background" filter="url(#filter0_d_0_1)">
            <path
              id="Vector"
              d="M405.739 50.4438H49.4219C43.899 50.4438 39.4219 54.9209 39.4219 60.4438V359.417C39.4219 364.94 43.899 369.417 49.4219 369.417H405.739C411.262 369.417 415.739 364.94 415.739 359.417V60.4438C415.739 54.9209 411.262 50.4438 405.739 50.4438Z"
              fill="white"
            />
          </g>
          <g id="instagram">
            <path
              id="Vector_2"
              d="M435.407 275.578C412.076 275.578 393.164 256.666 393.164 233.335C393.164 210.003 412.076 191.08 435.407 191.08C458.739 191.08 477.662 209.991 477.662 233.323C477.662 256.654 458.751 275.578 435.407 275.578Z"
              fill="#FF5223"
            />
            <path
              id="Vector_3"
              d="M455.606 224.793C455.51 222.642 455.164 221.185 454.674 219.907C454.16 218.58 453.467 217.457 452.344 216.334C451.221 215.212 450.098 214.531 448.772 214.005C447.494 213.503 446.024 213.169 443.886 213.073C441.736 212.978 441.055 212.954 435.583 212.954C430.112 212.954 429.419 212.978 427.28 213.073C425.13 213.169 423.672 213.515 422.394 214.005C421.068 214.519 419.945 215.212 418.822 216.334C417.699 217.457 417.018 218.58 416.504 219.907C416.003 221.185 415.668 222.654 415.573 224.793C415.477 226.943 415.453 227.624 415.453 233.096C415.453 238.567 415.477 239.26 415.573 241.398C415.668 243.549 416.015 245.006 416.504 246.285C417.018 247.611 417.711 248.734 418.822 249.857C419.945 250.98 421.068 251.661 422.394 252.186C423.672 252.688 425.142 253.022 427.28 253.118C429.431 253.214 430.112 253.237 435.583 253.237C441.055 253.237 441.736 253.214 443.886 253.118C446.036 253.022 447.494 252.676 448.772 252.186C450.098 251.672 451.221 250.98 452.344 249.857C453.467 248.734 454.148 247.611 454.674 246.285C455.175 245.006 455.51 243.537 455.606 241.398C455.701 239.248 455.725 238.567 455.725 233.096C455.725 227.624 455.701 226.943 455.606 224.793ZM451.974 241.243C451.878 243.202 451.556 244.278 451.281 244.982C450.911 245.926 450.48 246.595 449.776 247.3C449.071 248.005 448.402 248.447 447.458 248.805C446.753 249.08 445.678 249.415 443.719 249.498C441.592 249.594 440.959 249.618 435.571 249.618C430.183 249.618 429.55 249.594 427.424 249.498C425.464 249.403 424.389 249.08 423.684 248.805C422.741 248.435 422.072 248.005 421.367 247.3C420.662 246.595 420.22 245.926 419.861 244.982C419.587 244.278 419.252 243.202 419.168 241.243C419.073 239.117 419.049 238.483 419.049 233.096C419.049 227.708 419.073 227.074 419.168 224.948C419.252 222.989 419.587 221.914 419.861 221.209C420.232 220.265 420.662 219.596 421.367 218.891C422.072 218.186 422.741 217.744 423.684 217.386C424.389 217.111 425.464 216.777 427.424 216.693C429.55 216.597 430.183 216.573 435.571 216.573L443.719 216.693C445.678 216.788 446.753 217.111 447.458 217.386C448.402 217.756 449.071 218.186 449.776 218.891C450.48 219.596 450.922 220.265 451.281 221.209C451.556 221.914 451.89 222.989 451.974 224.948C452.069 227.074 452.093 227.708 452.093 233.096C452.093 238.483 452.069 239.117 451.974 241.243Z"
              fill="white"
            />
            <path
              id="Vector_4"
              d="M435.572 222.75C429.862 222.75 425.227 227.385 425.227 233.096C425.227 238.806 429.862 243.441 435.572 243.441C441.283 243.441 445.918 238.806 445.918 233.096C445.918 227.385 441.283 222.75 435.572 222.75ZM435.572 239.81C431.857 239.81 428.858 236.799 428.858 233.096C428.858 229.392 431.869 226.382 435.572 226.382C439.276 226.382 442.286 229.392 442.286 233.096C442.286 236.799 439.276 239.81 435.572 239.81Z"
              fill="white"
            />
            <path
              id="Vector_5"
              d="M446.323 219.93C444.985 219.93 443.91 221.017 443.91 222.343C443.91 223.669 444.997 224.757 446.323 224.757C447.649 224.757 448.737 223.669 448.737 222.343C448.737 221.017 447.649 219.93 446.323 219.93Z"
              fill="white"
            />
            <path
              id="Vector_6"
              d="M342.322 233.715L342.305 234.909L398.364 235.702L398.381 234.507L342.322 233.715Z"
              fill="#FF5223"
            />
            <path
              id="Vector_7"
              d="M344.651 231.172C346.383 232.474 346.73 234.935 345.427 236.656C344.125 238.388 341.664 238.734 339.944 237.432C338.212 236.13 337.865 233.669 339.167 231.949C340.469 230.216 342.93 229.87 344.651 231.172Z"
              fill="#FF5223"
            />
          </g>
          <g id="twitter">
            <path
              id="Vector_8"
              d="M297.856 393C274.525 393 255.613 374.088 255.613 350.756C255.613 327.425 274.525 308.501 297.856 308.501C321.188 308.501 340.111 327.413 340.111 350.745C340.111 374.076 321.2 393 297.856 393Z"
              fill="#4767F6"
            />
            <path
              id="Vector_9"
              d="M278.898 365.69C282.375 367.912 286.496 369.214 290.929 369.214C305.503 369.214 313.735 356.909 313.245 345.87C314.774 344.759 316.112 343.385 317.163 341.808C315.754 342.43 314.236 342.86 312.659 343.039C314.284 342.071 315.527 340.53 316.112 338.702C314.595 339.598 312.91 340.255 311.13 340.602C309.697 339.073 307.654 338.129 305.396 338.129C300.331 338.129 296.603 342.86 297.75 347.77C291.227 347.447 285.445 344.317 281.574 339.563C279.52 343.087 280.511 347.71 284 350.04C282.709 350.004 281.503 349.645 280.44 349.06C280.356 352.692 282.96 356.097 286.735 356.861C285.636 357.16 284.418 357.231 283.187 356.993C284.179 360.111 287.082 362.38 290.522 362.44C287.225 365.033 283.068 366.179 278.898 365.69Z"
              fill="white"
            />
            <path
              id="Vector_10"
              d="M283.4 277.741L282.254 278.079L293.408 315.929L294.554 315.592L283.4 277.741Z"
              fill="#4767F6"
            />
            <path
              id="Vector_11"
              d="M286.739 277.094C286.739 279.257 284.983 281.013 282.821 281.013C280.658 281.013 278.902 279.257 278.902 277.094C278.902 274.932 280.658 273.176 282.821 273.176C284.983 273.176 286.739 274.932 286.739 277.094Z"
              fill="#4767F6"
            />
          </g>
          <g id="facebook">
            <path
              id="Vector_12"
              d="M193.708 91.6122C169.803 91.6122 150.426 72.2349 150.426 48.3298C150.426 24.4247 169.803 5.04736 193.708 5.04736C217.613 5.04736 236.991 24.4247 236.991 48.3298C236.991 72.2349 217.613 91.6122 193.708 91.6122Z"
              fill="#4767F6"
            />
            <path
              id="Vector_13"
              d="M188.345 67.8387H197.186V45.7017H203.35L204.007 38.2829H197.186V34.0658C197.186 32.3216 197.532 31.6287 199.229 31.6287H204.019V23.9351H197.903C191.32 23.9351 188.357 26.8381 188.357 32.3813V38.2948H183.758V45.7973H188.357V67.8507L188.345 67.8387Z"
              fill="white"
            />
            <path
              id="Vector_14"
              d="M195.437 83.9663H194.242V134.668H195.437V83.9663Z"
              fill="#4767F6"
            />
            <path
              id="Vector_15"
              d="M190.838 135.623C191.376 133.533 193.514 132.266 195.605 132.804C197.696 133.341 198.962 135.48 198.425 137.57C197.887 139.661 195.748 140.927 193.658 140.39C191.567 139.852 190.301 137.714 190.838 135.623Z"
              fill="#4767F6"
            />
          </g>
          <g id="whatsapp">
            <path
              id="Vector_16"
              d="M92.4189 161.117C69.0872 161.117 50.1758 142.206 50.1758 118.874C50.1758 95.5425 69.0872 76.6191 92.4189 76.6191C115.751 76.6191 134.674 95.5306 134.674 118.862C134.674 142.194 115.762 161.117 92.4189 161.117Z"
              fill="#FF5223"
            />
            <path
              id="Vector_17"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M115.559 117.321C115.249 105.112 105.19 95.3154 92.8129 95.3154C80.4363 95.3154 70.6162 104.897 70.0786 116.903C70.0786 117.237 70.0547 117.56 70.0547 117.894C70.0547 122.171 71.2493 126.15 73.3161 129.554L70.7715 137.081C70.1264 138.98 71.9184 140.808 73.8298 140.199L81.8221 137.654C85.0835 139.446 88.8347 140.462 92.8129 140.462C105.381 140.462 115.571 130.355 115.571 117.883C115.571 117.691 115.571 117.5 115.571 117.309L115.559 117.321ZM92.8129 136.878C88.9303 136.878 85.3105 135.731 82.288 133.736L74.9408 136.077L77.3302 129.029C75.0364 125.899 73.6864 122.052 73.6864 117.894C73.6864 117.273 73.7223 116.664 73.782 116.055C74.7138 106.45 82.8973 98.9114 92.8129 98.9114C102.729 98.9114 111.115 106.629 111.88 116.413C111.927 116.903 111.939 117.393 111.939 117.894C111.939 128.372 103.35 136.878 92.8129 136.878Z"
              fill="white"
            />
            <path
              id="Vector_18"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M103.254 122.446C102.693 122.171 99.9568 120.821 99.4431 120.642C98.9294 120.451 98.5591 120.367 98.1887 120.917C97.8184 121.466 96.7432 122.721 96.4206 123.079C96.0861 123.45 95.7755 123.497 95.2021 123.223C94.6525 122.948 92.8486 122.374 90.7221 120.475C89.0735 119.017 87.9386 117.201 87.6279 116.652C87.3054 116.102 87.5921 115.804 87.8788 115.517C88.1297 115.266 88.4284 114.872 88.7151 114.549C88.7868 114.454 88.8584 114.37 88.9182 114.287C89.0496 114.083 89.1452 113.892 89.2646 113.629C89.4558 113.259 89.3602 112.937 89.2168 112.662C89.0735 112.387 87.9624 109.663 87.4965 108.552C87.0426 107.441 86.5647 107.632 86.2421 107.632C85.9196 107.632 85.5492 107.584 85.1789 107.584C84.8086 107.584 84.1993 107.728 83.6856 108.277C83.1719 108.827 81.7383 110.177 81.7383 112.901C81.7383 113.534 81.8578 114.179 82.025 114.788C82.5865 116.736 83.805 118.348 84.0201 118.623C84.2949 118.981 87.8788 124.764 93.5415 126.986C99.2161 129.196 99.2161 128.455 100.244 128.36C101.271 128.276 103.541 127.033 104.007 125.731C104.473 124.441 104.473 123.33 104.341 123.103C104.198 122.876 103.827 122.745 103.278 122.458L103.254 122.446Z"
              fill="white"
            />
            <path
              id="Vector_19"
              d="M111.137 140.835L110.234 141.617L136.073 171.456L136.976 170.674L111.137 140.835Z"
              fill="#FF5223"
            />
            <path
              id="Vector_20"
              d="M133.29 173.434C132.394 171.463 133.266 169.145 135.237 168.249C137.208 167.353 139.526 168.225 140.422 170.197C141.318 172.168 140.446 174.485 138.475 175.381C136.503 176.277 134.186 175.405 133.29 173.434Z"
              fill="#FF5223"
            />
          </g>
          <g id="box-chart">
            <g id="Group" filter="url(#filter1_d_0_1)">
              <path
                id="Vector_21"
                d="M449.944 3.85254H289.551C284.028 3.85254 279.551 8.32969 279.551 13.8525V125.265C279.551 130.787 284.028 135.265 289.551 135.265H449.944C455.467 135.265 459.944 130.787 459.944 125.265V13.8525C459.944 8.32969 455.467 3.85254 449.944 3.85254Z"
                fill="white"
              />
            </g>
            <path
              id="Vector_22"
              d="M310.118 83.2139H304.957V101.934H310.118V83.2139Z"
              fill="#F1F2F6"
            />
            <path
              id="Vector_23"
              d="M328.489 68.0654H323.328V101.934H328.489V68.0654Z"
              fill="#F1F2F6"
            />
            <path
              id="Vector_24"
              d="M319.903 45.8569H313.535V101.934H319.903V45.8569Z"
              fill="#D9DCE9"
            />
            <path
              id="Vector_25"
              d="M346.852 89.1152H341.691V101.922H346.852V89.1152Z"
              fill="#F1F2F6"
            />
            <path
              id="Vector_26"
              d="M337.665 89.1152H332.504V101.922H337.665V89.1152Z"
              fill="#D9DCE9"
            />
            <path
              id="Vector_27"
              d="M365.227 80.9438H360.066V101.922H365.227V80.9438Z"
              fill="#F1F2F6"
            />
            <path
              id="Vector_28"
              d="M356.044 62.7373H350.883V101.934H356.044V62.7373Z"
              fill="#D9DCE9"
            />
            <path
              id="Vector_29"
              d="M392.778 62.7373H387.617V101.934H392.778V62.7373Z"
              fill="#D9DCE9"
            />
            <path
              id="Vector_30"
              d="M374.415 42.894H369.254V101.934H374.415V42.894Z"
              fill="#D9DCE9"
            />
            <path
              id="Vector_31"
              d="M383.602 87.3115H378.441V101.934H383.602V87.3115Z"
              fill="#F1F2F6"
            />
            <path
              id="Vector_32"
              d="M429.524 91.1943H424.363V101.934H429.524V91.1943Z"
              fill="#D9DCE9"
            />
            <path
              id="Vector_33"
              d="M411.137 44.0054H405.988V101.922H411.137V44.0054Z"
              fill="#D9DCE9"
            />
            <path
              id="Vector_34"
              d="M420.329 55.856H415.18V101.934H420.329V55.856Z"
              fill="#F1F2F6"
            />
            <path
              id="Vector_35"
              d="M401.95 54.1836H396.801V101.934H401.95V54.1836Z"
              fill="#F1F2F6"
            />
            <path
              id="Vector_36"
              d="M438.696 62.7373H433.535V101.934H438.696V62.7373Z"
              fill="#F1F2F6"
            />
            <path
              id="Vector_37"
              d="M316.471 107.477H305.815C305.412 107.477 305.086 107.803 305.086 108.206V108.875C305.086 109.277 305.412 109.604 305.815 109.604H316.471C316.873 109.604 317.2 109.277 317.2 108.875V108.206C317.2 107.803 316.873 107.477 316.471 107.477Z"
              fill="#D1D5E6"
            />
            <path
              id="Vector_38"
              d="M351.584 107.477H340.928C340.525 107.477 340.199 107.803 340.199 108.206V108.875C340.199 109.277 340.525 109.604 340.928 109.604H351.584C351.987 109.604 352.313 109.277 352.313 108.875V108.206C352.313 107.803 351.987 107.477 351.584 107.477Z"
              fill="#D1D5E6"
            />
            <path
              id="Vector_39"
              d="M382.576 107.477H371.92C371.518 107.477 371.191 107.803 371.191 108.206V108.875C371.191 109.277 371.518 109.604 371.92 109.604H382.576C382.979 109.604 383.305 109.277 383.305 108.875V108.206C383.305 107.803 382.979 107.477 382.576 107.477Z"
              fill="#D1D5E6"
            />
            <path
              id="Vector_40"
              d="M414.494 107.477H403.838C403.436 107.477 403.109 107.803 403.109 108.206V108.875C403.109 109.277 403.436 109.604 403.838 109.604H414.494C414.897 109.604 415.223 109.277 415.223 108.875V108.206C415.223 107.803 414.897 107.477 414.494 107.477Z"
              fill="#D1D5E6"
            />
            <path
              id="Vector_41"
              d="M441.541 107.477H430.885C430.483 107.477 430.156 107.803 430.156 108.206V108.875C430.156 109.277 430.483 109.604 430.885 109.604H441.541C441.944 109.604 442.27 109.277 442.27 108.875V108.206C442.27 107.803 441.944 107.477 441.541 107.477Z"
              fill="#D1D5E6"
            />
            <path
              id="Vector_42"
              d="M445.311 101.934C445.311 102.101 412.135 102.245 371.206 102.245C330.277 102.245 297.102 102.101 297.102 101.934C297.102 101.767 330.277 101.624 371.206 101.624C412.135 101.624 445.311 101.767 445.311 101.934Z"
              fill="#4767F6"
            />
            <path
              id="Vector_43"
              d="M299.109 34.6031C300.672 34.6031 301.94 33.3355 301.94 31.7718C301.94 30.2081 300.672 28.9404 299.109 28.9404C297.545 28.9404 296.277 30.2081 296.277 31.7718C296.277 33.3355 297.545 34.6031 299.109 34.6031Z"
              fill="#E0E0E0"
            />
            <path
              id="Vector_44"
              d="M309.635 31.7718C309.635 33.3368 308.369 34.6031 306.804 34.6031C305.239 34.6031 303.973 33.3368 303.973 31.7718C303.973 30.2068 305.239 28.9404 306.804 28.9404C308.369 28.9404 309.635 30.2068 309.635 31.7718Z"
              fill="#E0E0E0"
            />
            <path
              id="Vector_45"
              d="M314.425 34.6031C315.989 34.6031 317.256 33.3355 317.256 31.7718C317.256 30.2081 315.989 28.9404 314.425 28.9404C312.861 28.9404 311.594 30.2081 311.594 31.7718C311.594 33.3355 312.861 34.6031 314.425 34.6031Z"
              fill="#E0E0E0"
            />
          </g>
          <g id="multi-box">
            <path
              id="Vector_46"
              d="M192.12 163.937H157.918C155.157 163.937 152.918 166.176 152.918 168.937V200.75C152.918 203.511 155.157 205.75 157.918 205.75H192.12C194.882 205.75 197.12 203.511 197.12 200.75V168.937C197.12 166.176 194.882 163.937 192.12 163.937Z"
              fill="#D1D5E6"
            />
            <path
              id="Vector_47"
              d="M250.655 163.937H216.453C213.692 163.937 211.453 166.176 211.453 168.937V200.75C211.453 203.511 213.692 205.75 216.453 205.75H250.655C253.417 205.75 255.655 203.511 255.655 200.75V168.937C255.655 166.176 253.417 163.937 250.655 163.937Z"
              fill="#D1D5E6"
            />
            <path
              id="Vector_48"
              d="M309.194 163.937H274.992C272.231 163.937 269.992 166.176 269.992 168.937V200.75C269.992 203.511 272.231 205.75 274.992 205.75H309.194C311.956 205.75 314.194 203.511 314.194 200.75V168.937C314.194 166.176 311.956 163.937 309.194 163.937Z"
              fill="#D1D5E6"
            />
            <path
              id="Vector_49"
              d="M192.12 221.28H157.918C155.157 221.28 152.918 223.519 152.918 226.28V258.093C152.918 260.854 155.157 263.093 157.918 263.093H192.12C194.882 263.093 197.12 260.854 197.12 258.093V226.28C197.12 223.519 194.882 221.28 192.12 221.28Z"
              fill="#F1F2F6"
            />
            <path
              id="Vector_50"
              d="M250.655 221.28H216.453C213.692 221.28 211.453 223.519 211.453 226.28V258.093C211.453 260.854 213.692 263.093 216.453 263.093H250.655C253.417 263.093 255.655 260.854 255.655 258.093V226.28C255.655 223.519 253.417 221.28 250.655 221.28Z"
              fill="#F1F2F6"
            />
            <path
              id="Vector_51"
              d="M309.194 221.28H274.992C272.231 221.28 269.992 223.519 269.992 226.28V258.093C269.992 260.854 272.231 263.093 274.992 263.093H309.194C311.956 263.093 314.194 260.854 314.194 258.093V226.28C314.194 223.519 311.956 221.28 309.194 221.28Z"
              fill="#F1F2F6"
            />
          </g>
          <g id="cut-pie">
            <path
              id="Vector_52"
              d="M35.9852 35.9887L71.5621 30.5531C74.5487 50.0738 60.9416 68.579 41.4209 71.5656C21.9121 74.5523 3.39494 60.9451 0.408297 41.4244C-2.5664 21.9157 11.0407 3.3985 30.5495 0.411853C33.6556 -0.0660095 36.8095 -0.125742 39.9395 0.220709L35.9852 35.9887Z"
              fill="#F1F2F6"
            />
            <path
              id="Vector_53"
              d="M47.5239 0.34056L43.1992 27.9132L70.2702 22.824C70.2702 22.824 66.2919 7.36514 47.5239 0.328613V0.34056Z"
              fill="#4767F6"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_0_1"
            x="33.4219"
            y="50.4438"
            width="388.317"
            height="330.973"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="6" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_0_1"
            x="273.551"
            y="3.85254"
            width="192.393"
            height="143.412"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="6" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_1"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_0_1">
            <rect width="478" height="393" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Maintainence;
