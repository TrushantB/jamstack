import React from "react";
import { CustomPortableText } from "../shared/CustomPortableText";

export default function BlogContentWriting({ author }) {
  return (
    <>
      <div className="mx-3 px-4 w-full bg-gray-50 rounded-2xl py-4">
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-start">
          <div className="md:w-1/5">
            <a href="#" className="inline-block">
              <img
                className="h-32 w-32 md:w-24 md:h-24 rounded-full object-cover ring-2 ring-gray-200 ring-offset-2"
                src={author?.image}
                alt={author?.alt}
              />
            </a>
          </div>
          <div className="md:w-4/5">
            <div className="flex items-center justify-between my-2 md:mt-0 md:mb-1">
              <a
                href="#"
                className="font-semibold hover:text-primary transition ease-in delay-50"
              >
                {author?.name}
              </a>
              <div>
                <ul className="flex gap-4">
                  {author?.socialSharing?.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item?.href}
                        target={item?.target}
                        aria-label={item.href}
                        className="font-semibold hover:text-primary transition ease-in delay-50"
                      >
                        <i className={item?.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <CustomPortableText
                paragraphClasses={"text-sm text-gray-500"}
                value={author?.description}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
