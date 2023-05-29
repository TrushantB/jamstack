import React from "react";
import Link from "next/link";
import classNames from "classnames";
import Button from "../../form/button/Button";

const Banner = ({
  heading,
  image,
  type,
  size,
  label,
  layout,
  href,
  description,
  isInner = false,
}) => {
  return (
    <div className="container mx-auto lg:py-24 py-16">
      <div
        className={classNames({
          "md:flex justify-center px-5 flex-col sm:flex-row   ": true,
          "flex-col-reverse": layout === "Image Bottom",
        })}
      >
        <div
          className={classNames({
            // "md:w-1/2": true,
            "w-full mt-0 md:mt-12": layout === "Image Bottom",
            "flex lg:w-1/2 ": layout === "Image Left",
            "text-center flex flex-col lg:flex-row lg:w-1/2": layout !== "Image Left",
          })}
        >
          <div
            className={classNames({
              "flex items-center md:pr-16 ": layout === "Image Left",
            })}
          >
            <div>
              <h1 className="text-black-950">{heading}</h1>
              {description && (
                <div>
                  <p className="pt-5 max-w-[70ch] mx-auto">{description}</p>
                </div>
              )}

              {label && (
                <div className="mt-12">
                  <Link href={`${href}`} className="btn">
                    {label}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        {layout === "Image Left" && (
          <div className="flex sm:justify-center lg:w-1/2 items-start lg:items-start lg:justify-end mt-10 lg:mt-0">
            <img src={image} alt="image" />
          </div>
        )}
        {layout === "Image Bottom" && (
          <div className="flex items-center justify-center">
            <img className="w-10/12 mt-12 sm:mt-0" src={image} alt="image" srcSet="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
