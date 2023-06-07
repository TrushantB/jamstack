import React, { useState, useEffect } from "react";
const apiKey = process.env.NEXT_PUBLIC_EDGE_NETWORK_API
const apiLink = process.env.NEXT_PUBLIC_EDGE_NETWORK_API_KEY

function EdgeNetwork({ heading, image }) {

  const [city , setCity] = useState("")
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiKey}apiKey=${apiLink}`);
        const positionData = await response.json();
        setCity(positionData.city.name + ' ' + positionData.country.flag);
      } catch (error) {
        console.error("Error fetching position data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" lg:pb-24 pb-16 px-4 container mx-auto">
      <h2 className="text-4xl text-center  pb-10 ">{heading}</h2>
      {/* new */}
      <div className=" ">
        <div>
          <div className=" text-center mx-auto -mb-9 lg:-mb-6">
            <div className="flex justify-center">
              <div className="">
                <div>
                  <div className="text-lg md:text-2xl flex items-center justify-start my-2 md:my-4">
                    👩
                  </div>
                  <div className="flex items-center flex-col rotate-[57deg] m-3 mt-0">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `
                              <svg class="w-10 md:w-16 edgenetworkprimaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <line class="" x1="1" y1="1" x2="190" y2="1" />
                              </svg>                  
                          `,
                      }}
                    />
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `
                          <svg class="w-10 md:w-16 edgenetworksecondaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <line x1="1" y1="1" x2="190" y2="1" />
                          </svg>                            
                      `,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex items-center justify-end my-2 md:my-4">
                  <div className="text-lg md:text-2xl ">👨</div>
                </div>
                <div>
                  <div className="flex items-center flex-col rotate-[120deg] m-3 mt-0">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `
                              <svg class="w-10 md:w-16 edgenetworkprimaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <line x1="1" y1="1" x2="190" y2="1" />
                              </svg>                  
                          `,
                      }}
                    />
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `
                          <svg class="w-10 md:w-16 edgenetworksecondaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <line x1="1" y1="1" x2="190" y2="1" />
                          </svg>                            
                      `,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="relative min-w-[70px] md:min-w-[96px] z-20 shadow-xl text-xs md:text-sm px-1 py-2 md:p-3  text-center mx-auto  font-medium edgenetworkbtn text-[#423d3d]  rounded-lg"
            >
              Canada
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <div className="my-8 -mr-5">
              <div className="text-lg md:text-2xl flex items-center justify-start my-2 md:my-4">
                👨
                <span className="text-slate-300 text-base hidden ">
                  {"it's you!"}
                </span>
              </div>
              <div>
                <div className="flex items-center flex-col rotate-[40deg] m-3">
                  <div
                    className=""
                    dangerouslySetInnerHTML={{
                      __html: `
                              <svg class="w-10 md:w-16 edgenetworkprimaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <line x1="1" y1="1" x2="190" y2="1" />
                              </svg>                  
                          `,
                    }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                          <svg class="w-10 md:w-16 edgenetworksecondaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <line x1="1" y1="1" x2="190" y2="1" />
                          </svg>                            
                      `,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="my-8 -mr-5">
              <div>
                <div className="flex items-center flex-col rotate-[140deg] m-3">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                              <svg class="w-10 md:w-16 edgenetworkprimaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <line x1="1" y1="1" x2="190" y2="1" />
                              </svg>                  
                          `,
                    }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                          <svg class="w-10 md:w-16 edgenetworksecondaryline edgenetworkprimaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <line x1="1" y1="1" x2="190" y2="1" />
                          </svg>                            
                      `,
                    }}
                  />
                </div>
              </div>
              <div className="text-lg md:text-2xl flex items-center justify-start my-2 md:my-4">
                👨
              </div>
            </div>
          </div>
          <div className="relative text-center z-20 min-w-[70px] md:min-w-[96px] shadow-xl text-xs md:text-sm px-1 py-2 md:p-3 edgenetworkbtn font-medium text-[#423d3d]  rounded-lg">
            Detroit
          </div>
          <div className="rotate-[180deg]">
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <svg class="w-8 md:w-20 lg:w-24 edgenetworkprimaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <line x1="1" y1="1" x2="190" y2="1" />
                  </svg>                  
                  `,
              }}
            />
          </div>
          <div className="relative ">
            <div className="rotate-[90deg] absolute md:left-[7%] lg:left-1 top-[-80%] lg:-ml-[12px]">
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                  <svg class="w-16 md:w-20 lg:w-24 edgenetworkprimaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <line x1="1" y1="1" x2="190" y2="1" />
                  </svg>                  
                  `,
                }}
              />
            </div>
            <div className="relative z-20 shadow-xl min-w-[70px] text-center md:min-w-[96px] text-xs md:text-sm px-1 py-2 md:p-3 edgenetworkbtn font-medium text-[#423d3d] rounded-lg">
              Origin 🤖
            </div>
            <div className="rotate-[90deg] absolute md:left-[7%] lg:left-0 bottom-[-80%] lg:-ml-[8px]">
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                  <svg class="w-16 md:w-20 lg:w-24 edgenetworkprimaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <line x1="1" y1="1" x2="190" y2="1" />
                  </svg>                  
                  `,
                }}
              />
            </div>
          </div>
          <div className="rotate-[180deg]">
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <svg class="w-8 md:w-20 lg:w-24 edgenetworkprimaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <line x1="1" y1="1" x2="190" y2="1" />
                  </svg>                  
                  `,
              }}
            />
          </div>
          <div className="relative min-w-[70px] md:min-w-[96px] text-center z-20 shadow-xl text-xs md:text-sm px-1 py-2 md:p-3 edgenetworkbtn font-medium text-[#423d3d] rounded-lg">
            Sydney
          </div>
          <div>
            <div className="-ml-5 my-8">
              <div className="text-lg md:text-2xl flex items-center justify-end my-2 md:my-4">
                🧑🏽
              </div>
              <div>
                <div className="flex items-center flex-col rotate-[320deg] m-3">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                              <svg class="w-10 md:w-16 edgenetworkprimaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <line x1="1" y1="1" x2="190" y2="1" />
                              </svg>                  
                          `,
                    }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                          <svg class="w-10 md:w-16 edgenetworksecondaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <line x1="1" y1="1" x2="190" y2="1" />
                          </svg>                            
                      `,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="-ml-5 my-8">
              <div>
                <div className="flex items-center flex-col rotate-[220deg] m-3">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                              <svg class="w-10 md:w-16 edgenetworkprimaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <line x1="1" y1="1" x2="190" y2="1" />
                              </svg>                  
                          `,
                    }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                          <svg class="w-10 md:w-16 edgenetworksecondaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <line x1="1" y1="1" x2="190" y2="1" />
                          </svg>                            
                      `,
                    }}
                  />
                </div>
              </div>
              <div className="text-lg md:text-2xl flex items-center justify-end my-2 md:my-4">
                👨🏻
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center mx-auto -my-9 lg:-my-6">
          <button
            type="button"
            className="relative min-w-[70px] md:min-w-[96px] z-20 shadow-xl text-xs md:text-sm px-1 py-2 md:p-3 text-[#423d3d] mx-auto  font-medium edgenetworkbtn rounded-lg"
          >
            {city ? city : "India"}
          </button>
          <div className="flex justify-center -mt-5">
            <div className="my-8">
              <div>
                <div className="flex items-center flex-col rotate-[90deg] mt-0 -ml-1">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                              <svg class="w-16 md:w-20 lg:w-24 edgenetworkprimaryline " viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <line class="" x1="1" y1="1" x2="190" y2="1" />
                              </svg>                  
                          `,
                    }}
                  />
                  {/* <div dangerouslySetInnerHTML={{__html:`
                          <svg class="w-10 md:w-16 edgenetworksecondaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <line x1="1" y1="1" x2="190" y2="1" />
                          </svg>                            
                      `}}/> */}
                </div>
              </div>
              <div className="text-lg md:text-2xl flex items-center justify-center my-7 md:my-10">
                👨
                <span className="text-slate-400 text-sm ">{" it's you!"}</span>
              </div>
            </div>
            {/* <div className="my-8">
                <div>
                    <div className="flex items-center flex-col rotate-[59deg] m-3 mt-0">
                          <div dangerouslySetInnerHTML={{__html:`
                              <svg class="w-10 md:w-16 edgenetworkprimaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <line x1="1" y1="1" x2="190" y2="1" />
                              </svg>                  
                          `}}/>
                          <div dangerouslySetInnerHTML={{__html:`
                          <svg class="w-10 md:w-16 edgenetworksecondaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <line x1="1" y1="1" x2="190" y2="1" />
                          </svg>                            
                      `}}/>
                    </div>
                </div> 
                <div className="flex items-center justify-end my-2 md:my-4">
                  <div className="text-lg md:text-2xl ">
                    👩
                  </div>
                </div>
              </div>    */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EdgeNetwork;
