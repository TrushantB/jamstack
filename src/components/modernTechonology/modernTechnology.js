import React from "react";
import Button from "../form/button/Button";

function MordernTechnology({ heading, type, label, size }) {
  return (
    <>
      <div className="text-center lg:w-10/12 mx-auto pt-10">
        <h2 className="pb-8 ">{heading}</h2>
        <div className="pb-10">
          <Button label={label} type={type} size={size} />
        </div>
      </div>
    </>
  );
}

export default MordernTechnology;
