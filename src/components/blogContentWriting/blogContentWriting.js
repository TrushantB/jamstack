import React from "react";

export default function BlogContentWriting({ author }) {

  return (
    <>
      <div className="px-3">
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 my-6">
          <div className="md:w-1/5">
            <a href="#" className="inline-block">
              <img
                className="max-h-36 max-w-36"
                src={author?.image}
                alt={author?.alt}
              />
            </a>            
          </div>
          <div className="md:w-4/5">
            <div className="flex items-center justify-between my-4 md:mt-0 md:mb-4">
              <a href="#" className="font-semibold hover:text-primary transition ease-in delay-50">
                {author?.name}
              </a>
              <div>
                <ul className="flex gap-4">
                  {author?.socialSharing?.map((item, index) => (
                    <li key={index}>
                      <a href={item?.href} target={item?.target} 
                        className="font-semibold hover:text-primary transition ease-in delay-50">
                        <i className={item?.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">{author?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
