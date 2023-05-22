import React, { useEffect, useState } from "react";

function WebStactics({ heading, description , placeholder, isButton, buttonLabel}) {

    const [error, setError] = useState("");
    const [isMobileView, setIsMobileView] = useState(false);
  
    const handleBlur = (event) => {
      if (event.target.value === "") {
        setError("This field is required");
      } else {
        setError("");
      }
    };
  
    const handleChange = (event) => {
      if (error) {
        setError("");
      }
    };
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobileView(window.innerWidth <= 768);
      };
  
      handleResize();
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);




  return (
    <div className="bg-secondary text-white  px-3.5 lg:pl-28 py-6 lg:py-16">
      <div className="">
        <h2 className="">{heading}</h2>
      </div>
      <div className="mt-7">
        <p className="w-7/12">{description}</p>
      </div>

      {/* input start  */}
      <div className="flex lg:flex-row gap-4 mt-12 lg:gap-0 items-center">
        <input
          placeholder={placeholder}
          className="border rounded-full py-2 px-2 lg:pl-4 lg:w-1/2"
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {isMobileView ? (
          <div className="bg-primary rounded-full w-10 flex justify-center items-center -ml-14 h-10">
            <a href="#" className="icon-arrow-right2 text-2xl text-white "></a>
          </div>
        ) : (
          isButton && (
            <button className="bg-primary py-2 px-4 rounded-full -ml-20 text-xl text-white">
              {buttonLabel}
            </button>
          )
        )}
      </div>
      {error && (
        <div className="flex flex-wrap items-center ml-4 w-full sm:w-1/2 text-xs my-2">
          <p className="text-red-500">{error}</p>
        </div>
      )}

      {/* input end  */}
    </div>
  );
}

export default WebStactics;
