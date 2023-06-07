import { React} from "react";
import { get } from "@/client/api";
import Layout from '@/components/layout'
import Blogpage from "@/components/blog/blogPage";

function Blog({ header, footer , blogData }) {

  return (
    <Layout header={header} footer={footer} >
      <div className="lg:px-24 p-5">
        {<Blogpage {...blogData} />}
      </div>
    </Layout>

  )
}

export async function getStaticProps() {
  const blogData = await get("blog");
  return { props: { blogData } };
}

export default Blog