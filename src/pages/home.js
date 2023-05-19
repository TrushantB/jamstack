import { React, useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { get } from "@/client/api";

const home = () => {
  const [homeData, setHomeData] = useState([]);

  const isButton = true;

  const [hoverItem, setHoverItem] = useState(null);


  useEffect(() => {
    get("home").then((response) => {
      console.log(response?.caseStudy?.itemList[0]);
      setHomeData(response);
      setSelectedItem(
        response?.caseStudy?.itemList?.length
          ? response?.caseStudy?.itemList[0]
          : {}
      );
    });
  }, []);

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

  const [selectedItem, setSelectedItem] = useState(null);

  

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const onMouseEnter = (card) => {
    setHoverItem(card)
  }
  const onMouseLeave = () => {
    setHoverItem(null)
  }

  const settings = {
    dots: homeData?.textBanner?.sliderControls?.dots,
    infinite: homeData?.textBanner?.sliderControls?.infinite,
    speed: homeData?.textBanner?.sliderControls?.speed,
    autoplaySpeed:homeData?.textBanner?.sliderControls?.autoplaySpeed,
    autoplay:homeData?.textBanner?.sliderControls?.autoplay,
    arrows:homeData?.textBanner?.sliderControls?.arrows,
    swipe:homeData?.textBanner?.sliderControls?.swipe
  };

  return (
    <div className="container">
      <div>
        <Header />
      </div>
      {/* banner start */}
      <div>
        <div className="container">
          <div className="md:flex">
            <div className="md:w-1/2 flex">
              <div className="flex items-center">
                <div>
                  <h2 className="text-black-950 font-bold text-7xl">
                    {homeData?.banner?.heading}
                  </h2>

                  <div className="my-16">
                    <button
                      className={`bg-pink-500 text-white rounded-full px-4 py-3 font-bold`}
                    >
                      {homeData?.banner?.label}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:w-1/2 items-center justify-center">
              <img src={homeData?.banner?.image} alt="image" />
            </div>
          </div>
        </div>
      </div>
      {/* banner end  */}

      {/* Web section */}
      <div className="">
        <div className="flex flex-col items-center pb-36">
          <p className="font-normal w-10/12 text-center heading-4 lg:w-8/12 mx-auto ">
            {homeData?.technologySolution?.heading}
          </p>
          <img
            className="py-4"
            src="https://github.com/MurtazaKp/Jamstack/blob/main/public/images/line-circle.png?raw=true"
          ></img>
          <h4 className="w-4/12 font-bold text-center">
            {homeData?.technologySolution?.description}
          </h4>
          <img
            className="mt-3"
            src="https://github.com/MurtazaKp/Jamstack/blob/main/public/images/logo.png?raw=true"
          />
        </div>
      </div>

      {/* textbannerList start  */}
      <div className="grid grid-col-1 lg:grid-cols-2 bg-secondary  ">
        <div className=" ">
          <h2 className=" lg:p-11 lg:pl-24 p-5 sm:p-10 text-white">
            {homeData?.textBannerList?.heading}
          </h2>
        </div>

        <div className="  bg-accent-100 p-5 sm:p-10  lg:p-11 lg:pl-20 rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl">
          <h4 className="mb-14 bg-grey">{homeData?.textBannerList?.title}</h4>
          <div>
            {homeData?.textBannerList?.listItems.map((item) => (
              <div>
                <ul>
                  <li className="p-2 flex gap-4">
                    <div
                      className={`${item.icon} w-5 h-5 bg-tertiary `}
                      alt={item.alt}
                    ></div>
                    <div className={"w-42 h-30 font-bold "}>{item.label}</div>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* textbannerList end  */}

      {/* video component section start */}

      <div>
        <div className="text-center mb-16">
          <h2>{homeData?.videoBanner?.heading}</h2>
        </div>
        <div>
          <video className="rounded-3xl video" controls>
            <source src={homeData?.videoBanner?.Videolink} type="video/mp4" />
            <source src={homeData?.videoBanner?.Videolink} type="video/ogg" />
          </video>
        </div>
      </div>

      {/* video banner end  */}

      {/* web facts section start*/}

      <div className="p-5 lg:px-10 flex flex-col gap-5 py-12 bg-accent-100">
        <Slider {...settings}> 
        {homeData?.textBanner?.info.map((item, index) => (
          <div key={index}>
            <div
              className={`${item.icon} w-20 h-20 bg-tertiary`}
              alt={item.alt}
            ></div>
            <div>
              <h3 className="w-11/12">{item.label}</h3>
            </div>
          </div>
        ))}
        </Slider>
      </div>

      {/* web facts end  */}

      {/* web stactics section start*/}

      <div className="bg-secondary text-white lg:pl-28 lg:py-16">
        <div className="">
          <h2 className="">{homeData?.Webstatstics?.heading}</h2>
        </div>
        <div className="">
          <p className="w-7/12">{homeData?.Webstatstics?.description}</p>
        </div>

        {/* input start  */}
        <div className="flex lg:flex-row gap-4 lg:gap-0 items-center">
          <input
            placeholder={homeData?.Webstatstics?.placeholder}
            className="border rounded-full py-2 px-2 lg:pl-4 lg:w-1/2"
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {isMobileView ? (
            <div className="bg-primary rounded-full w-10 flex justify-center items-center -ml-14 h-10">
              <a
                href="#"
                className="icon-arrow-right2 text-2xl text-white "
              ></a>
            </div>
          ) : (
            isButton && (
              <button className="bg-primary py-2 px-4 rounded-full -ml-20 text-xl text-white">
                {homeData?.Webstatstics?.buttonlabel}
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

      {/* web stactics end  */}

      {/* benifits section */}
      <div className=" flex flex-col lg:flex-row  p-10 pb-0 lg:pt-32">
        <div className=" lg:w-5/12">
          <h3 className="lg:w-5/12 mb-5">{homeData?.benefits?.heading}</h3>
        </div>

        <div className="lg:w-7/12">
          <div className="lg:pl-28 lg:py-16">
            {homeData?.benefits?.benefitsList.map((item, index) => (
              <div key={index} className="border-t-4  ">
                <div className="flex gap-5 pt-5">
                  <div className="pl-12">
                    <h3 className={`${item.icon} relative`}>{item.heading}</h3>
                    <p className="pb-8  pt-5">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product card section start */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center  gap-3">
        {homeData?.productCard?.cards.map((card, index) => (
          <div
            key={index}
            className=" p-6   rounded-2xl bg-accent-100  hover:bg-secondary hover:text-white"
            onMouseEnter={() => onMouseEnter(card)}
            onMouseLeave={() => onMouseLeave()}
          >
            <h3 className="font-bold tracking-tight  dark:text-white mb-6 ">
              {card.label}
            </h3>
            <p className="font-normal ">{card.description}</p>
            {hoverItem === card ? (
              <div className="flex justify-end items-center  mt-14">
                <a className=" relative z-30 -m-10" href={card.href}>
                  {card.buttonLabel}
                </a>
                <div className="w-28 h-28 rounded-full bg-primary"></div>
              </div>
            ) : (
              <div className="flex justify-end items-end mt-32">
                <div className="w-10 h-10 rounded-full bg-tertiary "></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* product card end  */}

      {/* Our client section start */}

      <div className="flex pt-5">
        <div>
          <div>
            <h2>{homeData?.ourClient?.heading}</h2>
          </div>
          <div>
            <button
              className={`bg-pink-500 text-white rounded-full px-4 py-3 font-bold`}
            >
              {homeData?.ourClient?.label}
            </button>
          </div>
        </div>

        <div className="lg:w-1/2">
          <ul className="grid grid-cols-3 border-t-2 border-b-2">
            {homeData?.ourClient?.imageList.map((item, index) => (
              <>
                <li
                  className={
                    index % 3 !== 0 && (index + 1) % 3 !== 0
                      ? "border-l-2 border-r-2 border-b-2"
                      : "border-b-2"
                  }
                  key={index}
                >
                  {item.image ? (
                    <img src={item.image} alt={item.altTag} href={item.href} />
                  ) : (
                    <td colSpan="2"></td>
                  )}
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>

      {/* our client end  */}

      {/* Edge Network section */}
      <div className="border-t-2 border-b-2 pb-32 border-blue-600">
        <h2 className="text-4xl text-center ">
          {homeData?.edgeNetwork?.heading}
        </h2>
        <div>
          <img src={homeData?.edgeNetwork?.image} />
        </div>
      </div>

      {/* case study section start */}

      <div className="">
        {homeData?.caseStudy?.heading && (
          <h2 className="lg:pl-16">{homeData?.caseStudy?.heading}</h2>
        )}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-5/12 p-2 lg:p-10">
            <ul className="p-1 lg:  flex flex-col gap-6">
              {homeData?.caseStudy?.itemList.map((item, index) => (
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
                    {homeData?.caseStudy?.label}
                    <span className="icon-arrow-right2 text-2xl text-primary "></span>
                  </a>
                </div>
              </div>
            </div>

            {homeData?.caseStudy?.description && (
              <div className="pt-10">
                <p>{homeData?.caseStudy?.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* case study end  */}

      {/* morderTechnology start  */}

      <div className=" flex flex-col items-center justify-center gap-6 bg-accent-100 py-10">
        <h2 className="text-4xl text-center w-6/12 ">
          {homeData?.morderTechnology?.heading}
        </h2>
        <button className=" bg-pink-600 text-white p-2 rounded-full">
          {homeData?.morderTechnology?.Button?.label}
        </button>
      </div>

      {/* morderTechnology end  */}

      {/* Testimonial section start*/}

      <div className="container px-5  gap-24 flex flex-col">
        {homeData?.testimonialCard?.cards.map((item, index) => (
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

      {/* Testimonial section end  */}

      {/* Blog card section start */}

      <div className="container px-5 py-10 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex justify-center gap-7">
          {homeData?.blogCard?.cards.map((card, index) => (
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
                    {homeData?.blogCard?.label}
                    <span className="icon-arrow-right2 text-2xl text-primary "></span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog card end  */}

      {/* footer section */}
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default home;
