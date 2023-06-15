import { urlForImage } from '@/lib/sanity.image'
import Head from 'next/head'

/**
 * All the shared stuff that goes into <head> on `(personal)` routes, can be be imported by `head.tsx` files in the /app dir or wrapped in a <Head> component in the /pages dir.
 */
export function SiteMeta({
    description,
    image,
    title,
}) {
    const imageUrl =
        image && urlForImage(image)?.width(1200).height(627).fit('crop').url()

    return (
        <Head>
            <title>{title || "jamstack"}</title>
            {description && (
                <meta key="description" name="description" content={description} />
            )}
            {imageUrl && <meta property="og:image" content={imageUrl} />}
        </Head>
    )
}
