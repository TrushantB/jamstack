import { React, useState } from "react";

const Accordion = ({ accordin }) => {
  const [activeItems, setActiveItems] = useState({});

  const toggleAccordion = (index) => {
    setActiveItems((prevActiveItems) => ({
      ...prevActiveItems,
      [index]: !prevActiveItems[index],
    }));
  };
  return (
    <div className="px-12">
      {accordin?.map((item, index) => (
        <div className="accordion-item border-t-2 border-accent-200 cursor-pointer" key={index}>
          <div
            className="accordion-title flex justify-between p-5 items-center"
            onClick={() => toggleAccordion(index)}
          >
            <div>
              <h5>{item.label}</h5>
            </div>
            <div>
              {activeItems[index] ? (
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
          {activeItems[index] && (
            <div className="accordion-content p-2">{item.description}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
