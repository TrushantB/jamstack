import React from "react";
import Link from 'next/link'


function WebSection({ heading, description, lineIMage, logo }) {
  return (
    <div className="container px-5 mx-auto lg:px-0">
      <div className="flex flex-col items-center pb-36">
        <p className="mx-auto font-normal text-center heading-4 lg:w-7/12 ">
          {description}
        </p>
        <img className="py-8" src={lineIMage?.url}></img>
        <h4 className="font-bold text-center lg:w-4/12">{heading}</h4>
        <img className="mt-5" src={logo?.url} />
      </div>
    </div>
  );
}

export default WebSection;
