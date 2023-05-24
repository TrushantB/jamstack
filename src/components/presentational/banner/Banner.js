import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "../../form/button/Button";

const Banner = ({ heading, image, type, size, label, layout ,href }) => {
  return (
    <div className="">
      <div
        className={classNames({
          "md:flex justify-center": true,
          "flex-col-reverse": layout === "Image Bottom",
        })}
      >
        <div
          className={classNames({
            "md:w-1/2": true,
            "w-full": layout === "Image Bottom",
            "flex ": layout === "Image Left",
            "text-center": layout !== "Image Left",
          })}
        >
          <div
            className={classNames({
              "flex items-center": layout === "Image Left",
            })}
          >
            <div>
              <h1 className="text-black-950 font-bold">{heading}</h1>

              <div className="my-16">
                <a href={href} >
                <Button
                  label={label}
                  type={type}
                  size={size}
                />
                </a>
              </div>
            </div>
          </div>
        </div>
        {layout === "Image Left" && (
          <div className="flex md:w-1/2 items-center justify-end">
            <img src={image} alt="image" />
          </div>
        )}
        {layout === "Image Bottom" && (
          <div className="flex items-center justify-center">
            <img className="w-10/12" src={image} alt="image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
