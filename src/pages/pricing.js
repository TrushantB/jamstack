import { React, useEffect, useState } from "react";
import { get } from "@/client/api";
import Layout from "@/components/layout";
import PricingPlan from "@/components/pricingPlan/PricingPlan";
import Banner from "@/components/presentational/banner/Banner";
import TextBanner from "@/components/textBanner/TextBanner";
import WebStactics from "@/components/webStactics/WebStactics";
import ConnectChoose from "@/components/connectChoose/ConnectChoose";
import PricingPlanMobile from "@/components/pricingPlan copy/PricingPlanMobile";

const Pricing = ({ header, footer }) => {
  const [priceData, setPriceData] = useState(null);

  useEffect(() => {
    get("pricing").then((response) => {
      setPriceData(response);
    });
  }, []);

  if (!priceData) {
    return <></>
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

      <div>
        <ConnectChoose {...priceData?.ConnectChoose} />
      </div>
    </Layout>
  );
};
export default Pricing;
