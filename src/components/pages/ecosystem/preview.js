import { usePreview } from '@/lib/sanity.preview'
import Index from '.'
import { ecoQuery } from '@/lib/sanity.queries'
import { refactorEco } from '@/utils/ecosystem';

export default function EcoSystemPreview({
    token,
    ecosystemData,
    settings,
    params = {}
}) {
    const EcoSystemDataPreview = usePreview(token, ecoQuery);
    if (!EcoSystemDataPreview || !settings) {
        return (
            <div className="text-center">
                Please start editing your ecosystem document to see the preview!
            </div>
        )
    }

    return <Index ecosystemData={refactorEco(EcoSystemDataPreview)} settings={settings} preview={true} />
}
