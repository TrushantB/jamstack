import { React, useState } from "react";

const Accordion = ({ accordin, isInner=false }) => {
  const [active, setActive] = useState({});

  const toggleAccordion = (accordianItem) => {
    if (active !== accordianItem) {
      setActive(accordianItem);
    } else {
      setActive({})
    }
  };
  return (
    <div className={isInner ? "my-6": 'lg:px-12 px-3'}>
      {accordin?.map((item, index) => (
        <div className={`accordion-item border-t-2 border-accent-200 cursor-pointer ${isInner ? "": 'p-5'}`} key={index}>
          <div
            className={`accordion-title flex justify-between items-center ${isInner ? "py-5": 'lg:p-5 '}`}
            onClick={() => toggleAccordion(item)}
          >
            <div>
              <h5 className={`${isInner ? 'text-base': ''}`}>{item.label}</h5>
            </div>
            <div>
              {active === item ? (
                <svg
                  style={{ transform: "rotate(180deg)" }}
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  id="magicoon-Filled"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>chevron-down</title>
                  <g id="chevron-down-Filled">
                    <path
                      id="chevron-down-Filled-2"
                      data-name="chevron-down-Filled"
                      className="cls-1"
                      d="M21.707,8.707l-9,9a1,1,0,0,1-1.414,0l-9-9A1,1,0,1,1,3.707,7.293L12,15.586l8.293-8.293a1,1,0,1,1,1.414,1.414Z"
                    />
                  </g>
                </svg>
              ) : (
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  id="magicoon-Filled"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>chevron-down</title>
                  <g id="chevron-down-Filled">
                    <path
                      id="chevron-down-Filled-2"
                      data-name="chevron-down-Filled"
                      className="cls-1"
                      d="M21.707,8.707l-9,9a1,1,0,0,1-1.414,0l-9-9A1,1,0,1,1,3.707,7.293L12,15.586l8.293-8.293a1,1,0,1,1,1.414,1.414Z"
                    />
                  </g>
                </svg>
              )}
            </div>
          </div>
          {active === item && (
            <div className={`accordion-content  ${isInner ? "": 'lg:ml-5 '} pb-5`}>{item.description}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
