import React from "react";

export const AboutArticle = ({ jamStackProcess }) => {
  console.log("processArray", jamStackProcess);
  
  return (
    <div>
      <div>
        <h1>{jamStackProcess?.heading}</h1>
      </div>
      <div>
        <div>
          <div className="">
            <ul>
              {jamStackProcess?.processArray?.map((item, index) => (
                <div key={index} className={item.layout === "imageRight" ? "flex flex-row-reverse" : "flex flex-row"}>
                  <div>
                    <h5>{item.title}</h5>
                    <ul>
                      {item?.labelArray?.map((label, labelIndex) => (
                        <li key={labelIndex}>{label.label}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
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
