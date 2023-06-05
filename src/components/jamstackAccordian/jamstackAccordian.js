import { React, useEffect, useState } from "react";

const JamstackAccordion = ({ accordin }) => {
  const [active, setActive] = useState({});

  const toggleAccordion = (accordianItem) => {
    if (active !== accordianItem) {
      setActive(accordianItem);
    } else {
      setActive({});
    }
  };
  useEffect(() => {
    accordin?.length && setActive(accordin[0]);
  }, [accordin]);

  return (
    <div className="">
      {accordin?.map((item, index) => (
        <div className="accordion-item cursor-pointer" key={index}>
          <div
            className="accordion-title flex justify-between lg:p-5 py-4 lg:py-5 lg:ps-0 items-center"
            onClick={() => toggleAccordion(item)}
          >
            <div className="flex items-start lg:items-center  justify-center gap-2">
              <div className="diamond mt-5 lg:mt-0 w-1 h-1 p-3 bg-tertiary"></div>
              <h3>{item.label}</h3>
            </div>
          </div>
          {active === item && (
            <div className="accordion-content flex-col lg:flex-row justify-between flex gap-4 pl-9 pr-9 sm:pr-0 pb-5">
              <div className="lg:w-1/2">
                <p className="w-full mb-4">{item.description}</p>
              </div>
              <div className="w-full md:w-1/2 flex justify-end items-center">
                <img className="w-full h-full" src={`${item.image}`} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default JamstackAccordion;
