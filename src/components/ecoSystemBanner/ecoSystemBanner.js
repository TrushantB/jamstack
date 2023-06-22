import React from "react";
import EcosystemBanner from "../svgAnimations/ecosystem/ecosystemBanner";

export const EcoSystemBanner = ({ heading, description, title }) => {
  return (
    <div className="flex flex-col justify-between sm:flex-row ">
      <div className="lg:w-7/12">
        <h1>{heading}</h1>
        <div
          className=" pt-5"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        <h2 className="pt-3 heading-5 " dangerouslySetInnerHTML={{ __html: title }}></h2>
      </div>
      <div className="lg:w-4/12 mt-7 lg:mt-0">
        <EcosystemBanner />
      </div>
    </div>
  );
};
