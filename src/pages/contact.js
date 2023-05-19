import { React, useEffect, useState } from "react";
import Form from "@/components/form";
import Header from "../components/header";
import Footer from "../components/footer";
import { get } from "@/client/api";

const About = () => {
  const [contactData, setContactData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoverItem, setHoverItem] = useState(null);

  useEffect(() => {
    get("contactUs").then((response) => {
      console.log("data==>", response);
      console.log("response==>", response?.caseStudy?.itemList[0]);

      setContactData(response);
      setSelectedItem(
        response?.caseStudy?.itemList?.length
          ? response?.caseStudy?.itemList[0]
          : {}
      );
    });
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const onMouseEnter = (card) => {
    setHoverItem(card);
  };
  const onMouseLeave = () => {
    setHoverItem(null);
  };

  return (
    <div className="container">
      {/* Header Section */}
      <Header />

      {/* form section */}
      <div className="lg:pl-24 pt-24 pb-24">
        <h2 className="lg:w-7/12">
          {contactData?.heading}
        </h2>
        <p className="w-1/2">
        {contactData?.description}
        </p>

        <Form />
      </div>

      {/* cta section */}
      <div className="pl-24">
        <h3 className="lg:w-8/12 pb-5">
            {contactData?.contactDetails}
        </h3>
        <a
          href="mailto: hello@jamstack.plus"
          className="text-primary heading-4"
        >
          {contactData?.contactEmail}
        </a>
      </div>

      {/* case study section */}
      <div className="">
        {contactData?.caseStudy?.heading && (
          <h2 className="lg:pl-16">{contactData?.caseStudy?.heading}</h2>
        )}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-5/12 p-2 lg:p-10">
            <ul className="p-1 lg:  flex flex-col gap-6">
              {contactData?.caseStudy?.itemList.map((item, index) => (
                <li
                  className={`flex gap-4 items-center cursor-pointer`}
                  onClick={() => handleItemClick(item)}
                  key={index}
                >
                  {item === selectedItem && (
                    <img className="w w-6 h-6" src={item.icon} alt="icon" />
                  )}
                  <h4
                    className={`${
                      item === selectedItem
                        ? "font-bold text-black text-5xl"
                        : "text-gray-500"
                    }`}
                  >
                    {item.label}
                  </h4>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-7/12 lg:p-10 lg:px-7">
            <div className=" p-5 bg-accent-100">
              <div className="flex flex-col lg:flex-row  gap-5 lg:gap-0">
                {selectedItem?.percentageList?.map(
                  (percentageItem, index) => (
                    <div className={`cursor-pointer`} key={index}>
                      <h2>{percentageItem.percentage}</h2>
                      <p className="w-10/12">{percentageItem.description}</p>
                    </div>
                  )
                )}
              </div>
              <div className="pt-5 ">
                <div>
                  <a className="flex gap-3 items-center text-primary" href="#">
                    {contactData?.caseStudy?.label}
                    <span className="icon-arrow-right2 text-2xl text-primary "></span>
                  </a>
                </div>
              </div>
            </div>

            {contactData?.caseStudy?.description && (
              <div className="pt-10">
                <p>{contactData?.caseStudy?.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Testimonial section */}
      <div className="container px-5  gap-24 flex flex-col">
        {contactData?.testimonialCard?.cards.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-6 p-3  drop-shadow-2xl justify-evenly items-center  py-5 rounded-3xl border border-black hover:bg-accent-100 hover:border-transparent"
          >
            <div className="flex gap-7">
              <div className="w-4/12 lg:w-3/12 flex items-start sm:justify-center mt-7 sm:mt-0">
                <img src={item.image} />
              </div>
              <div className="flex-grow sm:text-left w-5/12 lg:w-10/12  mt-6 sm:mt-0">
                <p className="leading-relaxed text-base pb-3">
                  {item.description}
                </p>
                <p>{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Blog card section */}
      <div className="container px-5 py-10 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex justify-center gap-7">
          {contactData?.blogCard?.cards.map((card, index) => (
            <div
              key={index}
              className="border-2 border-accent-100 border-opacity-60 lg:max-w-sm rounded-2xl py-1 hover:bg-accent-100"
              onMouseEnter={() => onMouseEnter(card)}
              onMouseLeave={() => onMouseLeave()}
            >
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-2xl"
                src={card.image}
                alt={card.altTag}
              />
              <div className="p-4">
                <h4 className="mb-3">{card.label}</h4>
                <p className="leading-relaxed mb-5 w-9/12">
                  {card.description}
                </p>
                <div>
                  <a className="flex gap-3 items-center text-primary" href="#">
                    {contactData?.blogCard?.label}
                    <span className="icon-arrow-right2 text-2xl text-primary "></span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* footer section */}
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default About;
