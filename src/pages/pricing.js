import Layout from "@/components/layout";
import PricingPlan from "@/components/pricingPlan/PricingPlan";
import Banner from "@/components/presentational/banner/Banner";
import TextBanner from "@/components/textBanner/TextBanner";
import WebStactics from "@/components/webStactics/WebStactics";
import ConnectChoose from "@/components/connectChoose/ConnectChoose";
import PricingPlanMobile from "@/components/pricingPlan copy/PricingPlanMobile";
import Accordion from "@/components/accordian/accordion";
import Link from "next/link";
import { getPricing, getSettings } from "@/lib/sanity.client";
import { refactorSettings } from "@/utils/settings";
import { refactorPricing } from "@/utils/pricing";

const Pricing = ({ pricingData, settings }) => {

  if (!pricingData) {
    return <></>;
  }
  return (
    <Layout header={settings.header} footer={settings.footer}>
      <div className="pt-0">
        <Banner {...pricingData?.banner} />
      </div>

      <div className="pt-0">
        <TextBanner {...pricingData?.textBanner} />
      </div>

      <div>
        <WebStactics {...pricingData?.Webstatstics} />
      </div>
      <div className="hidden md:block">
        <PricingPlan customPlan={pricingData.customPlan} />
      </div>
      <div className="md:hidden">
        <PricingPlanMobile customPlan={pricingData.customPlan} />
      </div>

      <div className="container mx-auto py-16 lg:py-24">
        <div className="mb-5">
          <h2>{pricingData?.accordinData.heading}</h2>
        </div>
        <div>
          <Accordion {...pricingData?.accordinData} isActiveFirst={true} />
        </div>
      </div>

      <div>
        <ConnectChoose {...pricingData?.ConnectChoose} />
      </div>
    </Layout>
  );
};

export const getStaticProps = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const token = previewData.token
  const [settings, data] = await Promise.all([
    getSettings({ token }),
    getPricing({ token }),
  ])

  return {
    props: {
      pricingData: refactorPricing(data),
      settings: refactorSettings(settings),
      preview,
      token: previewData.token ?? null,
    },
  }
}

export default Pricing;
