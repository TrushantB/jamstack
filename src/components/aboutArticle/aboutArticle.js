import React from "react";

export const AboutArticle = ({ jamStackProcess }) => {
  console.log("processArray", jamStackProcess);
  
  return (
    <div className="">
      <div className="pb-10" >
        <h2>{jamStackProcess?.heading}</h2>
      </div>
      <div>
        <div>
          <div className="">
            <ul>
              {jamStackProcess?.processArray?.map((item, index) => (
                <div key={index} className={item.layout === "imageRight" ? "flex flex-col lg:flex-row mb-14" : "flex flex-col lg:flex-row-reverse mb-14"}>
                  <div className="lg:w-1/2 flex flex-col justify-center">
                    <h5 className="pb-5">{item.title}</h5>
                    <ul className=" list-disc list-inside text-tertiary">
                      {item?.labelArray?.map((label, labelIndex) => (
                        <li className="pb-4 " key={labelIndex}><div className="text-black inline-block ">{label.label}</div></li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:w-1/2 ">
                    <img src={item.image} alt="image" />
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
