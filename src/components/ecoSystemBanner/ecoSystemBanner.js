import React from "react";

export const EcoSystemBanner = ({ heading, description, title }) => {
  return (
    <div>
      <div >
        <h1>{heading}</h1>
        <p className="lg:w-6/12 pt-5" dangerouslySetInnerHTML={{ __html: description }}>
        </p>
        <h5 className="pt-3 lg:w-6/12" dangerouslySetInnerHTML={{ __html: title }}></h5>
      </div>
    </div>
  );
};
