import { React } from "react";
import CaseStudy from "@/components/caseStudy/CaseStudy";
import Layout from "@/components/layout";
import { getCaseStudy, getSettings } from "@/lib/sanity.client";
import { refactorCaseStudy } from "@/utils/caseStudy";
import { refactorSettings } from "@/utils/settings";
import { CustomPortableText } from "@/components/shared/CustomPortableText";

const CaseStudyPage = ({ caseStudyData, settings }) => {

  if (!caseStudyData) {
    return <></>;
  }

  return (
    <Layout header={settings.header} footer={settings.footer}>
      <div className="container mx-auto my-9">
        
        <CustomPortableText value={caseStudyData?.content} />
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
      caseStudyData: refactorCaseStudy(data),
      settings: refactorSettings(settings),
      preview,
      token: previewData.token ?? null,
    },
  }
}

export default CaseStudyPage;
