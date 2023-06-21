import { React, useState } from "react";
import Link from "next/link";
import classNames from "classnames";

const ButtonSize = (size) => {
  return classNames({
    "rounded-full px-4 py-3 font-bold": !size || size === "large",
    "rounded-full text-xl border-solid px-4 py-3 font-bold": size === "medium",
    "rounded-full px-4 py-3 text-xs font-bold": size === "small",
  });
};

const ButtonType = (type) => {
  return classNames({
    "bg-primary text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black ring-offset-2": type === "primary",
    "bg-blue-500 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black ring-offset-2": type === "secondary",
    "bg-gray-500 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black ring-offset-2": type === "tertiary",
    "bg-gray-300 text-gray-500 cursor-not-allowed": type === "disabled",
  });
};

const Button = ({ type, size, label, href, ...rest }) => {
  return (
    <div>
      <button
        className={`${ButtonType(type)} ${ButtonSize(size)}`}
        disabled={type === "disabled"}
        {...rest}
      >
        {
          href ?
            <Link href={`${href}`} >
              {label}
            </Link> :
            label
        }
      </button>
    </div>
  );
};

Button.defaultProps = {
  type: "primary",
  size: "medium",
};

export default Button;
