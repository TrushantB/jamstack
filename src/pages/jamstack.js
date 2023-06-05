import { React, useState, useEffect } from "react";
import { get } from "@/client/api";
import Layout from "@/components/layout";
import Banner from "@/components/presentational/banner/Banner";
import Card from "@/components/presentational/card/Card";
import Accordion from "@/components/accordian/accordion";
import ProductCard from "@/components/productCard/productCard";
import JamstackAccordion from "@/components/jamstackAccordian/jamstackAccordian";

const Jamstack = ({ header, footer }) => {
  const [jamstackData, setJamstackData] = useState(null);

  useEffect(() => {
    get("jamStack").then((response) => {
      setJamstackData(response);
    });
  }, []);
  if (!jamstackData) {
    return <></>;
  }
  return (
    <Layout header={header} footer={footer}>
      <div className="pt-0">
        <Banner {...jamstackData.banner} isInner={true} />
      </div>

      <div className="flex flex-col gap-10  lg:flex-row px-5 lg:px-24 py-0">
        <div className=" lg:w-4/12 flex flex-col justify-center">
          <h2 className="w-10/12 pb-2">{...jamstackData.cards?.heading}</h2>
          <p className="lg:w-11/12 ">{...jamstackData.cards?.description}</p>
        </div>
        <div className="lg:w-8/12 flex justify-center items-center text-4xl">
          <Card items={jamstackData?.cards?.cardsitems} />
        </div>
      </div>

      <div className="lg:px-24 py-12 px-5">
        <div className="pb-6">
          <h2 className=" ">{jamstackData?.accordian?.heading}</h2>
        </div>
        <div>
          <JamstackAccordion
            accordin={jamstackData?.accordian?.accordinaList}
          />
        </div>
      </div>

      <div className="pb-24">
        <h2 className="text-center mb-6 md:mb-8">
          {jamstackData?.productCard?.heading}
        </h2>
        <div>
          <ProductCard cards={jamstackData?.productCard?.cards} />
        </div>
      </div>
    </Layout>
  );
};

export default Jamstack;
