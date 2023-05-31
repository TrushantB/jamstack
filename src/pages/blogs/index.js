import { React, useEffect, useState } from "react";
import { get } from "@/client/api";
import Layout from "@/components/layout";
import Blogpage from "@/components/blog/blogPage";

function Blog({ header, footer }) {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    get("blog").then((response) => {
      setBlogData(response);
    });
  }, []);

  return (
    <Layout header={header} footer={footer}>
      <div className="lg:px-24 p-5">
        <Blogpage {...blogData} />
      </div>
    </Layout>
  );
}

export default Blog;
