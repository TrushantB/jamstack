import React from "react";


const LinkButton = ({ hasIcon, label }) => {
  return (
    <div>
      <a className="inline-flex gap-3 items-center text-primary" href="#">
        {label}
        {/* {hasIcon && ( */}
          <span className="icon-arrow-right2 text-2xl text-primary "></span>
        {/* )} */}
      </a>
    </div>
  );
};

export default LinkButton
