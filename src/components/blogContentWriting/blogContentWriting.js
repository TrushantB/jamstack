import React from "react";

export default function BlogContentWriting({ author }) {

  return (
    <>
      <div className="px-3">
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 my-6">
          <div className="md:w-1/5">
            <img
              className="max-h-36 max-w-36"
              src={author?.image}
              alt={author?.alt}
            />
          </div>
          <div className="md:w-4/5">
            <div className="flex items-center justify-between my-4 md:mt-0 md:mb-4">
              <div>{author?.name}</div>
              <div>
                <ul className="flex gap-6">
                  {author?.socialSharing?.map((item, index) => (
                    <li key={index}>
                      <a href={item?.href} target={item?.target}>
                        <i className={item?.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <p>{author?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
