import { React, useEffect, useState } from "react";
import { get } from "@/client/api";
import { EcoSystemBanner } from "@/components/ecoSystemBanner/ecoSystemBanner";
import Layout from "@/components/layout";
import Accordion from "@/components/accordian/accordion";
import ConnectChoose from "@/components/connectChoose/ConnectChoose";

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

      <div>
      {<EcoSystemBanner {...ecoData.ecoBanner} />}
      </div>

      <div >
        <div className="px-24 pb-6">
          <h2>{ecoData.accordinData?.heading}</h2>
        </div>
      <div className="pb-24 px-24">
        {<Accordion  {...ecoData.accordinData} />}
      </div>
      </div>

      {/* Connect check choose section*/}

      <div className="">
        <ConnectChoose  {...ecoData.ConnectChoose} />
      </div>
    </Layout>
  );
};

export default Ecosysterm;
