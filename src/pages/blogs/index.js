import LinkButton from "@/components/Link/Link";
import Layout from "@/components/layout";
import { getBlogs, getSettings } from "@/lib/sanity.client";
import { refactorBlogs } from "@/utils/blogs";
import { refactorSettings } from "@/utils/settings";
import Link from "next/link";

function Blogs({ blogData, settings }) {
  return (
    <Layout header={settings.header} footer={settings.footer}>
      <div className="lg:px-24 p-5">
        <div className=''>
          <div className="page-title py-8">
            <h1>{blogData.title}</h1>
          </div>
          {blogData.blogs && blogData.blogs.map((item, index) => (
            <div key={index} className="sm:flex items-start gap-5 pb-12 lg:pb-16">
              <div className="lg:w-2/5 pb-5 lg:pb-0">
                <Link href={`/blogs/${item.slug}`}>
                  <img className="w-full md:w-96 h-auto rounded-3xl " src={item.image} />
                </Link>
              </div>
              <div className="w-ful ">
                <a >
                  <h4 className='text-2xl md:text-4xl'>{item.title}</h4>
                </a>
                <div className="pt-4">
                  <a href={item.href} className="flex items-center gap-4">
                    <img className="w-8 circle" src={item.author.image} />
                    <p className="w-15 text-sm md:text-md">{item.author.name}</p>
                  </a>
                </div>
                <div className="pt-7">
                  <LinkButton label={blogData.label} hasIcon={blogData.hasIcon} href={item.slug} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
export const getStaticProps = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const token = previewData.token
  const [settings, blogs] = await Promise.all([
    getSettings({ token }),
    getBlogs({ token }),
  ])

  return {
    props: {
      blogData: refactorBlogs(blogs),
      settings: refactorSettings(settings),
      preview,
      token: previewData.token ?? null,
    },
  }
}

export default Blogs;
