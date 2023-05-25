import { React, useState } from "react";
import Button from "../form/button/Button";

const Steps = [
  {
    label: "On boarding",
    content:
      "We start with getting to know your problems and requirements. One dedicated person will take all the necessary steps to get you on board. Based on collected data and analysis, we get ready with preliminary tasks like mockups and design.",
    layout: "imageRight",
    image: "/onboarding.png",
    id: "step-1",
  },
  {
    label: "Choose your tech-stack",
    content: `
      <p><span style="font-size: 20px; color: rgb(0, 0, 0);">Before starting development on mockups and design, check all the technical things for:&nbsp;</span></p>
      <p><span style="color: rgb(0, 0, 0);"><strong><span style="font-size: 20px;">Static Site Generator(SSG):&nbsp;</span></strong></span></p>
      <p><span style="font-size: 20px; color: rgb(0, 0, 0);">There are many popular SSGs available to create static files. Choose from the options we provide&nbsp;</span></p>
      <p><span style="color: rgb(0, 0, 0); display:flex; flex-wrap:wrap; padding:20px 0;"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/2560px-Nextjs-logo.svg.png" alt="next-js-img" width="114" height="23"> &nbsp; &nbsp; &nbsp; <img src="https://www.datocms-assets.com/205/1521408762-gatsbyjs.jpg" alt="gatsbyjs-img" width="114" height="23"> &nbsp; &nbsp; &nbsp; <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/2560px-Nextjs-logo.svg.png" alt="nuxtjs" width="114" height="23"></span></p>
      <p><span style="color: rgb(0, 0, 0);"><strong><span style="font-size: 20px;">Choose CMS (Content Management System)&nbsp;</span></strong></span></p>
      <p><span style="font-size: 20px; color: rgb(0, 0, 0);">To manage your content effectively, we recommend a few of the following:</span></p>
      <p style="display:flex; align-items:center; padding:20px 0;"> <img src="https://tinyurl.com/y4vcyhbr" width="140" height="34">&nbsp; &nbsp; &nbsp;<img src="https://www.pngfind.com/pngs/m/413-4135111_contentful-logo-contentful-logo-png-transparent-png.png" alt="contentful-logo" width="140" height="32"> &nbsp; &nbsp; &nbsp; <img src="https://tinyurl.com/ykda7xch" alt="prismic" width="140" height="32"> </p>
      <p><strong><span style="font-size: 20px; color: rgb(0, 0, 0);">Choose front-end framework&nbsp;<br></span></strong></p>
      <p><span style="font-size: 20px; color: rgb(0, 0, 0);">We provide you JS framework options that are mostly used, like:</span></p>
      <p><span style="font-size: 20px; color: rgb(0, 0, 0); display:flex; flex-wrap:wrap; padding:20px ;"><img src="https://tinyurl.com/4bh4ktud" alt="react-logo" width="120" height="37"> &nbsp; &nbsp; &nbsp; <img src="https://tinyurl.com/mwcrc9nf" alt="veujs-logo" width="120" height="37"> &nbsp; &nbsp; &nbsp; <img src="blob:https://www.tiny.cloud/5f6d3f1f-84e2-4c61-8ce5-617d5c6bd16a" alt="angular" width="120" height="37"></span></p>
      <p><strong><span style="font-size: 20px; color: rgb(0, 0, 0);">Hosting&nbsp;</span></strong></p>
      <p><span style="font-size: 20px; color: rgb(0, 0, 0);">We provide you hosting options that are mostly used, like:</span></p>
      <p><span style="font-size: 20px; color: rgb(0, 0, 0); display:flex; flex-wrap:wrap; padding:20px 0;"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/150px-Amazon_Web_Services_Logo.svg.png" alt="aws-logo" width="48" height="29"> &nbsp; &nbsp; &nbsp; <img src="https://popupsmart.com/assets/img/vercel-logo.png" alt="vercel" width="118" height="29"></span></p>
    `,
    image: "/choose.png",
    layout: "imageLeft",
    id: "step-2",
  },
  {
    label: "Choose your tech-stack",
    content:
      "We start with getting to know your problems and requirements. One dedicated person will take all the necessary steps to get you on board. Based on collected data and analysis, we get ready with preliminary tasks like mockups and design.",
    image: "/Design.png",
    layout: "imageRight",
    id: "step-3",
  },
  {
    label: "Go Live",
    content:
      "We start with getting to know your problems and requirements. One dedicated person will take all the necessary steps to get you on board. Based on collected data and analysis, we get ready with preliminary tasks like mockups and design.",

    layout: "imageCenter",
    id: "step-4",
  },
];

const Stepper = ({}) => {
  const [selectedStep, setSelectedStep] = useState(1);

  const handleStepClick = (index) => {
    setSelectedStep(index);
  };
  return (
    <>
      {/* stepper code */}
      <div className="container">
        <div className="stepper flex justify-center gap-5 text-xs text-center lg:text-left">
          {Steps.map((step, index) => (
            <a href={`#${step.id}`} key={index}>
              <div
                className={`step1 flex flex-col lg:flex-row gap-2 items-center ${
                  selectedStep === index + 1 ? "text-primary" : ""
                }`}
                onClick={() => handleStepClick(index + 1)}
              >
                <div
                  className={`bg-${
                    selectedStep === index + 1 ? "black" : "gray"
                  } p-3 text-white rounded-full h-5 w-5 flex justify-center items-center`}
                >
                  {index + 1}
                </div>
                <div>{step.label}</div>
              </div>
            </a>
          ))}
        </div>

        {/* stepper section */}
        {Steps.map((step) => (
          <div
            className={`flex flex-col gap-5 lg:gap-0 p-2 lg:p-5 my-2 lg:my-0 ${
              step.layout === "imageLeft"
                ? "lg:flex-row-reverse"
                : "lg:flex-row"
            }`}
            id={step.id}
            key={step.id}
          >
            {step.layout !== "imageCenter" ? (
              <>
                <div className="lg:w-1/2">
                  <h3 className="pb-5">
                    <span>{step.number}</span> {step.label}
                  </h3>
                  <div dangerouslySetInnerHTML={{ __html: step.content }}></div>
                </div>
                <div className="lg:w-1/2 lg:p-10 flex justify-center">
                  <img src={step.image} alt="Step Image" />
                </div>
              </>
            ) : (
              <div
                className="flex flex-col lg:flex-row gap-5 lg:gap-0 p-2 lg:p-5 my-2 lg:my-0 "
                id={step.id}
              >
                <div className="lg:w-1/2 mx-auto">
                  <div className="icon-ic_launch text-7xl text-center text-tertiary"></div>
                  <h3 className="pb-4 text-center">
                    <span>{step.number}</span> {step.label}
                  </h3>
                  <p className="text-center">{step.content}</p>
                  <div className="flex justify-center items-center mt-4">
                    <Button label="Start Project Now" size="medium" />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Stepper;
