import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import ReportLoader from "./reportLoader";
import ReportUI from "./reportUI";
import ProgressBar from "./reportUI";

function WebStactics({
  heading,
  description,
  placeholder,
  isButton,
  buttonLabel,
}) {
  const [error, setError] = useState("");
  const [isMobileView, setIsMobileView] = useState(false);

  const [showButton, setShowButton] = useState(true);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [animateReport, setAnimateReport] = useState(false);
  const [inputValue, setInputValue] = useState('');

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
    setInputValue(event.target.value)
    
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

  const handleButtonClick = () => {
    setShowButton(false);
    setAnimateReport(true);
  
    // const requestData = {
    //   url: inputValue,
    //   device: 'desktop',
    //   parameters: ['--output=html']
    // };
    var data = JSON.stringify({
      url: inputValue,
      device: "desktop",
      proxyCountry: "us",
      followRedirect: true,
      parameters: ["--output=json"],
    });
    
    fetch('https://api.geekflare.com/lighthouse', {
      method: 'POST',
      headers: {
        "x-api-key": '467e9b93-7654-4294-b9bd-44fee71b2800',
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Request failed');
        }
      })
      .then((data) => {
        // Handle the response here
        console.log("data" , data);
  
        setTimeout(() => {
          setAnimateReport(false);
          setShowProgressBar(true);
        }, 10000);
      })
      .catch((error) => {
        // Handle errors here
        console.error("error" , error);
      });
  };  

  const Animation = () => {
    gsap.set(".report", { display: "block" });
    const fills = gsap.utils.toArray(".report .fill");
    const animation = gsap.timeline({ repeat: -1 });
    animation.fromTo(
      fills,
      { scaleY: 0 },
      { scaleY: 1, transformOrigin: "bottom", duration: 2, stagger: 2 }
    );
  };

  useEffect(() => {
    if (animateReport) {
      Animation();
    } else {}
  }, [animateReport]);

  return (
    <>
      <div className="bg-secondary">
        <div className="text-white px-3.5 lg:pl-28 py-6 lg:pt-16 lg:pb-20 relative container mx-auto">
          <div className="pt-6 lg:pt-0">
            <h2>{heading}</h2>
          </div>
          <div className="my-4 lg:my-0">
            <p className="lg:w-6/12">{description}</p>
          </div>
          {/* input start  */}
          <div
            className={`flex lg:flex-row gap-4 pb-10 lg:pb-0 mt-5 lg:gap-0 items-center relative ${
              showButton ? "" : "hidden"
            }`}
          >
            <input
              placeholder={placeholder}
              className="border rounded-full p-2 w-full pl-4 pr-14 lg:pr-20 lg:w-3/4 outline-none text-black
              ring-1 ring-inset ring-gray-50 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-pink-600"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {isMobileView ? (
              <button
                onClick={handleButtonClick}
                className={`bg-primary rounded-full w-10 flex justify-center items-center -ml-14 h-10`}
              >
                <i className="icon-arrow-right2 text-2xl text-white "></i>
              </button>
            ) : (
              isButton && (
                <button
                  onClick={handleButtonClick}
                  className={`bg-primary py-2 px-4 rounded-full -ml-20 text-xl text-white btn`}
                >
                  {buttonLabel}
                </button>
              )
            )}
          </div>
          {error && (
            <div className="absolute bottom-4 md:bottom-auto flex flex-wrap items-center w-full sm:w-1/2 text-xs my-2">
              <p className="text-red-600 bg-red-100 py-1 px-3 rounded-full">
                {error}
              </p>
            </div>
          )}
          {/* input end  */}
        </div>
      </div>
      {animateReport && (
        <div className={`report`}>
          <h2 className="text-center py-10">Generating your report</h2>
          <div className="flex justify-center items-center gap-5 py-10">
            <div className="diamond bg-accent-200 w-10 h-10">
              <div className="fill bg-tertiary w-full h-full"></div>
            </div>
            <div className="circle bg-accent-200 w-10 h-10">
              <div className="fill bg-tertiary w-full h-full"></div>
            </div>
            <div className="pentagon bg-accent-200 w-10 h-10">
              <div className="fill bg-tertiary w-full h-full"></div>
            </div>
          </div>
        </div>
      )}

      {showProgressBar && !animateReport && (
        <div>
          <ProgressBar />
        </div>
      )}
    </>
  );
}

export default WebStactics;
