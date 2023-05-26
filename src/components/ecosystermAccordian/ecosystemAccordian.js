import { React, useState } from "react";

const EcosystemAccordion = ({ accordin }) => {
  const [active, setActive] = useState({});

  const toggleAccordion = (accordianItem) => {
    if (active !== accordianItem) {
      setActive(accordianItem);
    } else {
      setActive({})
    }
  };
  return (
    <div className="lg:px-12 px-3">
      {accordin?.map((item, index) => (
        <div className="accordion-item border-t-2 border-accent-200 cursor-pointer" key={index}>
          <div
            className="accordion-title flex justify-between lg:p-5 items-center"
            onClick={() => toggleAccordion(item)}
          >
            <div>
              <h5>{item.label}</h5>
            </div>
            
          </div>
          {active === item && (
            <div className="accordion-content  lg:ml-5 pb-5">{item.description}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EcosystemAccordion;
