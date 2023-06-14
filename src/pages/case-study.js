import { React} from "react";
import { get } from "@/client/api";
import CaseStudy from "@/components/caseStudy/CaseStudy";
import Layout from "@/components/layout";
import { getCaseStudy, getSettings } from "@/lib/sanity.client";
import { refactorCaseStudy } from "@/utils/caseStudy";
import { refactorSettings } from "@/utils/settings";

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
export const getStaticProps = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const token = previewData.token
  const [settings, data] = await Promise.all([
    getSettings({ token }),
    getCaseStudy({ token }),
  ])

  return {
    props: {
      caseStudyData : refactorCaseStudy(data),
      settings: refactorSettings(settings),
      preview,
      token: previewData.token ?? null,
    },
  }
}

export default CaseStudyPage;
