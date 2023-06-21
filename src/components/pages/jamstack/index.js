import { React, useState, useEffect } from "react";
import Layout from "@/components/layout";
import Banner from "@/components/presentational/banner/Banner";
import Card from "@/components/presentational/card/Card";
import ProductCard from "@/components/productCard/productCard";
import JamstackAccordion from "@/components/jamstackAccordian/jamstackAccordian";
import { getJamStack, getSettings } from "@/lib/sanity.client";
import { refactorJamStack } from "@/utils/jamStack";
import { refactorSettings } from "@/utils/settings";
import Cta from "@/components/cta/cta";

const Jamstack = ({ jamstackData, settings, preview }) => {
  if (!jamstackData) {
    return <></>;
  }
  return (
    <Layout header={settings.header} footer={settings.footer} preview={preview}>
      <section className="pt-0">
        <Banner {...jamstackData.banner} isInner={true} />
      </section>

      <section className="flex flex-col gap-10  lg:flex-row px-5 lg:px-24 py-0">
        <div className=" lg:w-4/12 flex flex-col justify-center">
          <h2 className="w-10/12 pb-2">{...jamstackData.cards?.heading}</h2>
          <p className="lg:w-11/12 ">{...jamstackData.cards?.description}</p>
        </div>
        <section className="lg:w-8/12 flex justify-center items-center text-4xl">
          <Card items={jamstackData?.cards?.cardsitems} />
        </section>
      </section>

      <section className="container mx-auto py-12 px-5">
        <div className="pb-6">
          <h2 className=" ">{jamstackData?.accordian?.heading}</h2>
        </div>
        <div>
          <JamstackAccordion
            accordin={jamstackData?.accordian?.accordinaList}
          />
        </div>
      </section>

      <section className="flex flex-col bg-accent-100 justify-center items-center">
        <Cta isInner={true} {...jamstackData?.cta} />
      </section>

      <section className="py-24">
        <h2 className="text-center mb-6 md:mb-8">
          {jamstackData?.productCard?.heading}
        </h2>
        <div>
          <ProductCard cards={jamstackData?.productCard?.cards} />
        </div>
      </section>
    </Layout>
  );
};

export default Jamstack;
