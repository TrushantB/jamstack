import { React, useEffect, useState } from "react";
import { get } from "@/client/api";
import CaseStudy from "@/components/caseStudy/CaseStudy";
import Layout from "@/components/layout";

const CaseStudyPage = ({ header, footer }) => {
  const [caseStudyData, setCaseStudyData] = useState(null);

  useEffect(() => {
    get("caseStudyPage").then((response) => {
      setCaseStudyData(response);
    });
  }, []);

  if (!caseStudyData) {
    return <></>;
  }

  return (
    <Layout header={header} footer={footer}>
      <div className="container mx-auto my-9">
        <CaseStudy {...caseStudyData.caseStudy} />
      </div>
    </Layout>
  );
};

export default CaseStudyPage;
