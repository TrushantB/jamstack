import { usePreview } from '@/lib/sanity.preview'
import { caseStudyPageQuery } from '@/lib/sanity.queries'
import { refactorBlog } from '@/utils/blogs';
import CaseStudyDetails from '.';


export default function CaseStudyDetailsPreview({
    token,
    caseStudyData,
    settings,
    params = {}
}) {
    const caseStudyDataPreview = usePreview(token, caseStudyPageQuery, params);
    if (!caseStudyDataPreview || !settings) {
        return (
            <div className="text-center">
                Please start editing your Contact document to see the preview!
            </div>
        )
    }

    return <CaseStudyDetails caseStudyData={refactorBlog(caseStudyDataPreview)} settings={settings} preview={true} />
}
