import React from "react";
import Aboutone from "../svgAnimations/about/articleOne";
import Abouttwo from "../svgAnimations/about/articleTwo";
import Aboutthree from "../svgAnimations/about/articleThree";
import Aboutfour from "../svgAnimations/about/articleFour";
import Aboutfive from "../svgAnimations/about/articleFive";

export const AboutArticle = ({ jamStackProcess }) => {
  const MAP_ABOUT_COMPONENT = {
    aboutone: Aboutone,
    abouttwo: Abouttwo,
    aboutthree: Aboutthree,
    aboutfour: Aboutfour,
    aboutfive: Aboutfive,
  };

  return (
    <div className="">
      <div className="pb-10">
        <h2>{jamStackProcess?.heading}</h2>
      </div>
      <div>
        <div>
          <div className="">
            <ul className="space-y-8">
              {jamStackProcess?.processArray?.map((item, index) => {
                const Component =
                  MAP_ABOUT_COMPONENT[item.animationType] || Aboutone;
                return (
                  <li
                    key={index}
                    className={
                      item.layout === "imageRight"
                        ? "flex flex-col lg:flex-row mb-0"
                        : "flex flex-col lg:flex-row-reverse"
                    }
                  >
                    <div className="lg:w-1/2 flex flex-col justify-center">
                      <h3 className="pb-5 heading-5">{item.title}</h3>
                      <ul className="list-disc list-inside text-tertiary">
                        {item?.labelArray?.map((label, labelIndex) => (
                          <li className="pb-4" key={labelIndex}>
                            <div className="text-black inline-block">
                              {label.label}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="lg:w-1/2">
                      <Component />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
