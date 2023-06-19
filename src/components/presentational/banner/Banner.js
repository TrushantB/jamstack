import React from "react";
import Link from "next/link";
import classNames from "classnames";
import Ecomj from "@/components/svgAnimations/banner/ecomj";
import Webj from "@/components/svgAnimations/banner/webj";
import Mobj from "@/components/svgAnimations/banner/mobj";
import Faq from "@/components/svgAnimations/banner/faq";
import Home from "@/components/svgAnimations/banner/home";
import Pricing from "@/components/svgAnimations/banner/pricingDesktop";
import About from "@/components/svgAnimations/banner/about";
import Jamstack from "@/components/svgAnimations/jamstack/jamstack";


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
  const MAP_BANNER_LEFT_COMPONENT = {
    ecomj: Ecomj,
    webj: Webj,
    mobj: Mobj,
    faq: Faq,
    home: Home,
    about: About,
  };

  const MAP_BANNER_BOTTOM_COMPONENT = {
    pricing: Pricing,
    jamstack: Jamstack
  };
  const BannerLeft = MAP_BANNER_LEFT_COMPONENT[animationType] || Ecomj;

  const BannerBottom = MAP_BANNER_BOTTOM_COMPONENT[animationType] || Pricing;

  return (
    <div className="container mx-auto md:py-24 py-10">
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
            "flex lg:w-3/5 ":
              layout === "Image Left" || layout === "image-left",
          })}
        >
          <div
            className={classNames({
              "flex items-center md:pr-0":
                layout === "Image Left" || layout === "image-left",
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
                <div className="mt-8 md:mt-12 mb-4 lg:mb-0">
                  <Link href={`${href}`} role="button" className="btn" aria-label={label}>
                    {label}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        {(layout === "Image Left" || layout === "image-left") && (
          <div className="flex justify-center lg:w-2/5 items-start lg:items-start lg:justify-end mt-10 lg:mt-0">
            <BannerLeft />
          </div>
        )}
        {layout === "Image Bottom" && (
          <div className="flex items-center justify-center">
            <BannerBottom />
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
