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
    <div  className=" lg:pb-24 pb-16 px-4 container mx-auto">
      <h2 className="text-4xl text-center pb-10 ">{heading}</h2>
      {/* new */}
      <div className=" ">
        <div>
          <div className=" text-center mx-auto mb-[-7%] sm:mb-[-5%] md:mb-0">
            <div className="flex justify-center">
              <div className="">
                <div>
                  <div className="text-lg md:text-2xl flex items-center justify-start my-2 md:my-5 ">
                    👩
                  </div>
                  <div className="flex items-center flex-col rotate-[235deg] m-3 mt-0">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `
                              <svg aria-hidden="true" class="w-10 md:w-16 edgenetworkprimaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <line class="lineanimation" x1="1" y1="1" x2="190" y2="1" />
                              </svg>                  
                          `,
                      }}
                    />
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `
                          <svg aria-hidden="true" class="w-10 md:w-16 edgenetworksecondaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <line class="lineanimation" x1="1" y1="1" x2="190" y2="1" />
                          </svg>                            
                      `,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className=" mx-3">
                <div className="flex items-center justify-end my-2 md:my-4 lg:my-[26px] -mr-[8px]" >
                  <div className="text-lg md:text-2xl ">👨</div>
                </div>
                <div>
                  <div className="flex items-center flex-col rotate-[300deg] ms-2 mt-0">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `
                              <svg aria-hidden="true" class="w-10 md:w-16 edgenetworkprimaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <line class="lineanimation" x1="1" y1="1" x2="190" y2="1" />
                              </svg>                  
                          `,
                      }}
                    />
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `
                          <svg aria-hidden="true" class="w-10 md:w-16 edgenetworksecondaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <line class="lineanimation" x1="1" y1="1" x2="190" y2="1" />
                          </svg>                            
                      `,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
            className="relative min-w-[50px] md:min-w-[70px] md:min-w-[96px] max-w-max z-20 shadow-xl text-[10px] md:text-sm px-2 py-2 md:p-3 mx-auto bg-gradient-to-r from-primary via-purple-500 to-secondary text-white font-medium rounded-lg">
            {city ? "Toronto" : "New York"}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <div className="-mr-5 ">
              <div className="text-lg md:text-2xl flex items-center justify-start my-2 md:my-[12px] ">
                👨
              </div>
              <div className="">
                <div className="flex items-center flex-col rotate-[215deg] m-3 ">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                              <svg aria-hidden="true" class="w-10 md:w-16 edgenetworksecondaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <line class="lineanimation" x1="1" y1="1" x2="190" y2="1" />
                              </svg>                  
                          `,
                    }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                          <svg aria-hidden="true" class="w-10 md:w-16  edgenetworkprimaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <line class="lineanimation" x1="1" y1="1" x2="190" y2="1" />
                          </svg>                            
                      `,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="-mr-5 mt-14">
              <div>
                <div className="flex items-center flex-col rotate-[140deg] m-3">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                              <svg aria-hidden="true" class="w-10 md:w-16 edgenetworkprimaryline " viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <line class="lineanimation" x1="1" y1="1" x2="190" y2="1" />
                              </svg>                  
                          `,
                    }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                          <svg aria-hidden="true" class="w-10 md:w-16  edgenetworksecondaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <line class="lineanimation" x1="1" y1="1" x2="190" y2="1" />
                          </svg>                            
                      `,
                    }}
                  />
                </div>
              </div>
              <div className="text-lg md:text-2xl flex items-center justify-start my-2 md:my-2">
                👨
              </div>
            </div>
          </div>
          <span className="relative text-center z-20 min-w-[50px] md:min-w-[70px] md:min-w-[96px] shadow-xl text-[10px] md:text-sm px-2 py-2 md:p-3 bg-gradient-to-r from-primary via-purple-500 to-secondary text-white font-medium rounded-lg inline-block">
          {city ? "Chicago" : "New York"}
          </span>
          <div className="rotate-[180deg]">
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <svg aria-hidden="true" class="w-8 md:w-20 lg:w-24 h-8 edgenetworkprimaryline" viewBox="0 0 110 2" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <line class="lineanimation" x1="1" y1="1" x2="190" y2="1" />
                  </svg>                  
                  `,
              }}
            />
          </div>
          <div className="relative ">
            <div className="rotate-[270deg] absolute ml-0 left-0 right-0 top-[-100%]">
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                  <svg aria-hidden="true" class="w-10 md:w-20 lg:w-24 md:w-20 lg:w-24 h-6 md:h-4 edgenetworkprimaryline" viewBox="0 0 110 2" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <line class="lineanimation" x1="1" y1="1" x2="190" y2="1" />
                  </svg>                  
                  `,
                }}
              />
            </div>
            <span className="relative z-40 shadow-xl min-w-[50px] md:min-w-[70px] text-center md:min-w-[96px] text-[10px] md:text-sm px-2 py-2 md:p-3 bg-gradient-to-r from-primary via-purple-500 to-secondary text-white font-medium rounded-lg inline-block">
              Origin 🤖
            </span>
            <div className="rotate-[90deg] absolute left-0 right-0 bottom-[-100%]">
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                    <svg aria-hidden="true" class="w-10 md:w-20 lg:w-24 h-6 sm:h-8 md:h-4 edgenetworkprimaryline" viewBox="0 0 110 2" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <line class="lineanimation" x1="1" y1="1" x2="190" y2="1" />
                    </svg>                  
                    `,
                }}
              />
            </div>
          </div>
          <div className="rotate-[0deg]">
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                    <svg aria-hidden="true" class="w-8 md:w-20 lg:w-24 edgenetworkprimaryline" viewBox="0 0 110 2" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <line class="lineanimation" x1="1" y1="1" x2="190" y2="1" />
                    </svg>                  
                    `,
                }}
              />
          </div>
          <div className="relative min-w-[50px] md:min-w-[70px] md:min-w-[96px] text-center z-20 shadow-xl text-[10px] md:text-sm px-2 py-2 md:p-3 bg-gradient-to-r from-primary via-purple-500 to-secondary text-white font-medium rounded-lg inline-block">
          {city ? "Sydney" : "New York"}    
          </div>
          <div>
            <div className="-ml-5 ">
              <div className="text-lg md:text-2xl flex items-center justify-end my-2 md:my-[12px] ">
                🧑🏽
              </div>
              <div className="">
                <div className="flex items-center flex-col rotate-[325deg] m-3 ">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                              <svg aria-hidden="true" class="w-10 md:w-16 edgenetworksecondaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <line class="lineanimation" x1="1" y1="1" x2="190" y2="1" />
                              </svg>                  
                          `,
                    }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                          <svg aria-hidden="true" class="w-10 md:w-16  edgenetworkprimaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <line class="lineanimation" x1="1" y1="1" x2="190" y2="1" />
                          </svg>                            
                      `,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="-ml-5 mt-14">
              <div>
                <div className="flex items-center flex-col rotate-[30deg] m-3">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                              <svg aria-hidden="true" class="w-10 md:w-16 edgenetworkprimaryline " viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <line class="lineanimation" x1="1" y1="1" x2="190" y2="1" />
                              </svg>                  
                          `,
                    }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                          <svg aria-hidden="true" class="w-10 md:w-16  edgenetworksecondaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <line class="lineanimation" x1="1" y1="1" x2="190" y2="1" />
                          </svg>                            
                      `,
                    }}
                  />
                </div>
              </div>
              <div className="text-lg md:text-2xl flex items-center justify-end my-2 md:my-2">
                👨🏻
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center mx-auto mt-[-7%] sm:mt-[-5%] md:mt-0">
          <div
            className="relative max-w-max min-w-[55px] md:min-w-[70px] md:min-w-[96px]  z-20 shadow-xl text-[10px] md:text-sm px-2 py-2 md:p-3 mx-auto bg-gradient-to-r from-primary via-purple-500 to-secondary text-white font-medium rounded-lg"
          >
            {city ? city : " "}
          </div>
          <div className="flex justify-center -mt-5">
            <div className="my-8">
              <div className="relative">
                <div className="lg:flex items-center flex-col rotate-[90deg] -mt-9 lg:mt-0 absolute left-[10%] right-0 ">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                              <svg aria-hidden="true" class="w-10 md:w-20 lg:w-24 h-8 md:h-4  edgenetworkprimaryline " viewBox="0 0 110 2" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <line class="lineanimation" x1="1" y1="1" x2="190" y2="1" />
                              </svg>                  
                          `,
                    }}
                  />
                  {/* <div dangerouslySetInnerHTML={{__html:`
                          <svg aria-hidden="true" class="w-10 md:w-16 edgenetworksecondaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <line class="lineanimation" x1="1" y1="1" x2="190" y2="1" />
                          </svg>                            
                      `}}/> */}
                </div>
              </div>
              <div className="text-lg md:text-2xl flex items-center justify-center my-2 md:my-12 lg:my-14 gap-2">
                👨
                <span className="text-slate-700 inline-flex text-sm -mr-14">{" it's you!"}</span>
              </div>
            </div>
            {/* <div className="my-8">
                <div>
                    <div className="flex items-center flex-col rotate-[59deg] m-3 mt-0">
                          <div dangerouslySetInnerHTML={{__html:`
                              <svg aria-hidden="true" class="w-10 md:w-16 edgenetworkprimaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <line class="lineanimation" x1="1" y1="1" x2="190" y2="1" />
                              </svg>                  
                          `}}/>
                          <div dangerouslySetInnerHTML={{__html:`
                          <svg aria-hidden="true" class="w-10 md:w-16 edgenetworksecondaryline" viewBox="0 0 110 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <line class="lineanimation" x1="1" y1="1" x2="190" y2="1" />
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
