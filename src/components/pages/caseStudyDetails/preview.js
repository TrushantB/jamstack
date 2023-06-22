import { usePreview } from '@/lib/sanity.preview'
import { caseStudyPageQuery } from '@/lib/sanity.queries'
import CaseStudyDetails from '.';
import { refactorCaseStudyDetails } from '@/utils/caseStudy';


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

    return <CaseStudyDetails caseStudyData={refactorCaseStudyDetails(caseStudyDataPreview)} settings={settings} preview={true} />
}
