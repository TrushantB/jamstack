import { usePreview } from '@/lib/sanity.preview'
import Index from '.'
import { homePageQuery } from '@/lib/sanity.queries'
import { refactorHome } from '@/utils/home';

export default function HomePagePreview({
    token,
    homeData,
    settings,
    params = {}
}) {
    const HomeDataPreview = usePreview(token, homePageQuery);
    if (!HomeDataPreview || !settings) {
        return (
            <div className="text-center">
                Please start editing your Home document to see the preview!
            </div>
        )
    }

    return <Index homeData={refactorHome(HomeDataPreview)} settings={settings} preview={true} />
}
