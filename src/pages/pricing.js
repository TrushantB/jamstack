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
          <Accordion {...pricingData?.accordinData} />
        </div>
        <div className="container mx-auto">
          <div className="flex justify-start items-center">
            <Link href={pricingData?.accordinData?.button?.href}>
              {pricingData?.accordinData?.button?.buttonLabel}
            </Link>
            <div
              className={`w-16 h-16 rounded-full bg-primary relative -z-10 -m-10 my-5`}
            ></div>
          </div>
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

  const [settings, pricing] = await Promise.all([
    getSettings({ token }),
    getPricing({ token }),
  ])

  if (!pricing) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      pricingData: refactorPricing(pricing),
      settings: refactorSettings(settings),
      preview,
      token: previewData.token ?? null,
    },
  }
}

export default Pricing;
