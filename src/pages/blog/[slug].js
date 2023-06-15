import Layout from "@/components/layout";
import BlogDetailsBanner from "@/components/blogDetailsBanner/blogDetailsBanner";
import BlogDetailsTableContent from "@/components/blogDetailsTableContent/blogDetailsTableContent";
import BlogCard from "@/components/blogCard/BlogCard";
import { getBlog, getBlogPaths, getSettings } from "@/lib/sanity.client";
import { refactorSettings } from "@/utils/settings";
import { refactorBlog } from "@/utils/blogs";

export default function BlogDetails({ blogData, settings }) {
    return (
        <Layout header={settings.header} footer={settings.footer}>
            <div>
                <BlogDetailsBanner blogData={blogData} />

                <BlogDetailsTableContent blogData={blogData} />

                <div className="my-8 lg:my-16">
                    <div className="text-center">
                        <h2>{blogData?.blogCard?.heading}</h2>
                    </div>
                    <div className="px-3 ">
                        <BlogCard {...blogData?.blogCard} />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

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
