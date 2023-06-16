import React from "react";
import EcosystemBanner from "../svgAnimations/ecosystem/ecosystemBanner";

export const EcoSystemBanner = ({ heading, description, title }) => {
  return (
    <div className="flex flex-col sm:flex-row ">
      <div className="w-7/12" >
        <h1>{heading}</h1>
        <div className="lg:w-6/12 pt-5" dangerouslySetInnerHTML={{ __html: description }}>
        </div>
        <h5 className="pt-3 lg:w-6/12" dangerouslySetInnerHTML={{ __html: title }}></h5>
      </div>
      <div className="w-4/12">
        <EcosystemBanner/>
      </div>
    </div>
  );
};
