import React from "react";
import Link from "next/link";

useEffect(() => {
    
}, [])

function WebSection({ heading, description, lineIMage, logo }) {
  return (
    <div className="container  mx-auto lg:px-0 text-black">
      <div className="flex flex-col items-center lg:pb-24 pb-16  mx-4 lg:mx-0">
        <p className="mx-auto font-normal text-center heading-4 mb-11 lg:w-10/12 ">
          {description}
        </p>
        <div class=" flex justify-between items-center flex-col h-80">
          <div class="line border-3 w-1 border-green  bg-black"></div>
          <div class="w-5 h-5 rounded-full bg-black dot opacity-0  "></div>
        </div>
        <h2 className="font-bold text-center lg:w-7/12">{heading}</h2>
        <img className="mt-5 lg:w-2/12" src={logo?.url} />
      </div>
    </div>
  );
}

export default WebSection;
