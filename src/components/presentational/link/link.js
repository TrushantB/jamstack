import React from "react";

const Link = ({ hasIcon, label, href = "#" }) => {
  return (
    <div>
      <a className="flex gap-3 items-center text-primary" href={href}>
        {label}
        {hasIcon && (
          <span className="icon-arrow-right2 text-2xl text-primary "></span>
        )}
      </a>
    </div>
  );
};

export default Link;
