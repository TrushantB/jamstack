import React from "react";
import Button from "../form/button/Button";

const ProgressBar = () => {
  return (
    <div className="container mx-auto pt-24 lg:pt-14">
      <h4 className=" font-normal mb-14 ml-5">Here are your web vitals</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="relative pt-1 mx-5 ">
          <h5 className="mb-5 text-2xl sm:text-3xl">
            First contentful paint (FCP)
          </h5>
          <div className="">
            <div className="flex justify-center items-center w-3 bg-white flex-col -mb-3 relative  left-[50%] ">
              <h6>2.2ms</h6>
              <div className="report-dot w-4 h-4 bg-black rounded-full"></div>
              <div className="report-line w-1 py-[12px] bg-black"></div>
            </div>
            <div className="overflow-hidden h-3 mb-4 text-xs flex rounded gap-2 relative -z-10">
              <div
                style={{ width: "60%" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#449237]"
              ></div>
              <div
                style={{ width: "10%" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-tertiary"
              ></div>
              <div
                style={{ width: "30%" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#F0BB00]"
              ></div>
            </div>
          </div>
        </div>

        <div className="relative pt-1 mx-5 ">
          <h5 className="mb-5 text-2xl sm:text-3xl">First Input Delay (FID)</h5>
          <div className="">
            <div className="flex justify-center items-center w-3 bg-white flex-col -mb-3 relative z-50 left-[90%] ">
              <h6>2.2ms</h6>
              <div className="report-dot w-4 h-4 bg-black rounded-full"></div>
              <div className="report-line w-1 py-[12px] bg-black"></div>
            </div>
            <div className="overflow-hidden h-3 mb-4 text-xs flex rounded gap-2 relative -z-10">
              <div
                style={{ width: "60%" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#449237]"
              ></div>
              <div
                style={{ width: "10%" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-tertiary"
              ></div>
              <div
                style={{ width: "30%" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#F0BB00]"
              ></div>
            </div>
          </div>
        </div>

        <div className="relative pt-1 mx-5 ">
          <h5 className="mb-5 text-2xl sm:text-3xl">
            Largest Contentful Paint (LCP)
          </h5>
          <div className="">
            <div className="flex justify-center items-center w-3 bg-white flex-col -mb-3 relative left-[30%] ">
              <h6>2.2ms</h6>
              <div className="report-dot w-4 h-4 bg-black rounded-full"></div>
              <div className="report-line w-1 py-[12px] bg-black"></div>
            </div>
            <div className="overflow-hidden h-3 mb-4 text-xs flex rounded gap-2 relative -z-10">
              <div
                style={{ width: "60%" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#449237]"
              ></div>
              <div
                style={{ width: "10%" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-tertiary"
              ></div>
              <div
                style={{ width: "30%" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#F0BB00]"
              ></div>
            </div>
          </div>
        </div>

        <div className="relative pt-1 mx-5 ">
          <h5 className="mb-5 text-2xl sm:text-3xl">
            Cumulative Layout Shift (CLS)
          </h5>
          <div className="">
            <div className="flex justify-center items-center w-3 bg-white flex-col -mb-3 relative  left-[20%] ">
              <h6>2.2ms</h6>
              <div className="report-dot w-4 h-4 bg-black rounded-full"></div>
              <div className="report-line w-1 py-[12px] bg-black"></div>
            </div>
            <div className="overflow-hidden h-3 mb-4 text-xs flex rounded gap-2 relative -z-10">
              <div
                style={{ width: "60%" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#449237]"
              ></div>
              <div
                style={{ width: "10%" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-tertiary"
              ></div>
              <div
                style={{ width: "30%" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#F0BB00]"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <form className="flex flex-col gap-8 ml-5 py-24 pb-16 ">
          <input
            className="w-1/2 rounded-full bg-accent-100 px-6 h-[60px] "
            placeholder="Name"
          ></input>
          <input
            className="w-1/2 rounded-full bg-accent-100 px-6 h-[60px]"
            placeholder="Email"
          ></input>

          <Button label={"yes send me the Results"} />
        </form>
      </div>
    </div>
  );
};

export default ProgressBar;
