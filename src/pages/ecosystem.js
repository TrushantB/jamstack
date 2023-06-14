import { EcoSystemBanner } from "@/components/ecoSystemBanner/ecoSystemBanner";
import Layout from "@/components/layout";
import ConnectChoose from "@/components/connectChoose/ConnectChoose";
import EcosystemAccordion from "@/components/ecosystermAccordian/ecosystemAccordian";
import { getEcoSystem, getSettings } from "@/lib/sanity.client";
import { refactorEco } from "@/utils/ecosystem";
import { refactorSettings } from "@/utils/settings";

const Ecosysterm = ({ ecosystemData, settings }) => {

  if (!ecosystemData) {
    return <></>;
  }
  return (
    <Layout header={settings.header} footer={settings.footer}>

      <div className="container mx-auto px-4 xl:px-0 py-16 lg:py-24" >
        {<EcoSystemBanner {...ecosystemData.ecoBanner} />}
      </div>

      <div className="container mx-auto px-4 xl:px-0">
        <div className="pb-6">
          <h2>{ecosystemData.accordinData?.heading}</h2>
        </div>
        <div className="">
          {<EcosystemAccordion  {...ecosystemData.accordinData} />}
        </div>
      </div>

      <div className="container mx-auto px-4 xl:px-0 pb-6">
        <ConnectChoose  {...ecosystemData.ConnectChoose} />
      </div>
    </Layout>
  );
};
export const getStaticProps = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const token = previewData.token
  const [settings, data] = await Promise.all([
    getSettings({ token }),
    getEcoSystem({ token }),
  ])

  return {
    props: {
      ecosystemData: refactorEco(data),
      settings: refactorSettings(settings),
      preview,
      token: previewData.token ?? null,
    },
  }
}
export default Ecosysterm;
