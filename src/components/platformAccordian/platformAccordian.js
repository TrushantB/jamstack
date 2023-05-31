import React, { useState } from 'react';



const PlatformAccordian = (accordian) => {
  const [active, setActive] = useState({});

  const toggleAccordion = (accordianItem) => {
    if (accordianItem !== active) {
      setActive(accordianItem);
    } else {
      setActive({});
    }
  };

  return (
    <>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:w-4/12 p-5'>
          <span className='icon-ic_growth text-7xl text-tertiary mb-4 inline-block'></span>
          <h2 className=''>{accordian?.heading}</h2></div>
        <div className='lg:w-8/12 px-5'>
          {accordian?.accordinaList.map((item, index) => (
            <div className="accordion-item" key={index}>
              <div className="accordion-title flex items-center gap-2 pt-4 pb-2 cursor-pointer" onClick={() => toggleAccordion(item)}>
                <div className="flex items-center gap-2">
                  <div>
                    {<div className={`diamond h-5 w-5  bg-primary ${active !== item ? 'invisible' : ''}`}></div>}
                  </div>

                  <h5>{item.label}</h5>
                </div>
                <div>
                  {active === item ? (
                    <svg
                      style={{ transform: 'rotate(180deg)' }}
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
              {active === item && <div className="accordion-content pb-5 pl-7">{item.description}</div>}
            </div>
          ))}
        </div>

      </div>

    </>
  );
};

export default PlatformAccordian;
