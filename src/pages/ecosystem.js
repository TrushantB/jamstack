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

      <div className="px-5 lg:px-24 py-24  " >
        {<EcoSystemBanner {...ecoData.ecoBanner} />}
      </div>

      <div className="pb-24 px-5 lg:px-24">
        <div className=" pb-6">
          <h2>{ecoData.accordinData?.heading}</h2>
        </div>
        <div className="">
          {<EcosystemAccordion  {...ecoData.accordinData} />}
        </div>
      </div>

      {/* Connect check choose section*/}
      <div className="lg:px-24 px-5 pb-24 ">
        <ConnectChoose  {...ecoData.ConnectChoose} />
      </div>
    </Layout>
  );
};

export default Ecosysterm;
