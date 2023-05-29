import React from "react";
import Link from 'next/link'


function WebSection({ heading, description, lineIMage, logo }) {
  return (
    <div className="px-5 lg:px-0">
      <div className="flex flex-col items-center pb-36">
        <p className="font-normal  text-center heading-4 lg:w-7/12 mx-auto ">
          {description}
        </p>
        <img className="py-8" src={lineIMage?.url}></img>
        <h2 className="lg:w-6/12 font-bold text-center">{heading}</h2>
        <img className="mt-5" src={logo?.url} alt="Jamstack+ - One stop solution in web reality." />
      </div>
    </div>
  );
}

export default WebSection;
