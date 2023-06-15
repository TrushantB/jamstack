import { usePreview } from '@/lib/sanity.preview'
import Index from '.'
import { jamStackQuery } from '@/lib/sanity.queries'
import { refactorJamStack } from '@/utils/jamStack';

export default function JamstackPreview({
    token,
    jamstackData,
    settings,
    params = {}
}) {
    const JamstackDataPreview = usePreview(token, jamStackQuery);
    if (!JamstackDataPreview || !settings) {
        return (
            <div className="text-center">
                Please start editing your jamStack document to see the preview!
            </div>
        )
    }

    return <Index jamstackData={refactorJamStack(JamstackDataPreview)} settings={settings} preview={true} />
}
