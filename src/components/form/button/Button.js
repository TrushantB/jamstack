import { React, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// import "./Button.css";

const ButtonSize = (size) => {
  return classNames({
    "rounded-full px-4 py-3 font-bold": !size || size === "large",
    "rounded-full text-xl border-solid px-4 py-3 font-bold": size === "medium",
    "rounded-full px-4 py-3 text-xs font-bold": size === "small",
  });
};

const ButtonType = (type) => {
  return classNames({
    "bg-pink-500 text-white": type === "primary",
    "bg-blue-500 text-white": type === "secondary",
    "bg-gray-500 text-white": type === "tertiary",
    "bg-gray-300 text-gray-500 cursor-not-allowed": type === "disabled",
  });
};

const Button = ({ type, size, label }) => {
  return (
    <div>
      <button
        className={`${ButtonType(type)} ${ButtonSize(size)}`}
        disabled={type === "disabled"}
      >
        {label}
      </button>
    </div>
  );
};

Button.defaultProps = {
  type: "primary",
  size: "medium",
};

export default Button;
