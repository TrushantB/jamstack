import { React, useEffect, useState } from "react";

const EcosystemAccordion = ({ accordin }) => {
  const [active, setActive] = useState({});

  const toggleAccordion = (accordianItem) => {
    if (active !== accordianItem) {
      setActive(accordianItem);
    } else {
      setActive({})
    }
  };
  useEffect(() => {
    accordin?.length && setActive(accordin[0])
  }, [accordin])
  return (
    <div className="">
      {accordin?.map((item, index) => (
        <div className="accordion-item cursor-pointer" key={index}>
          <div
            className="accordion-title flex justify-between lg:p-5 lg:ps-0 items-center"
            onClick={() => toggleAccordion(item)}
          >
            <div className="flex items-center gap-4">
              <div className="diamond w-5 h-5 bg-tertiary"></div>
              <h3>{item.label}</h3>
            </div>

          </div>
          {active === item && (

            <div className="accordion-content flex-col lg:flex-row justify-between flex gap-5 items-center lg:pl-10 pb-5">
              <div className="lg:w-1/2">
                <div className="w-full" dangerouslySetInnerHTML={{ __html: item.content }}></div>

              </div>
              <div className="w-1/2 flex justify-end items-center">

                <img className="w-full h-full" src={`${item.image}`} />
              </div>
            </div>


          )}
        </div>
      ))}
    </div>
  );
};

export default EcosystemAccordion;
