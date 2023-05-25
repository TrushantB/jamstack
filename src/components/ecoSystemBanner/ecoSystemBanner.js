import React from "react";

export const EcoSystemBanner = ({ heading, description, title }) => {
  return (
    <div>
      <div className="pl-24 pb-24 pt-24">
        <h1>{heading}</h1>
        <p className="w-7/12 pt-5">{description}</p>
        <h5 className="pt-3">{title}</h5>
      </div>
    </div>
  );
};
