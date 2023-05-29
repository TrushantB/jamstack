import React from "react";
import Link from 'next/link'
import classNames from "classnames";
import Button from "../../form/button/Button";


const Banner = ({ heading, image, type, size, label, layout, href, description }) => {
  return (
    <div className="container mx-auto">
      <div
        className={classNames({
          "md:flex justify-center px-5 py-24": true,
          "flex-col-reverse": layout === "Image Bottom",
        })}
      >
        <div
          className={classNames({
            // "md:w-1/2": true,
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
              <h1 className="font-bold text-black-950">{heading}</h1>
              {description && <div>
                <p className="pt-5 ">{description}</p>
              </div>}

              {label && <div className="my-16">
                <Link href={`${href}`} >
                  <Button
                    label={label}
                    type={type}
                    size={size}
                  />
                </Link>
              </div>}

            </div>
          </div>
        </div>
        {layout === "Image Left" && (
          <div className="flex items-start justify-end md:w-1/2 lg:items-center">
            <img src={image} alt="image" />
          </div>
        )}
        {layout === "Image Bottom" && (
          <div className="flex items-center justify-center">
            <img className="w-10/12" src={image} alt="image" srcSet="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
