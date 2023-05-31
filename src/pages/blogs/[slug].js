import { React, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { get } from "@/client/api";
import Layout from "@/components/layout";
import BlogDetailsBanner from "@/components/blogDetailsBanner/blogDetailsBanner";
import BlogDetailsTableContent from "@/components/blogDetailsTableContent/blogDetailsTableContent";
import BlogCard from "@/components/blogCard/BlogCard";

export default function BlogDetails({ header, footer }) {

  const [blogData, setBlogData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    get("blogDetailsPage").then((response) => {
      setBlogData(response);
    });
  }, []);

  return (
    <Layout header={header} footer={footer}>
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
