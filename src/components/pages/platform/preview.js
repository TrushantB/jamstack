import { usePreview } from '@/lib/sanity.preview'
import Platform from '.'
import { platformsQuery } from '@/lib/sanity.queries'
import { refactorPlatforms } from '@/utils/platforms';

export default function PlatformPagePreview({
    token,
    platformsData,
    settings,
    params
}) {
    const platformsDataPreview = usePreview(token, platformsQuery, params);

    if (!platformsDataPreview || !settings) {
        return (
            <div className="text-center">
                Please start editing your Platform document to see the preview!
            </div>
        )
    }

    return <Platform platformsData={refactorPlatforms(platformsDataPreview)} settings={settings} preview={true} />
}
