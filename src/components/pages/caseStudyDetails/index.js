import Layout from "@/components/layout";
import BlogDetailsBanner from "@/components/blogDetailsBanner/blogDetailsBanner";
import BlogDetailsTableContent from "@/components/blogDetailsTableContent/blogDetailsTableContent";
import BlogCard from "@/components/blogCard/BlogCard";

export default function CaseStudyDetails({ caseStudyData, settings, preview }) {
    return (
        <Layout header={settings.header} footer={settings.footer} preview={preview}>
            <div>
                <BlogDetailsBanner blogData={caseStudyData} />

                <BlogDetailsTableContent blogData={caseStudyData} />

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

