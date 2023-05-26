import React from "react";

export const EcoSystemBanner = ({ heading, description, title }) => {
  return (
    <div>
      <div >
        <h1>{heading}</h1>
        <p className="lg:w-6/12 pt-5">{description}</p>
        <h5 className="pt-3 lg:w-6/12">{title}</h5>
      </div>
    </div>
  );
};
