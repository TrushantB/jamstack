import React from "react";

function WebSection({ heading, description, lineIMage, logo }) {
  return (
    <div className="">
      <div className="flex flex-col items-center pb-36">
        <p className="font-normal w-10/12 text-center heading-4 lg:w-8/12 mx-auto ">
          {description}
        </p>
        <img className="py-4" src={lineIMage?.url}></img>
        <h4 className="w-4/12 font-bold text-center">{heading}</h4>
        <img className="mt-3" src={logo?.url} />
      </div>
    </div>
  );
}

export default WebSection;
