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
    <div className={isInner ? "my-6": 'lg:px-0 px-0'}>
      {accordin?.map((item, index) => (
        <div className={`accordion-item border-t border-accent-200 cursor-pointer ${isInner ? "": 'px-3 py-5'}`} key={index}>
          <div
            className={`accordion-title flex justify-between items-start gap-3 ${isInner ? "py-5": 'pb-0'}`}
            onClick={() => toggleAccordion(item)}
          >
            <div>
              <h5 className={`${isInner ? 'text-base font-body font-bold': 'text-2xl leading-normal lg:text-3xl font-normal lg:leading-snug'}`}>{item.label}</h5>
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
                  aria-hidden="true"
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
                  aria-hidden="true"
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
            <div className={`accordion-content  ${isInner ? "": 'lg:ml-0'} pt-4`}>{item.description}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
