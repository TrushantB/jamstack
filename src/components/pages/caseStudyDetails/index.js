import Layout from "@/components/layout";
import BlogCard from "@/components/blogCard/BlogCard";
import CaseStudyDetailsTableContent from "@/components/caseStudyDetailsTableContent/caseStudyDetailsTableContent";
import CaseStudyDetailsBanner from "@/components/caseStudyDetailsBanner/caseStudyDetailsBanner";

export default function CaseStudyDetails({ caseStudyData, settings, preview }) {
    return (
        <Layout header={settings.header} footer={settings.footer} preview={preview}>
            <div>
                <CaseStudyDetailsBanner caseStudyData={caseStudyData} />

                <CaseStudyDetailsTableContent caseStudyData={caseStudyData} />

                <div className="my-8 lg:my-16">
                    <div className="text-center">
                        <h2>{caseStudyData?.blogCard?.heading}</h2>
                    </div>
                    <div className="px-3 ">
                        <BlogCard {...caseStudyData?.blogCard} page="case-study-details" />
                    </div>
                </div>
            </div>
        </Layout>
    );
} 

