import { usePreview } from '@/lib/sanity.preview'
import Index from '.'
import { aboutQuery } from '@/lib/sanity.queries'
import { refactorAbout } from '@/utils/about';

export default function HomePagePreview({
    token,
    aboutData,
    settings,
    params = {}
}) {
    const AboutDataPreview = usePreview(token, aboutQuery);
    if (!AboutDataPreview || !settings) {
        return (
            <div className="text-center">
                Please start editing your about document to see the preview!
            </div>
        )
    }

    return <Index aboutData={refactorAbout(AboutDataPreview)} settings={settings} preview={true} />
}
