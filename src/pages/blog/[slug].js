import { lazy } from "react";
import { getBlog, getBlogPaths, getSettings } from "@/lib/sanity.client";
import { refactorSettings } from "@/utils/settings";
import { PreviewSuspense } from '@sanity/preview-kit'
import { PreviewWrapper } from "@/components/preview/PreviewWrapper";
import BlogDetails from "@/components/pages/blogDetails";
import { refactorBlog } from "@/utils/blogs";

const BlogDetailsPreview = lazy(
    () => import('@/components/pages/blogDetails/preview')
)

export default function BlogDetailPage(props) {
    const { blogData, settings, preview, token, params } = props

    if (!blogData) {
        return <></>;
    }

    if (preview) {
        return (
            <PreviewSuspense
                fallback={
                    <PreviewWrapper>
                        <BlogDetails blogData={blogData} settings={settings} preview={preview} />
                    </PreviewWrapper>
                }
            >
                <BlogDetailsPreview token={token} settings={settings} params={params} />
            </PreviewSuspense>
        )
    }

    return <BlogDetails blogData={blogData} settings={settings} />

};

export const getStaticProps = async (ctx) => {
    const { preview = false, previewData = {}, params } = ctx

    const token = previewData.token
    const [settings, blog] = await Promise.all([
        getSettings({ token }),
        getBlog({ token, slug: params.slug }),
    ])

    return {
        props: {
            blogData: refactorBlog(blog),
            settings: refactorSettings(settings),
            preview,
            token: previewData.token ?? null,
            params
        },
    }
}

export const getStaticPaths = async () => {
    const paths = await getBlogPaths()

    return {
        paths: paths?.map((slug) => ({
            params: {
                slug,
            },
        })) || [],
        fallback: false,
    }
}
