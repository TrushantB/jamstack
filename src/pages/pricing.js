import { React, useEffect, useState } from "react";
import { get } from "@/client/api";
import Layout from "@/components/layout";
import PricingPlan from "@/components/pricingPlan/PricingPlan";
import Banner from "@/components/presentational/banner/Banner";
import TextBanner from "@/components/textBanner/TextBanner";
import WebStactics from "@/components/webStactics/WebStactics";
import ConnectChoose from "@/components/connectChoose/ConnectChoose";
import PricingPlanMobile from "@/components/pricingPlan copy/PricingPlanMobile";
import Accordion from "@/components/accordian/accordion";
import Link from "next/link";

const Pricing = ({ header, footer , priceData }) => {

  if (!priceData) {
    return <></>;
  }
  return (
    <Layout header={header} footer={footer}>
      <div className="pt-0">
        <Banner {...priceData?.banner} />
      </div>

      <div className="pt-0">
        <TextBanner {...priceData?.textBanner} />
      </div>

      <div>
        <WebStactics {...priceData?.Webstatstics} />
      </div>
      <div className="hidden md:block">
        <PricingPlan customPlan={priceData.customPlan} />
      </div>
      <div className="md:hidden">
        <PricingPlanMobile customPlan={priceData.customPlan} />
      </div>

      <div className="container mx-auto py-16 lg:py-24">
        <div className="mb-5">
          <h2>{priceData?.accordinData.heading}</h2>
        </div>
        <div>
          <Accordion {...priceData?.accordinData} />
        </div>
        <div className="container mx-auto">
          <div className="flex justify-start items-center">
            <Link href={priceData?.accordinData?.button?.href}>
              {priceData?.accordinData?.button?.buttonLabel}
            </Link>
            <div
              className={`w-16 h-16 rounded-full bg-primary relative -z-10 -m-10 my-5`}
            ></div>
          </div>
        </div>
      </div>

      <div>
        <ConnectChoose {...priceData?.ConnectChoose} />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const priceData = await get("pricing");
  return { props: { priceData } };
}
export default Pricing;
