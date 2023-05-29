import React from "react";
import Link from "next/link";

function WebSection({ heading, description, lineIMage, logo }) {
  return (
    <div className="container  mx-auto lg:px-0 text-black">
      <div className="flex flex-col items-center lg:pb-24 pb-16  mx-4 lg:mx-0">
        <p className="mx-auto font-normal text-center heading-4 mb-11 lg:w-10/12 ">
          {description}
        </p>
        <div className="flex justify-center items-center flex-col pb-5 mx-4 lg:mx-0 ">
          <div className="w-[1px] h-30 py-32 bg-black"></div>
          <div className="circle w-5 h-5 bg-black"></div>
        </div>
        <h2 className="font-bold text-center lg:w-7/12">{heading}</h2>
        <img className="mt-5 lg:w-2/12" src={logo?.url} />
      </div>
    </div>
  );
}

export default WebSection;
