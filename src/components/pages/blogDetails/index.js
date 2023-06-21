import Layout from "@/components/layout";
import BlogDetailsBanner from "@/components/blogDetailsBanner/blogDetailsBanner";
import BlogDetailsTableContent from "@/components/blogDetailsTableContent/blogDetailsTableContent";
import BlogCard from "@/components/blogCard/BlogCard";

export default function BlogDetails({ blogData, settings, preview }) {
  return (
    <Layout header={settings.header} footer={settings.footer} preview={preview}>
      <section>
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
      </section>
    </Layout>
  );
}
