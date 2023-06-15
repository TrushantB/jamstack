import { usePreview } from '@/lib/sanity.preview'
import Contact from '.'
import { contactQuery } from '@/lib/sanity.queries'
import { refactorContact } from '@/utils/contact';

export default function ContactPagePreview({
    token,
    contactData,
    settings,
    params = {}
}) {
    const contactDataPreview = usePreview(token, contactQuery);
    if (!contactDataPreview || !settings) {
        return (
            <div className="text-center">
                Please start editing your Contact document to see the preview!
            </div>
        )
    }

    return <Contact contactData={refactorContact(contactDataPreview)} settings={settings} preview={true} />
}
