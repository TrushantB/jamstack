import { React, useState } from "react";
import Button from "@/components/form/button/Button";
import Link from "next/link";

function OurClient({ heading, imageList, type, label, size, href }) {
  return (
    <div className="flex flex-col lg:flex-row container lg:mx-auto  py-16  lg:py-24">
      <div className="mb-12 md:mb-0 mx-4">
        <h2 className="lg:w-8/12 mb-7">{heading}</h2>
        <div className="mb-7 lg:0">
          <Link href={href} className="btn">
            {label}
          </Link>
        </div>
      </div>
      <div className="lg:w-7/12 mx-4 ">
        <ul className="grid grid-cols-3 border-t-2 border-b-2">
          {imageList &&
            imageList?.map((item, index) => (
              <>
                <li
                  className={` flex items-center px-4 py-4 lg:px-10 image w-full min-h-[140px] max-h-[140px] h-full
                ${
                  index % 3 !== 0 && (index + 1) % 3 !== 0
                    ? // TODO: Find better solution, This is temporary for now
                      index === 6 || index === 7
                      ? "border-l-2 border-r-2 border-collapse"
                      : "border-l-2 border-r-2 border-b-2"
                    : index !== 6
                    ? "border-b-2"
                    : "border-b-0"
                }`}
                  key={index}
                >
                  {item.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      className="w-full h-auto"
                      src={item.image}
                      alt={item.altTag}
                      href={item.href}
                    />
                  ) : (
                    <td colSpan="2"></td>
                  )}
                </li>
              </>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default OurClient;
