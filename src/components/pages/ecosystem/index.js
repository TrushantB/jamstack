import { EcoSystemBanner } from "@/components/ecoSystemBanner/ecoSystemBanner";
import Layout from "@/components/layout";
import ConnectChoose from "@/components/connectChoose/ConnectChoose";
import EcosystemAccordion from "@/components/ecosystermAccordian/ecosystemAccordian";


const Ecosysterm = ({ ecosystemData, settings, preview }) => {

  if (!ecosystemData) {
    return <></>;
  }
  return (
    <Layout header={settings.header} footer={settings.footer} preview={preview}>

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

export default Ecosysterm;
