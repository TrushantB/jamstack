import React, { useState , useEffect } from "react";
import Button from "../form/button/Button";
import Accordion from "../accordian/accordion";
import Onboarding from "../svgAnimations/stepper/onboarding";
import Choose from "../svgAnimations/stepper/choose";
import Design from "../svgAnimations/stepper/design";
import Bussiness from "../svgAnimations/stepper/bussiness";
import { PortableText } from "@portabletext/react";
import { CustomPortableText } from "../shared/CustomPortableText";

const Stepper = (stepper ) => {
  const [selectedStep, setSelectedStep] = useState(1);
  const [activeStep, setActiveStep] = useState(1);

  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const stepLabelOffset = 110; 

      const stepPositions = stepper?.stepper?.map((step, index) => {
        const element = document.getElementById(step.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top + scrollPosition - stepLabelOffset;
        }
        return 0;
      });

      let currentStep = 1;
      for (let i = 0; i < stepPositions.length; i++) {
        if (scrollPosition >= stepPositions[i]) {
          currentStep = i + 1;
        }
      }

      setActiveStep(currentStep);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleStepClick = (index) => {
    setSelectedStep(index);
  };
  const MAP_STEPPER_COMPONENT = {
    choose: Choose,
    onboarding: Onboarding,
    design: Design,
    bussiness: Bussiness
  }
  return (
    <div className="container mx-auto">
      {/* stepper code */}
      <div className="pb-4 lg:pb-28 text-center relative">
        <h2>{stepper?.heading}</h2>
      </div>
      <div>
        <div className="stepper flex justify-center gap-3 lg:gap-5 text-xs lg:text-sm mb-3 lg:mb-7 text-center lg:text-left sticky py-2 top-16 bg-white">
          {stepper?.stepper?.map((step, index) => (
            <a href={`#${step.id}`} key={index}>
              <div
                className={`flex flex-col lg:flex-row gap-2 items-center ${
                  activeStep === index + 1 ? "text-primary" : ""
                }`}
                onClick={() => handleStepClick(index + 1)}
              >
                <div
                  className={`${
                    activeStep === index + 1
                      ? "bg-black text-white"
                      : "bg-accent-100"
                  } p-3 rounded-full h-5 w-5 flex justify-center items-center`}
                >
                  {index + 1}
                </div>
                <div>{step.label}</div>
              </div>
            </a>
          ))}
        </div>

        {/* stepper section */}
        {stepper?.stepper?.map((step, index) => {

          const Component = MAP_STEPPER_COMPONENT[step.animationType] || Choose
          return (
            <div
              className={`stepperItem flex flex-col gap-5 py-5 lg:gap-0 p-2 lg:p-5 lg:pb-14 lg:my-0 ${step.layout === "imageLeft"
                ? "lg:flex-row-reverse"
                : "lg:flex-row"
                }`}
              id={step.id}
              key={step.id}
            >
              {step.layout !== "imageCenter" ? (
                <>
                  <div className="lg:w-1/2" >
                    <h3 className="pb-3 lg:pb-5">
                      <span>{index + 1}.</span> {step.label}
                    </h3>
                    <div>
                      <CustomPortableText value={step?.content} />
                    </div>
                    {step?.faqs?.length && (
                      <Accordion accordin={step?.faqs} isInner={true} />
                    )}
                    {step?.cta?.label && <Button {...step?.cta} />}
                  </div>
                  <div className="lg:w-1/2  flex justify-center items-start mt-8 lg:mt-20">
                    <Component />
                  </div>
                </>
              ) : (
                <div
                  className="flex flex-col lg:flex-row gap-5 lg:gap-0 p-2 lg:p-0 my-2 lg:my-0 lg:mx-auto"
                  id={step.id}
                >
                  <div className="">
                    <div className="icon-ic_launch text-7xl lg:text-center text-tertiary pb-6"></div>
                    <h3 className="pb-3 lg:text-center">
                      <span>{index + 1}.</span> {step.label}
                    </h3>
                    <CustomPortableText paragraphClasses={'lg:text-center pb-6'} value={step?.content} />
                    <div className="flex lg:justify-center items-center lg:mt-4">
                      <Button {...step?.cta} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Stepper;
