import React, { useState } from "react";
import Button from "../form/button/Button";

const ProgressBar = ({ report = {}, submitReport }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="container mx-auto pt-24 lg:pt-14">
      <h4 className=" font-normal mb-14 ml-5">Here are your web vitals</h4>

      {/* report results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        {
          report?.firstContentfulPaint?.displayValue &&
          <div className="relative pt-1 mx-5 ">
            <h5 className="mb-5 text-2xl sm:text-3xl">
              {report.firstContentfulPaint?.title} (FCP)
            </h5>
            <div className="">
              <div className={`flex justify-center items-center w-3 bg-white flex-col -mb-3 relative`} style={{ left: `${report.firstContentfulPaint?.score * 100}%` }}>
                <h6>{report.firstContentfulPaint?.displayValue}</h6>
                <div className="report-dot w-4 h-4 bg-black rounded-full"></div>
                <div className="report-line w-1 py-[12px] bg-black"></div>
              </div>
              <div className="overflow-hidden h-3 mb-4 text-xs flex rounded gap-2 relative -z-10">
                <div
                  style={{ width: "50%" }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-tertiary"
                ></div>
                <div
                  style={{ width: "40%" }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#F0BB00]"
                ></div>
                <div
                  style={{ width: "10%" }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#449237]"
                ></div>
              </div>
            </div>
          </div>
        }

        {
          report?.interactive?.displayValue &&
          <div className="relative pt-1 mx-5 ">
            <h5 className="mb-5 text-2xl sm:text-3xl">
              {report.interactive?.title} (TTI)
            </h5>
            <div className="">
              <div className={`flex justify-center items-center w-3 bg-white flex-col -mb-3 relative`} style={{ left: `${report.interactive?.score * 100}%` }}>
                <h6>{report.interactive?.displayValue}</h6>
                <div className="report-dot w-4 h-4 bg-black rounded-full"></div>
                <div className="report-line w-1 py-[12px] bg-black"></div>
              </div>
              <div className="overflow-hidden h-3 mb-4 text-xs flex rounded gap-2 relative -z-10">
                <div
                  style={{ width: "50%" }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-tertiary"
                ></div>
                <div
                  style={{ width: "40%" }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#F0BB00]"
                ></div>
                <div
                  style={{ width: "10%" }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#449237]"
                ></div>
              </div>
            </div>
          </div>
        }
        {
          report?.largestContentfulPaint?.displayValue && report?.largestContentfulPaint?.score &&
          <div className="relative pt-1 mx-5 ">
            <h5 className="mb-5 text-2xl sm:text-3xl">
              {report.largestContentfulPaint?.title} (LCP)
            </h5>
            <div className="">
              <div className={`flex justify-center items-center w-3 bg-white flex-col -mb-3 relative`} style={{ left: `${report.largestContentfulPaint?.score * 100}%` }}>
                <h6>{report.largestContentfulPaint?.displayValue}</h6>
                <div className="report-dot w-4 h-4 bg-black rounded-full"></div>
                <div className="report-line w-1 py-[12px] bg-black"></div>
              </div>
              <div className="overflow-hidden h-3 mb-4 text-xs flex rounded gap-2 relative -z-10">
                <div
                  style={{ width: "50%" }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-tertiary"
                ></div>
                <div
                  style={{ width: "40%" }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#F0BB00]"
                ></div>
                <div
                  style={{ width: "10%" }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#449237]"
                ></div>
              </div>
            </div>
          </div>
        }
        {
          report?.cumulativeLayoutShift?.displayValue &&
          <div className="relative pt-1 mx-5 ">
            <h5 className="mb-5 text-2xl sm:text-3xl">
              {report.cumulativeLayoutShift?.title} (CLS)
            </h5>
            <div className="">
              <div className={`flex justify-center items-center w-3 bg-white flex-col -mb-3 relative`} style={{ left: `${report.cumulativeLayoutShift?.score * 100}%` }}>
                <h6>{report.cumulativeLayoutShift?.displayValue}</h6>
                <div className="report-dot w-4 h-4 bg-black rounded-full"></div>
                <div className="report-line w-1 py-[12px] bg-black"></div>
              </div>
              <div className="overflow-hidden h-3 mb-4 text-xs flex rounded gap-2 relative -z-10">
                <div
                  style={{ width: "50%" }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-tertiary"
                ></div>
                <div
                  style={{ width: "40%" }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#F0BB00]"
                ></div>
                <div
                  style={{ width: "10%" }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#449237]"
                ></div>
              </div>
            </div>
          </div>
        }
      </div>

      <div>

        {/* form  */}
        <form className="flex flex-col gap-8 ml-5 py-24 pb-16 " onSubmit={(e) => {
          e.preventDefault();
          submitReport(name, email)
        }} >
          <input
            className="sm:w-3/4  rounded-full bg-accent-100 px-6 h-[60px] "
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="sm:w-3/4 rounded-full bg-accent-100 px-6 h-[60px]"
            placeholder="Email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button label={"Yes send me the results"} />
        </form>
      </div>
    </div>
  );
};

export default ProgressBar;
