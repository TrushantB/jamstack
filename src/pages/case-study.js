import { React} from "react";
import { get } from "@/client/api";
import CaseStudy from "@/components/caseStudy/CaseStudy";
import Layout from "@/components/layout";

const CaseStudyPage = ({ header, footer , caseStudyData }) => {
 
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
export async function getStaticProps() {
  const caseStudyData = await get("caseStudyPage");
  return { props: { caseStudyData } };
}

export default CaseStudyPage;
