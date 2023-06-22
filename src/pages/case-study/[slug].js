import { lazy } from "react";
import { getCaseStudyBySlug, getCaseStudyPaths, getSettings } from "@/lib/sanity.client";
import { refactorSettings } from "@/utils/settings";
import { PreviewSuspense } from '@sanity/preview-kit'
import { PreviewWrapper } from "@/components/preview/PreviewWrapper";
import { refactorBlog } from "@/utils/blogs";
import CaseStudyDetails from "@/components/pages/caseStudyDetails";
import { refactorCaseStudyDetails } from "@/utils/caseStudy";

const CaseStudyDetailsPreview = lazy(
    () => import('@/components/pages/caseStudyDetails/preview')
)

export default function BlogDetailPage(props) {
    const { caseStudyData, settings, preview, token, params } = props

    if (!caseStudyData) {
        return <></>;
    }

    if (preview) {
        return (
            <PreviewSuspense
                fallback={
                    <PreviewWrapper>
                        <CaseStudyDetails caseStudyData={caseStudyData} settings={settings} preview={preview} />
                    </PreviewWrapper>
                }
            >
                <CaseStudyDetailsPreview token={token} settings={settings} params={params} />
            </PreviewSuspense>
        )
    }

    return <CaseStudyDetails caseStudyData={caseStudyData} settings={settings} />

};

export const getStaticProps = async (ctx) => {
    const { preview = false, previewData = {}, params } = ctx

    const token = previewData.token
    const [settings, data] = await Promise.all([
        getSettings({ token }),
        getCaseStudyBySlug({ token, slug: params.slug }),
    ])

    return {
        props: {
            caseStudyData: refactorCaseStudyDetails(data),
            settings: refactorSettings(settings),
            preview,
            token: previewData.token ?? null,
            params
        },
    }
}

export const getStaticPaths = async () => {
    const paths = await getCaseStudyPaths()

    return {
        paths: paths?.map((slug) => ({
            params: {
                slug,
            },
        })) || [],
        fallback: false,
    }
}
