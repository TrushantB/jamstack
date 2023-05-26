import React, { useEffect, useState } from "react";
import Link from 'next/link'


function WebStactics({
  heading,
  description,
  placeholder,
  isButton,
  buttonLabel,
}) {
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
      <div className="pt-6 lg:pt-0">
        <h2 className="">{heading}</h2>
      </div>
      <div className="my-10 lg:my-0 ">
        <p className="lg:w-6/12">{description}</p>
      </div>

      {/* input start  */}
      <div className="flex lg:flex-row gap-4 pb-10 lg:pb-0 mt-5 lg:gap-0 items-center">
        <input
          placeholder={placeholder}
          className="border rounded-full p-2 w-full  lg:pl-4 lg:w-3/4 outline-none text-black"
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {isMobileView ? (
          <div className="bg-primary rounded-full w-10 flex justify-center items-center -ml-14 h-10">
            <a className="icon-arrow-right2 text-2xl text-white "></a>
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