import Link from "next/link";
import React from "react";

const LinkButton = ({ hasIcon, label, href }) => {
  return (
    <div>
      <Link
        className="inline-flex gap-3 items-center text-primary"
        href={`/blogs/${href}`}
      >
        {label}
        <span className="icon-arrow-right2 text-2xl text-primary "></span>
      </Link>
    </div>
  );
};

export default LinkButton;
