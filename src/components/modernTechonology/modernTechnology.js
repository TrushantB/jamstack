import React from "react";
import Button from "../form/button/Button";
import Link from "next/link";

function MordernTechnology({
  heading,
  type,
  label,
  size,
  href,
  description,
  isInner = false,
}) {
  return (
    <>
      <div
        className={`${
          isInner
            ? "text-left container mx-auto "
            : "text-center container lg:w-8/12 mx-auto"
        } lg:w-full`}
      >
        <h2 className="pb-4">{heading}</h2>
        {description && (
          <div className={`heading-4 ${isInner ? "lg:w-10/12" : " "} pt-2`}>
            <p>{description}</p>
          </div>
        )}
        {label && (
          <div className="pb-10">
            <Link href={href} role="button" aria-label={label}  className="btn">
              {label}
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default MordernTechnology;
