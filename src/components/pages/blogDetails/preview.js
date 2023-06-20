import { usePreview } from '@/lib/sanity.preview'
import { blogPageQuery } from '@/lib/sanity.queries'
import BlogDetails from "@/components/pages/blogDetails";
import { refactorBlog } from '@/utils/blogs';


export default function BlogDetailPagePreview({
    token,
    blogData,
    settings,
    params = {}
}) {
    const blogDataPreview = usePreview(token, blogPageQuery, params);
    if (!blogDataPreview || !settings) {
        return (
            <div className="text-center">
                Please start editing your Contact document to see the preview!
            </div>
        )
    }

    return <BlogDetails blogData={refactorBlog(blogDataPreview)} settings={settings} preview={true} />
}
