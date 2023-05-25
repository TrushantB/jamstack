import React from 'react'
export default function PricingPlan({ customPlan }) {
    return (
        <div>
            <div className="text-center">
                <h2 className="font-medium text-6xl">
                    {customPlan?.heading}
                </h2>
                <p className="my-6 text-xl px-4 lg:px-56">
                    {customPlan?.description}
                </p>
            </div>
            <div className="my-16 lg:flex">
                <div className="lg:w-1/2">
                    <div className="flex my-8 md:my-16 items-center gap-5 pl-16 md:pl-28 lg:pl-16 ">
                        <div className="w-14 h-14 bg-[#FF5223] rounded-full ">

                        </div>
                        <h3 className="text-3xl md:text-5xl font-medium">
                            {customPlan?.platform?.heading}
                        </h3>
                    </div>
                    <div className="flex justify-center items-center gap-x-12 gap-y-8 lg:gap-x-24 lg:gap-y-16 flex-wrap">
                        {
                            customPlan?.platform?.platforms?.map((platform, index) => {
                                return (
                                    <div key={index} className="w-1/3  flex items-center justify-center py-5 px-10 border-2 border-transparent rounded-2xl shadow-md">
                                        <div>
                                            <img className="max-h-28 max-w-[112px] mx-auto" src="./src/assets/image/ecommj.svg" alt="ecommj" />
                                            <p className="font-medium text-xl text-center md:text-3xl mt-2">
                                                {platform.name}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        {/* <div className="w-1/3  flex items-center justify-center py-5 px-10 border-2 border-transparent rounded-2xl shadow-md">
                            <div>
                                <img className="max-h-28 max-w-[112px] mx-auto" src="./src/assets/image/ecommj.svg" alt="ecommj" />
                                <p className="font-medium text-xl text-center md:text-3xl mt-2">
                                    ecommJ
                                </p>
                            </div>
                        </div>
                        <div className="w-1/3  flex items-center justify-center py-5 px-10 border-2 border-transparent rounded-2xl shadow-md">
                            <div>
                                <img className="max-h-28 max-w-[112px] mx-auto" src="./src/assets/image/webJ.svg" alt="webJ" />
                                <p className="font-medium text-xl text-center md:text-3xl mt-2">
                                    webJ
                                </p>
                            </div>
                        </div>
                        <div className="w-1/3  flex items-center justify-center py-5 px-10 border-2 border-transparent rounded-2xl shadow-md active:border-2 active:border-rose-400">
                            <div>
                                <img className="max-h-28 max-w-[112px]  mx-auto" src="./src/assets/image/mobj+webJ.svg" alt="ecommj" />
                                <p className="font-medium text-xl text-center md:text-3xl mt-2 ">
                                    mobj+webJ
                                </p>
                            </div>
                        </div>
                        <div className="w-1/3  flex items-center justify-center py-5 px-10 border-2 border-transparent rounded-2xl shadow-md">
                            <div>
                                <img className="max-h-28 max-w-[112px]  mx-auto" src="./src/assets/image/mobj.svg" alt="mobj" />
                                <p className="font-medium text-xl text-center md:text-3xl mt-2">
                                    mobj
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="lg:w-1/2 rounded-[40px] bg-[#F1F2F6] pl-4 my-10 lg:my-0 lg:pl-24 pr-7 py-16">
                    <h3 className="text-5xl font-medium text-center">
                        Ideal Plan
                    </h3>
                    <ul className="pb-16 lg:pb-52">
                        <li>
                            <div>
                                <p className="w-64 my-8 text-4xl">
                                    Platform
                                </p>
                                <div className="flex w-64 shadow-lg py-3 px-4 rounded-lg bg bg-sky-600 my-8 text-white text-4xl items-center justify-between">
                                    <p>
                                        ecommJ
                                    </p>
                                    <span className="w-6 h-6 rounded-full flex justify-center items-center cursor-pointer  bg-slate-300 text-center ">
                                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Menu / Close_LG">
                                                <path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p className="w-64 text-rose-400  my-8 text-4xl">
                                    Frontend
                                </p>
                                <div className="px-16 py-11 border-dashed bg-red-100 border-2 text-2xl text-center border-rose-400">
                                    Drag and Drop
                                </div>
                            </div>
                        </li>
                        <li className="w-64 text-slate-400 my-8 text-4xl">
                            Backend
                        </li>
                        <li className="w-64 text-slate-400 my-8 text-4xl">
                            Other Services
                        </li>
                    </ul>
                    <div>
                        <button type="button" className="py-4 px-5 bg-[#F0027F] rounded-[40px] text-2xl text-white font-semibold">
                            Schedule Meeting
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}