import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ToastContainer, toast } from 'react-toastify';
import ProgressBar from "./reportUI";
import axios from 'axios'

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
  const [report, setReport] = useState(null);

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
    const expression = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/

    const regex = new RegExp(expression);

    if (`${inputValue}`.match(regex)) {
      setShowButton(false);
      setAnimateReport(true);
      axios.post("/api/getReport", {
        "url": inputValue,
        "output": "html"
      })
        .then((data) => {
          if (data.data.data.data?.firstContentfulPaint?.title) {
            toast.success("Yeah! Your core web vitals report is ready. Please fill in your details to get the report on mail.");
            setReport(data.data.data.data);
            setAnimateReport(false);
            setShowProgressBar(true);
          } else {
            setAnimateReport(false);
            toast.error("Oops, our bad! Please try again");
          }
        })
        .catch((error) => {
          setAnimateReport(false);
          toast.error("Oops, our bad! Please try again");
        });
    } else {
      toast.error("Please enter valid URL.")
    }
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
    } else { }
  }, [animateReport]);

  const submitReport = (name, email) => {
    toast.success('The report is been shared in your mail successfully.');
    setShowProgressBar(false);
    setShowButton(true);
    axios.post("/api/postReport", {
      "reportUrl": report?.reportUrl || "",
      "webSiteUrl": inputValue,
      "email": email,
      "name": name
    })
      .then((data) => {
        console.log("mail sent");
      })
      .catch((error) => {
        console.error("error", error);
      });
  }

  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto text-white px-3.5 py-6 lg:pt-16 lg:pb-20 relative">
          <div className="pt-6 lg:pt-0">
            <h2 id="webStactics">{heading}</h2>
          </div>
          <div className="my-4 lg:my-0">
            <p className="lg:w-6/12">{description}</p>
          </div>
          {/* input start  */}
          <div
            className={`flex lg:flex-row gap-4 pb-10 lg:pb-0 mt-5 lg:gap-0 items-center relative ${showButton ? "" : "hidden"
              }`}
          >
            <form className="w-full flex relative" onSubmit={(e) => e.preventDefault()}>
              <input aria-label="paste your website url to know your statistics"
                placeholder={placeholder}
                className="border-0 rounded-full p-2 w-full pl-4 pr-14 lg:pr-20 lg:max-w-2xl outline-none text-black
              ring-1 ring-inset ring-gray-50 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-pink-600"
                onBlur={handleBlur}
                onChange={handleChange}
                required
              />
              {isMobileView ? (
                <button
                  aria-label="submit"
                  onClick={handleButtonClick}
                  className={`bg-primary rounded-full w-10 flex justify-center absolute right-0 top-0 lg:relative whitespace-nowrap items-center -ml-14 h-10`}
                >
                  <i className="icon-arrow-right2 text-2xl text-white"></i>
                </button>
              ) : (
                isButton && (
                  <button
                    onClick={handleButtonClick}
                    className={`bg-primary py-2 px-4 rounded-full -ml-20 text-xl text-white btn whitespace-nowrap`}
                  >
                    {buttonLabel}
                  </button>
                )
              )}
            </form>
          </div>
          {/* {error && (
            <div aria-hidden="true" className="absolute bottom-4 md:bottom-auto flex flex-wrap items-center w-full sm:w-1/2 text-xs my-2">
              <p className="text-red-600 bg-red-100 py-1 px-3 rounded-full">
                {error}
              </p>
            </div>
          )} */}
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

      {showProgressBar && !animateReport && report && (
        <div>
          <ProgressBar report={report} submitReport={submitReport} />
        </div>
      )}
      <ToastContainer pauseOnHover={false} hideProgressBar={true} />
    </>
  );
}

export default WebStactics;
