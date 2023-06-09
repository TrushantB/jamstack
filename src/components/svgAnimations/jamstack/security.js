import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Security = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set("#frame", { opacity: 0, y: 20 });
    gsap.set("#text", { opacity: 0 });
    gsap.set("#line", { scaleX: 0, opacity: 0 });
    gsap.set("#numbers", { y: 20, opacity: 0 });
    gsap.set("#passcode", { x: 50, opacity: 0 });
    gsap.set("#button", { x: -30, scale: 1.5, opacity: 0 });
    gsap.set("#lock-circle", { opacity: 0 });

    const security = gsap.timeline();

    security
      .to("#frame", { opacity: 1, y: 0, duration: 0.3 })
      .to("#text", { duration: 0.3, opacity: 1 })
      .to("#line", { scaleX: 1, opacity: 1, duration: 0.3 })
      .to("#numbers", { y: 0, opacity: 1, duration: 0.3 })
      .to("#passcode", { x: 0, opacity: 1, duration: 0.3 })
      .to("#button", {
        opacity: 1,
        duration: 0.3,
        transformOrigin: "center center",
      })
      .to("#lock-circle", { opacity: 1, ease: "ease-in-out" });

    ScrollTrigger.create({
      trigger: "#security",
      start: "1% 50%",
      end: "80% 70%",
      animation: security,
      toggleActions: "restart none none reverse",
    });
  }, []);
  return (
    <div className=" lg:w-10/12">
      <svg
        id="security"
        width=""
        height=""
        viewBox="0 0 447 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="security" clip-path="url(#clip0_0_1)">
          <g id="frame">
            <path
              id="Vector"
              d="M435.208 3H41C36.0294 3 32 7.02944 32 12V253.73C32 258.701 36.0294 262.73 41 262.73H435.208C440.179 262.73 444.208 258.701 444.208 253.73V12C444.208 7.02944 440.179 3 435.208 3Z"
              fill="white"
              stroke="#4767F6"
              stroke-width="2"
            />
            <g id="Group 1045">
              <path
                id="Vector_2"
                d="M32.0664 10.6868C32.0664 5.44007 36.3197 1.18677 41.5664 1.18677H435.774C441.021 1.18677 445.274 5.44006 445.274 10.6868V16.3371H32.0664V10.6868Z"
                fill="#4767F6"
                stroke="#4767F6"
              />
            </g>
          </g>
          <path
            id="text"
            d="M184.064 59.4483C184.064 59.5023 184.037 59.5293 184.037 59.5833L179.609 76.5123C178.961 79.0233 177.017 79.2663 175.856 79.2663C174.695 79.2663 172.751 79.0233 172.103 76.5123L167.675 59.5833C167.675 59.5293 167.648 59.5023 167.648 59.4483C167.648 59.1783 167.864 58.9893 168.134 58.9893H170.996C171.239 58.9893 171.455 59.2053 171.509 59.4483L175.424 75.6753C175.505 75.9993 175.586 76.1073 175.856 76.1073C176.126 76.1073 176.207 75.9993 176.288 75.6753L180.203 59.4483C180.257 59.2053 180.473 58.9893 180.716 58.9893H183.578C183.848 58.9893 184.064 59.1783 184.064 59.4483ZM197.576 72.0033C197.576 72.4353 197.414 72.6783 197.036 72.6783H188.234V72.7593C188.234 74.3253 188.882 76.1883 191.474 76.1883C193.445 76.1883 195.308 76.0263 196.442 75.9183C196.469 75.9183 196.496 75.9183 196.523 75.9183C196.793 75.9183 197.009 76.0533 197.009 76.3233V78.1053C197.009 78.5373 196.928 78.7263 196.442 78.8073C194.687 79.1313 193.634 79.2663 191.204 79.2663C188.504 79.2663 184.67 77.8083 184.67 72.4893V70.4913C184.67 66.2793 187.019 63.6333 191.15 63.6333C195.308 63.6333 197.576 66.4683 197.576 70.4913V72.0033ZM193.985 70.1403V70.0323C193.985 67.9263 192.824 66.7113 191.15 66.7113C189.476 66.7113 188.261 67.8993 188.261 70.0323V70.1403H193.985ZM208.463 66.1173C208.463 66.4143 208.22 66.6573 207.923 66.6573C206.465 66.6573 205.331 67.0353 204.197 67.6293V78.4833C204.197 78.7803 203.954 79.0503 203.657 79.0503H201.173C200.876 79.0503 200.633 78.7803 200.633 78.4833V64.3623C200.633 64.0653 200.876 63.8223 201.173 63.8223H203.522C203.819 63.8223 204.062 64.0653 204.062 64.3623V64.9293C205.385 63.9033 206.843 63.6333 207.923 63.6333C208.22 63.6333 208.463 63.8763 208.463 64.1733V66.1173ZM214.484 61.2573C214.484 61.5543 214.241 61.7973 213.944 61.7973H211.325C211.028 61.7973 210.758 61.5543 210.758 61.2573V58.8813C210.758 58.5843 211.028 58.3413 211.325 58.3413H213.944C214.241 58.3413 214.484 58.5843 214.484 58.8813V61.2573ZM214.403 78.4833C214.403 78.7803 214.16 79.0503 213.863 79.0503H211.379C211.082 79.0503 210.839 78.7803 210.839 78.4833V64.3623C210.839 64.0653 211.082 63.8223 211.379 63.8223H213.863C214.16 63.8223 214.403 64.0653 214.403 64.3623V78.4833ZM226.353 60.4203C226.353 60.7443 226.137 60.8793 225.948 60.8793H224.733C223.437 60.8793 223.14 61.1763 223.14 62.4993V63.8223H231.591C231.888 63.8223 232.131 64.0653 232.131 64.3623V78.4833C232.131 78.7803 231.888 79.0503 231.591 79.0503H229.107C228.81 79.0503 228.567 78.7803 228.567 78.4833V66.4953H223.14V78.4833C223.14 78.7803 222.897 79.0503 222.6 79.0503H220.143C219.846 79.0503 219.576 78.7803 219.576 78.4833V66.4953L217.173 66.1173C216.876 66.0633 216.633 65.9013 216.633 65.6043V64.3623C216.633 64.0653 216.876 63.8223 217.173 63.8223H219.576V62.4993C219.576 59.0163 221.439 58.1793 224.247 58.1793C224.895 58.1793 225.354 58.2873 225.867 58.3953C226.083 58.4493 226.353 58.5843 226.353 58.8273V60.4203ZM232.212 61.2573C232.212 61.5543 231.969 61.7973 231.672 61.7973H229.053C228.756 61.7973 228.486 61.5543 228.486 61.2573V58.8813C228.486 58.5843 228.756 58.3413 229.053 58.3413H231.672C231.969 58.3413 232.212 58.5843 232.212 58.8813V61.2573ZM245.394 78.2133C245.394 78.6453 245.286 78.8073 244.827 78.9153C244.206 79.0773 242.991 79.2663 241.344 79.2663C237.834 79.2663 235.188 77.1063 235.188 72.7053V70.1943C235.188 65.7933 237.834 63.6333 241.344 63.6333C242.991 63.6333 244.206 63.8223 244.827 63.9843C245.286 64.0923 245.394 64.2543 245.394 64.6863V66.4413C245.394 66.7113 245.178 66.8463 244.908 66.8463C244.881 66.8463 244.854 66.8463 244.827 66.8463C243.747 66.7113 243.099 66.6573 241.344 66.6573C240.075 66.6573 238.752 67.3863 238.752 70.1943V72.7053C238.752 75.5133 240.075 76.2423 241.344 76.2423C243.099 76.2423 243.747 76.1883 244.827 76.0533C244.854 76.0533 244.881 76.0533 244.908 76.0533C245.178 76.0533 245.394 76.1883 245.394 76.4583V78.2133ZM259.644 78.5103C259.644 78.8073 259.401 79.0503 259.104 79.0503H256.809C256.512 79.0503 256.269 78.8073 256.269 78.5103V78.0783C255.027 78.8343 253.758 79.2663 252.462 79.2663C250.221 79.2663 247.791 78.4023 247.791 74.7573V74.6493C247.791 71.5713 249.681 69.9783 254.379 69.9783H256.08V68.7903C256.08 67.0353 255.297 66.6033 253.704 66.6033C251.976 66.6033 250.194 66.7113 249.303 66.8193C249.249 66.8193 249.195 66.8193 249.168 66.8193C248.898 66.8193 248.682 66.7383 248.682 66.3603V64.6323C248.682 64.3353 248.844 64.1463 249.195 64.0653C250.275 63.8493 251.841 63.6333 253.704 63.6333C257.538 63.6333 259.644 65.3343 259.644 68.7903V78.5103ZM256.08 75.6753V72.3543H254.379C251.922 72.3543 251.382 73.1373 251.382 74.6493V74.7573C251.382 76.0803 251.976 76.4313 253.326 76.4313C254.298 76.4313 255.297 76.1073 256.08 75.6753ZM270.89 78.5913C270.89 78.8613 270.728 79.0233 270.377 79.0773C269.729 79.1853 269.135 79.2663 268.541 79.2663C265.49 79.2663 264.248 78.5913 264.248 74.9733V66.4953L261.71 66.1173C261.413 66.0633 261.17 65.8743 261.17 65.5773V64.3623C261.17 64.0653 261.413 63.8223 261.71 63.8223H264.248V61.6083C264.248 61.3113 264.491 61.1223 264.788 61.0683L267.299 60.6363C267.326 60.6363 267.38 60.6363 267.407 60.6363C267.65 60.6363 267.839 60.7713 267.839 61.0413V63.8223H270.269C270.566 63.8223 270.809 64.0653 270.809 64.3623V65.9553C270.809 66.2523 270.566 66.4953 270.269 66.4953H267.839V74.9733C267.839 76.3233 267.92 76.4853 268.892 76.4853H270.323C270.674 76.4853 270.89 76.6203 270.89 76.8903V78.5913ZM277.053 61.2573C277.053 61.5543 276.81 61.7973 276.513 61.7973H273.894C273.597 61.7973 273.327 61.5543 273.327 61.2573V58.8813C273.327 58.5843 273.597 58.3413 273.894 58.3413H276.513C276.81 58.3413 277.053 58.5843 277.053 58.8813V61.2573ZM276.972 78.4833C276.972 78.7803 276.729 79.0503 276.432 79.0503H273.948C273.651 79.0503 273.408 78.7803 273.408 78.4833V64.3623C273.408 64.0653 273.651 63.8223 273.948 63.8223H276.432C276.729 63.8223 276.972 64.0653 276.972 64.3623V78.4833ZM292.999 72.5433C292.999 76.4043 290.785 79.2663 286.546 79.2663C282.307 79.2663 280.093 76.4043 280.093 72.5433V70.3563C280.093 66.4953 282.307 63.6333 286.546 63.6333C290.785 63.6333 292.999 66.4953 292.999 70.3563V72.5433ZM289.435 72.5433V70.3563C289.435 68.1423 288.436 66.7113 286.546 66.7113C284.656 66.7113 283.657 68.1423 283.657 70.3563V72.5433C283.657 74.7573 284.656 76.1883 286.546 76.1883C288.436 76.1883 289.435 74.7573 289.435 72.5433ZM308.53 78.4833C308.53 78.7803 308.287 79.0503 307.99 79.0503H305.506C305.209 79.0503 304.966 78.7803 304.966 78.4833V69.6813C304.966 67.3323 304.75 66.6573 302.671 66.6573C301.753 66.6573 300.754 67.0353 299.62 67.6293V78.4833C299.62 78.7803 299.377 79.0503 299.08 79.0503H296.596C296.299 79.0503 296.056 78.7803 296.056 78.4833V64.3623C296.056 64.0653 296.299 63.8223 296.596 63.8223H298.945C299.242 63.8223 299.485 64.0653 299.485 64.3623V64.9293C301.051 63.9303 302.077 63.6333 303.859 63.6333C307.747 63.6333 308.53 66.2523 308.53 69.6813V78.4833Z"
            fill="#FF5223"
          />
          <path
            id="Vector_3"
            d="M240.121 183.14C240.121 182.864 240.345 182.64 240.621 182.64H300.847C301.123 182.64 301.347 182.864 301.347 183.14V199.06C301.347 199.337 301.123 199.56 300.847 199.56H243.195C242.547 199.56 241.972 199.977 241.77 200.593L241.096 202.645C240.919 203.186 240.121 203.058 240.121 202.489V183.14Z"
            fill="white"
          />
          <g id="numbers">
            <g id="Group 1041">
              <path
                id="Vector_4"
                d="M365.973 126.564H324.172V174.54H365.973V126.564Z"
                fill="#F1F2F6"
              />
            </g>
            <g id="Group 1037">
              <path
                id="Vector_5"
                d="M153.168 126.564H111.367V174.54H153.168V126.564Z"
                fill="#F1F2F6"
              />
              <path
                id="Vector_6"
                d="M138.924 156.763C138.924 160.759 136.413 163.054 132.039 163.054C130.284 163.054 128.637 162.892 127.287 162.568C126.99 162.487 126.774 162.379 126.774 162.028V161.029C126.774 160.759 126.936 160.624 127.179 160.624C127.233 160.624 127.26 160.624 127.314 160.624C129.015 160.921 130.689 161.002 132.039 161.002C135.09 161.002 136.44 159.517 136.44 156.763V156.358C136.44 153.658 134.766 152.74 130.797 152.74H127.557C127.314 152.74 127.125 152.524 127.125 152.281V152.254L127.881 143.263C127.908 142.993 128.151 142.804 128.421 142.804H137.709C138.006 142.804 138.249 142.966 138.249 143.263V144.451C138.249 144.748 138.006 144.883 137.709 144.883H129.96L129.528 150.715H130.797C135.819 150.715 138.924 152.038 138.924 156.358V156.763Z"
                fill="#D1D5E5"
              />
            </g>
            <g id="Group 1038">
              <path
                id="Vector_7"
                d="M206.367 126.564H164.566V174.54H206.367V126.564Z"
                fill="#F1F2F6"
              />
              <path
                id="Vector_8"
                d="M191.934 156.8C191.934 160.85 189.153 162.578 185.211 162.578C183.51 162.578 181.944 162.335 180.648 162.038C180.378 161.984 180.135 161.795 180.135 161.525V160.607C180.135 160.31 180.324 160.148 180.594 160.148C180.621 160.148 180.648 160.148 180.675 160.148C182.295 160.364 183.942 160.526 185.211 160.526C188.154 160.526 189.423 159.392 189.423 156.8V156.233C189.423 154.802 188.721 152.939 186.264 152.939H181.35C181.053 152.939 180.837 152.75 180.837 152.453V151.508C180.837 151.211 181.053 150.995 181.35 150.995H186.264C188.856 150.995 189.423 149.213 189.423 147.782V147.404C189.423 145.19 188.262 144.191 185.211 144.191C183.645 144.191 182.43 144.38 180.675 144.596C180.648 144.596 180.621 144.596 180.594 144.596C180.324 144.596 180.135 144.434 180.135 144.137V143.192C180.135 142.949 180.378 142.733 180.648 142.679C181.944 142.409 183.483 142.139 185.211 142.139C189.234 142.139 191.934 143.408 191.934 147.404V147.782C191.934 149.591 191.043 151.157 189.369 151.994C191.286 152.939 191.934 154.667 191.934 156.233V156.8Z"
                fill="#D1D5E5"
              />
            </g>
            <g id="Group 1039">
              <path
                id="Vector_9"
                d="M259.571 126.564H217.77V174.54H259.571V126.564Z"
                fill="#F1F2F6"
              />
              <path
                id="Vector_10"
                d="M245.137 157.276C245.137 161.326 242.356 163.054 238.414 163.054C236.713 163.054 235.147 162.811 233.851 162.514C233.581 162.46 233.338 162.271 233.338 162.001V161.083C233.338 160.786 233.527 160.624 233.797 160.624C233.824 160.624 233.851 160.624 233.878 160.624C235.498 160.84 237.145 161.002 238.414 161.002C241.357 161.002 242.626 159.868 242.626 157.276V156.709C242.626 155.278 241.924 153.415 239.467 153.415H234.553C234.256 153.415 234.04 153.226 234.04 152.929V151.984C234.04 151.687 234.256 151.471 234.553 151.471H239.467C242.059 151.471 242.626 149.689 242.626 148.258V147.88C242.626 145.666 241.465 144.667 238.414 144.667C236.848 144.667 235.633 144.856 233.878 145.072C233.851 145.072 233.824 145.072 233.797 145.072C233.527 145.072 233.338 144.91 233.338 144.613V143.668C233.338 143.425 233.581 143.209 233.851 143.155C235.147 142.885 236.686 142.615 238.414 142.615C242.437 142.615 245.137 143.884 245.137 147.88V148.258C245.137 150.067 244.246 151.633 242.572 152.47C244.489 153.415 245.137 155.143 245.137 156.709V157.276Z"
                fill="#D1D5E5"
              />
            </g>
            <g id="Group 1040">
              <path
                id="Vector_11"
                d="M312.77 126.564H270.969V174.54H312.77V126.564Z"
                fill="#F1F2F6"
              />
              <path
                id="Vector_12"
                d="M299.147 156.8C299.147 160.742 296.177 162.578 292.586 162.578H292.316C288.725 162.578 285.755 160.742 285.755 156.8V156.287C285.755 154.64 286.673 152.858 288.374 151.913C286.673 151.049 285.809 149.483 285.809 147.701V147.458C285.809 143.732 288.617 142.139 292.316 142.139H292.586C296.285 142.139 299.093 143.732 299.093 147.458V147.701C299.093 149.483 298.229 151.049 296.528 151.913C298.229 152.858 299.147 154.64 299.147 156.287V156.8ZM296.717 147.701V147.458C296.717 145.298 295.259 144.137 292.586 144.137H292.316C289.643 144.137 288.185 145.298 288.185 147.458V147.701C288.185 149.375 289.13 150.941 291.614 150.941H293.288C295.772 150.941 296.717 149.375 296.717 147.701ZM296.69 156.8V156.287C296.69 154.748 295.772 152.885 293.288 152.885H291.614C289.13 152.885 288.212 154.748 288.212 156.287V156.8C288.212 159.122 289.643 160.526 292.316 160.526H292.586C295.259 160.526 296.69 159.122 296.69 156.8Z"
                fill="#D1D5E5"
              />
            </g>
          </g>
          <g id="passcode">
            <path
              id="Vector_13"
              d="M240.121 183.14C240.121 182.864 240.345 182.64 240.621 182.64H300.847C301.123 182.64 301.347 182.864 301.347 183.14V199.06C301.347 199.337 301.123 199.56 300.847 199.56H243.195C242.547 199.56 241.972 199.977 241.77 200.593L241.096 202.645C240.919 203.186 240.121 203.058 240.121 202.489V183.14Z"
              fill="#4767F6"
            />
            <g id="Group 1043">
              <path
                id="Vector_14"
                d="M240.121 183.14C240.121 182.864 240.345 182.64 240.621 182.64H300.847C301.123 182.64 301.347 182.864 301.347 183.14V199.06C301.347 199.337 301.123 199.56 300.847 199.56H243.195C242.547 199.56 241.972 199.977 241.77 200.593L241.096 202.645C240.919 203.186 240.121 203.058 240.121 202.489V183.14Z"
                stroke="#4767F6"
              />
              <path
                id="Vector_15"
                d="M267.388 194.546L267.518 192.245L265.587 193.512L264.893 192.307L266.956 191.273L264.893 190.239L265.587 189.034L267.518 190.301L267.388 188H268.768L268.643 190.301L270.575 189.034L271.268 190.239L269.2 191.273L271.268 192.307L270.575 193.512L268.643 192.245L268.768 194.546H267.388Z"
                fill="white"
              />
              <path
                id="Vector_16"
                d="M258.841 194.546L258.972 192.245L257.04 193.512L256.347 192.307L258.409 191.273L256.347 190.239L257.04 189.034L258.972 190.301L258.841 188H260.222L260.097 190.301L262.028 189.034L262.722 190.239L260.653 191.273L262.722 192.307L262.028 193.512L260.097 192.245L260.222 194.546H258.841Z"
                fill="white"
              />
              <path
                id="Vector_17"
                d="M275.939 194.546L276.069 192.245L274.137 193.512L273.444 192.307L275.507 191.273L273.444 190.239L274.137 189.034L276.069 190.301L275.939 188H277.319L277.194 190.301L279.126 189.034L279.819 190.239L277.751 191.273L279.819 192.307L279.126 193.512L277.194 192.245L277.319 194.546H275.939Z"
                fill="white"
              />
              <path
                id="Vector_18"
                d="M284.489 194.546L284.62 192.245L282.688 193.512L281.995 192.307L284.058 191.273L281.995 190.239L282.688 189.034L284.62 190.301L284.489 188H285.87L285.745 190.301L287.677 189.034L288.37 190.239L286.302 191.273L288.37 192.307L287.677 193.512L285.745 192.245L285.87 194.546H284.489Z"
                fill="white"
              />
              <path
                id="Vector_19"
                d="M293.036 194.546L293.167 192.245L291.235 193.512L290.542 192.307L292.604 191.273L290.542 190.239L291.235 189.034L293.167 190.301L293.036 188H294.417L294.292 190.301L296.224 189.034L296.917 190.239L294.849 191.273L296.917 192.307L296.224 193.512L294.292 192.245L294.417 194.546H293.036Z"
                fill="white"
              />
              <path
                id="Vector_20"
                d="M245.467 194.49C245.296 194.49 245.149 194.431 245.027 194.311C244.905 194.191 244.844 194.048 244.844 193.88V189.462C244.844 189.294 244.905 189.15 245.027 189.031C245.149 188.911 245.296 188.851 245.467 188.851H246.195V187.874C246.195 187.339 246.387 186.883 246.772 186.506C247.158 186.129 247.623 185.94 248.17 185.94C248.716 185.94 249.182 186.129 249.566 186.506C249.951 186.883 250.143 187.339 250.143 187.874V188.851H250.87C251.042 188.851 251.189 188.911 251.311 189.031C251.433 189.15 251.494 189.294 251.494 189.462V193.88C251.494 194.048 251.433 194.191 251.311 194.311C251.189 194.431 251.042 194.49 250.87 194.49H245.467ZM248.171 192.455C248.391 192.455 248.579 192.38 248.735 192.23C248.891 192.081 248.969 191.901 248.969 191.691C248.969 191.488 248.89 191.303 248.733 191.136C248.576 190.97 248.388 190.887 248.167 190.887C247.947 190.887 247.758 190.97 247.603 191.136C247.447 191.303 247.369 191.489 247.369 191.696C247.369 191.903 247.447 192.081 247.604 192.231C247.761 192.38 247.95 192.455 248.171 192.455ZM246.818 188.851H249.52V187.874C249.52 187.507 249.388 187.194 249.126 186.937C248.864 186.68 248.545 186.551 248.17 186.551C247.795 186.551 247.476 186.68 247.213 186.937C246.95 187.194 246.818 187.507 246.818 187.874V188.851Z"
                fill="white"
              />
            </g>
          </g>
          <path
            id="line"
            d="M347.4 97.5886H136.121C135.569 97.5886 135.121 98.0363 135.121 98.5886V102.289C135.121 102.841 135.569 103.289 136.121 103.289H347.4C347.952 103.289 348.4 102.841 348.4 102.289V98.5886C348.4 98.0363 347.952 97.5886 347.4 97.5886Z"
            fill="#D1D5E6"
          />
          <g id="lock-circle">
            <path
              id="Vector_21"
              d="M31.567 100.439C48.6191 100.439 62.4426 86.6152 62.4426 69.5631C62.4426 52.511 48.6191 38.6875 31.567 38.6875C14.5149 38.6875 0.691406 52.511 0.691406 69.5631C0.691406 86.6152 14.5149 100.439 31.567 100.439Z"
              fill="#F0027F"
            />
            <path
              id="Vector_22"
              d="M23.8477 81.9134C23.3578 81.9134 22.9385 81.7406 22.5897 81.3951C22.2408 81.0496 22.0664 80.6342 22.0664 80.149V67.3871C22.0664 66.9019 22.2408 66.4866 22.5897 66.1411C22.9385 65.7956 23.3578 65.6228 23.8477 65.6228H25.9259V62.7999C25.9259 61.2542 26.4761 59.9366 27.5767 58.8471C28.6772 57.7576 30.0083 57.2129 31.5697 57.2129C33.1312 57.2129 34.4612 57.7576 35.5596 58.8471C36.6581 59.9366 37.2073 61.2542 37.2073 62.7999V65.6228H39.2855C39.7753 65.6228 40.1947 65.7956 40.5435 66.1411C40.8923 66.4866 41.0668 66.9019 41.0668 67.3871V80.149C41.0668 80.6342 40.8923 81.0496 40.5435 81.3951C40.1947 81.7406 39.7753 81.9134 39.2855 81.9134H23.8477ZM31.5716 76.0323C32.2016 76.0323 32.7393 75.8164 33.1846 75.3845C33.6299 74.9526 33.8526 74.4334 33.8526 73.8269C33.8526 73.2388 33.6282 72.7046 33.1796 72.2243C32.731 71.744 32.1916 71.5039 31.5616 71.5039C30.9316 71.5039 30.3939 71.744 29.9486 72.2243C29.5033 72.7046 29.2806 73.2437 29.2806 73.8416C29.2806 74.4395 29.5049 74.9541 29.9536 75.3854C30.4022 75.8167 30.9416 76.0323 31.5716 76.0323ZM27.7071 65.6228H35.426V62.7999C35.426 61.738 35.0512 60.8355 34.3014 60.0922C33.5516 59.3489 32.6412 58.9772 31.5701 58.9772C30.499 58.9772 29.5874 59.3489 28.8353 60.0922C28.0832 60.8355 27.7071 61.738 27.7071 62.7999V65.6228Z"
              fill="white"
            />
          </g>
          <g id="button">
            <path
              id="Vector_23"
              d="M271.535 208.741H206.035C198.165 208.741 191.785 215.121 191.785 222.991C191.785 230.861 198.165 237.241 206.035 237.241H271.535C279.405 237.241 285.785 230.861 285.785 222.991C285.785 215.121 279.405 208.741 271.535 208.741Z"
              fill="#F0027F"
            />
            <path
              id="Vector_24"
              d="M213.931 220.256C213.868 219.695 213.605 219.257 213.141 218.944C212.684 218.632 212.086 218.475 211.351 218.475C210.835 218.475 210.392 218.55 210.022 218.7C209.653 218.85 209.37 219.053 209.174 219.31C208.978 219.568 208.877 219.862 208.873 220.191C208.873 220.466 208.938 220.703 209.066 220.904C209.2 221.106 209.381 221.277 209.608 221.419C209.835 221.556 210.086 221.672 210.362 221.766C210.639 221.861 210.917 221.939 211.197 222.003L212.481 222.312C212.997 222.428 213.494 222.585 213.97 222.782C214.451 222.979 214.881 223.227 215.26 223.527C215.642 223.828 215.946 224.19 216.168 224.614C216.391 225.037 216.503 225.535 216.503 226.105C216.503 226.877 216.298 227.555 215.888 228.143C215.478 228.725 214.886 229.181 214.11 229.511C213.34 229.837 212.407 230 211.311 230C210.247 230 209.323 229.841 208.539 229.524C207.76 229.208 207.15 228.745 206.709 228.136C206.272 227.527 206.036 226.786 206 225.912H208.438C208.475 226.371 208.621 226.752 208.879 227.057C209.138 227.36 209.474 227.588 209.889 227.737C210.307 227.887 210.775 227.963 211.292 227.963C211.83 227.963 212.302 227.885 212.708 227.731C213.117 227.572 213.438 227.354 213.669 227.076C213.901 226.792 214.019 226.462 214.024 226.085C214.019 225.742 213.915 225.46 213.71 225.237C213.505 225.01 213.218 224.821 212.848 224.671C212.483 224.517 212.056 224.38 211.565 224.26L210.009 223.875C208.881 223.596 207.991 223.174 207.337 222.608C206.687 222.039 206.362 221.281 206.362 220.339C206.362 219.564 206.579 218.884 207.016 218.302C207.457 217.719 208.056 217.266 208.812 216.945C209.57 216.619 210.427 216.457 211.385 216.457C212.356 216.457 213.206 216.619 213.937 216.945C214.672 217.266 215.248 217.715 215.668 218.289C216.086 218.859 216.302 219.515 216.316 220.256H213.931ZM225.145 225.649V219.928H227.563V229.801H225.219V228.046H225.111C224.88 228.599 224.499 229.051 223.969 229.403C223.444 229.754 222.795 229.93 222.025 229.93C221.353 229.93 220.758 229.786 220.242 229.499C219.73 229.208 219.329 228.785 219.039 228.232C218.75 227.675 218.605 227.002 218.605 226.214V219.928H221.023V225.854C221.023 226.479 221.202 226.977 221.558 227.345C221.914 227.714 222.382 227.898 222.961 227.898C223.317 227.898 223.662 227.815 223.996 227.648C224.331 227.48 224.605 227.232 224.818 226.902C225.036 226.568 225.145 226.15 225.145 225.649ZM230.157 229.801V216.637H232.576V221.56H232.676C232.801 221.321 232.976 221.065 233.204 220.796C233.431 220.521 233.738 220.288 234.126 220.095C234.514 219.898 235.008 219.799 235.609 219.799C236.401 219.799 237.116 219.994 237.753 220.384C238.394 220.77 238.902 221.342 239.276 222.1C239.655 222.854 239.844 223.78 239.844 224.877C239.844 225.962 239.66 226.883 239.29 227.641C238.92 228.4 238.417 228.978 237.78 229.377C237.143 229.775 236.422 229.975 235.615 229.975C235.028 229.975 234.54 229.88 234.152 229.691C233.765 229.503 233.453 229.276 233.218 229.01C232.986 228.74 232.805 228.486 232.676 228.245H232.536V229.801H230.157ZM232.529 224.864C232.529 225.503 232.623 226.062 232.81 226.542C233.001 227.021 233.275 227.397 233.631 227.667C233.992 227.932 234.429 228.065 234.941 228.065C235.475 228.065 235.922 227.928 236.283 227.654C236.645 227.375 236.916 226.996 237.098 226.517C237.285 226.032 237.379 225.482 237.379 224.864C237.379 224.252 237.287 223.707 237.105 223.231C236.923 222.756 236.651 222.384 236.29 222.113C235.93 221.844 235.479 221.708 234.941 221.708C234.424 221.708 233.986 221.839 233.624 222.1C233.264 222.361 232.99 222.728 232.803 223.199C232.621 223.671 232.529 224.226 232.529 224.864ZM241.901 229.801V219.928H244.211V221.605H244.332C244.546 221.04 244.9 220.599 245.394 220.281C245.889 219.96 246.478 219.799 247.165 219.799C247.859 219.799 248.445 219.962 248.922 220.288C249.403 220.609 249.741 221.048 249.937 221.605H250.043C250.271 221.057 250.654 220.62 251.193 220.294C251.736 219.964 252.38 219.799 253.123 219.799C254.068 219.799 254.838 220.086 255.435 220.66C256.032 221.235 256.33 222.073 256.33 223.174V229.801H253.905V223.534C253.905 222.921 253.736 222.473 253.397 222.19C253.058 221.903 252.645 221.76 252.154 221.76C251.571 221.76 251.115 221.935 250.785 222.287C250.46 222.634 250.297 223.085 250.297 223.643V229.801H247.926V223.437C247.926 222.928 247.766 222.52 247.445 222.216C247.128 221.912 246.714 221.76 246.202 221.76C245.855 221.76 245.539 221.846 245.253 222.017C244.969 222.183 244.741 222.422 244.572 222.731C244.403 223.034 244.319 223.39 244.319 223.797V229.801H241.901ZM258.784 229.801V219.928H261.202V229.801H258.784ZM259.999 218.526C259.617 218.526 259.286 218.404 259.011 218.16C258.735 217.912 258.597 217.614 258.597 217.266C258.597 216.915 258.735 216.617 259.011 216.373C259.286 216.125 259.617 216 259.999 216C260.387 216 260.716 216.125 260.988 216.373C261.264 216.617 261.403 216.915 261.403 217.266C261.403 217.614 261.264 217.912 260.988 218.16C260.716 218.404 260.387 218.526 259.999 218.526ZM268.813 219.928V221.728H262.914V219.928H268.813ZM264.37 217.563H266.788V226.831C266.788 227.144 266.838 227.384 266.936 227.551C267.038 227.714 267.172 227.825 267.336 227.885C267.501 227.946 267.684 227.976 267.884 227.976C268.035 227.976 268.173 227.965 268.299 227.944C268.427 227.921 268.526 227.902 268.592 227.885L269 229.704C268.87 229.748 268.685 229.795 268.445 229.846C268.21 229.897 267.92 229.928 267.577 229.936C266.971 229.953 266.426 229.865 265.94 229.672C265.455 229.475 265.069 229.171 264.785 228.759C264.504 228.348 264.366 227.834 264.37 227.217V217.563Z"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_0_1">
            <rect width="447" height="263" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Security;
