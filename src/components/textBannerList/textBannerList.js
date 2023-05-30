import React from "react";

function TextBannerList({ heading, title, listItems }) {
  return (
    <div className="bg-secondary">
      <div className="">
        <div className="grid grid-col-1 lg:grid-cols-2">
          <div className="">
            <h2 className="p-5 text-white lg:p-11 lg:pl-16 sm:p-10">
              {heading}
            </h2>
          </div>
          <div className="bg-accent-100 p-5 sm:p-10  lg:p-11 lg:pl-20 rounded-t-3xl lg:rounded-r-none lg:rounded-l-3xl">
            <h4 className="mb-14 font-normal">{title}</h4>
            <div>
              {listItems &&
                listItems?.map((item, index) => (
                  <div key={index}>
                    <ul>
                      <li className="p-2 flex gap-4">
                        <div
                          className={`${item.icon} w-5 h-5 bg-tertiary `}
                        ></div>
                        <div className={"w-42 h-30 font-bold "}>
                          {item.label}
                        </div>
                      </li>
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextBannerList;
