import React from "react";
import Link from 'next/link'


const LinkButton = ({ hasIcon, label }) => {
  return (
    <div>
      <Link className="flex gap-3 items-center text-primary" href="#">
        {label}
        {hasIcon && (
          <span className="icon-arrow-right2 text-2xl text-primary "></span>
        )}
      </Link>
    </div>
  );
};

export default LinkButton