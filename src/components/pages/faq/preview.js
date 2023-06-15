import { usePreview } from '@/lib/sanity.preview'
import Index from '.'
import { faqPageQuery } from '@/lib/sanity.queries'
import { refactorFAQ } from '@/utils/faq';

export default function FaqPagePreview({
    token,
    faqData,
    settings,
    params = {}
}) {
    const FaqDataPreview = usePreview(token, faqPageQuery);
    if (!FaqDataPreview || !settings) {
        return (
            <div className="text-center">
                Please start editing your faq document to see the preview!
            </div>
        )
    }

    return <Index faqData={refactorFAQ(FaqDataPreview)} settings={settings} preview={true} />
}
