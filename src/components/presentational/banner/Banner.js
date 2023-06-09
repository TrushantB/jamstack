import React from "react";
import Link from "next/link";
import classNames from "classnames";
import Ecomj from "@/components/svgAnimations/banner/ecomj";
import Webj from "@/components/svgAnimations/banner/webj";
import Mobj from "@/components/svgAnimations/banner/mobj";
import Faq from "@/components/svgAnimations/banner/faq";
import Home from "@/components/svgAnimations/banner/home";

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
  animationType,
}) => {
  const MAP_STEPPER_COMPONENT = {
    ecomj: Ecomj,
    webj: Webj,
    mobj: Mobj,
    faq: Faq,
    home: Home,
  };
  const Component = MAP_STEPPER_COMPONENT[animationType] || Ecomj;

  return (
    <div className="container mx-auto lg:py-24 py-16">
      <div
        className={classNames({
          "md:flex justify-center px-5 flex-col sm:flex-row": true,
          "flex-col-reverse sm:flex-col": layout === "Image Bottom",
        })}
      >
        <div
          className={classNames({
            // "md:w-1/2": true,
            "w-full mt-0 md:mb-12 text-center": layout === "Image Bottom",
            "flex lg:w-3/5 ": layout === "Image Left",
          })}
        >
          <div
            className={classNames({
              "flex items-center md:pr-0": layout === "Image Left",
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
        {layout === "image-left" && (
          <div className="flex sm:justify-center lg:w-2/5 items-start lg:items-start lg:justify-end mt-10 lg:mt-0">
            <Component />
          </div>
        )}
        {layout === "Image Bottom" && (
          <div className="flex items-center justify-center">
            <img
              className="w-10/12 mt-12 sm:mt-0"
              src={image}
              alt="image"
              srcSet=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
