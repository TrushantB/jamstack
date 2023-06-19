import React from "react";
import EcosystemBanner from "../svgAnimations/ecosystem/ecosystemBanner";

export const EcoSystemBanner = ({ heading, description, title }) => {
  return (
    <div className="flex flex-col justify-between sm:flex-row ">
      <div className="w-7/12">
        <h1>{heading}</h1>
        <div
          className=" pt-5"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        <h5 className="pt-3 " dangerouslySetInnerHTML={{ __html: title }}></h5>
      </div>
      <div className="w-4/12">
        <EcosystemBanner />
      </div>
    </div>
  );
};
