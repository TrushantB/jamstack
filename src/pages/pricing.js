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
      <section className="pt-0">
        <Banner {...pricingData?.banner} />
      </section>

      <section className="pt-0">
        <TextBanner {...pricingData?.textBanner} />
      </section>

      <section>
        <WebStactics {...pricingData?.Webstatstics} />
      </section>
      <section className="hidden md:block">
        <PricingPlan customPlan={pricingData.customPlan} />
      </section>
      <section className="md:hidden">
        <PricingPlanMobile customPlan={pricingData.customPlan} />
      </section>

      <section className="container mx-auto px-6  ">
        <div className="text-center lg:text-left mt-16 mb-5">
          <h2>{pricingData?.accordinData.heading}</h2>
        </div>
        <div>
          <Accordion {...pricingData?.accordinData} isActiveFirst={true} />
        </div>
      </section>

      <section>
        <ConnectChoose {...pricingData?.ConnectChoose} />
      </section>
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
