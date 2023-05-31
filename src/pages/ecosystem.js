import { React, useEffect, useState } from "react";
import { get } from "@/client/api";
import { EcoSystemBanner } from "@/components/ecoSystemBanner/ecoSystemBanner";
import Layout from "@/components/layout";
import ConnectChoose from "@/components/connectChoose/ConnectChoose";
import EcosystemAccordion from "@/components/ecosystermAccordian/ecosystemAccordian";

const Ecosysterm = ({ header, footer }) => {

  const [ecoData, setEcoData] = useState(null);

  useEffect(() => {
    get("ecoSystem").then((response) => {
      setEcoData(response);
    });
  }, []);


  if (!ecoData) {
    return <></>;
  }
  return (
    <Layout header={header} footer={footer}>

      <div className="container mx-auto px-4 xl:px-0 py-16 lg:py-24" >
        {<EcoSystemBanner {...ecoData.ecoBanner} />}
      </div>

      <div className="container mx-auto px-4 xl:px-0">
        <div className="pb-6">
          <h2>{ecoData.accordinData?.heading}</h2>
        </div>
        <div className="">
          {<EcosystemAccordion  {...ecoData.accordinData} />}
        </div>
      </div>

      {/* Connect check choose section*/}
      <div className="container mx-auto px-4 xl:px-0 pb-6">
        <ConnectChoose  {...ecoData.ConnectChoose} />
      </div>
    </Layout>
  );
};

export default Ecosysterm;
