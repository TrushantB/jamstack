import { React, useState, useEffect } from "react";
import { get } from "@/client/api";
import Layout from "@/components/layout";
import Banner from "@/components/presentational/banner/Banner";
import Card from "@/components/presentational/card/Card";
import Accordion from "@/components/accordian/accordion";
import ProductCard from "@/components/productCard/productCard";

const Jamstack = ({ header, footer }) => {

  const [jamstackData, setJamstackData] = useState(null);

  useEffect(() => {
    get("jamStack").then((response) => {
      setJamstackData(response);
      console.log("data" , response)
    });
  }, []);
  console.log("nooo" , jamstackData?.cards?.Cardsitems)
  if (!jamstackData) {
    return <></>;
  }
  return (
    <Layout header={header} footer={footer}>
      
    <div>
      <Banner {...jamstackData.banner} />
    </div>

        <div className="flex flex-col  lg:flex-row px-24">
          <div className=" lg:w-5/12">
            <h2 className="w-10/12 pb-2">{...jamstackData.cards?.heading}</h2>
            <p className=" text-justify ">
            {...jamstackData.cards?.description}
            </p>
          </div>
          <div className="lg:w-7/12 flex justify-center items-center text-4xl">
            <Card items={jamstackData?.cards?.cardsitems}/>
          </div>
        </div>
      
      <div className="border-t-2 border-b-2 pb-32">
        <h2 className="text-center text-2xl">{jamstackData?.accordian?.heading}</h2>
      </div>
      <div>
        <Accordion accordin={jamstackData?.accordian?.accordinaList} />
      </div>

      <div className="py-24 border-t-2 border-b-2">
        <h2 className="text-center text-4xl">{jamstackData?.productCard?.heading}</h2>
        <div>
           <ProductCard cards={jamstackData?.productCard?.cards} />
        </div>
      </div>
    </Layout>
  );
};

export default Jamstack;
