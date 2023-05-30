import { React, useEffect, useState } from "react";
import { get } from "@/client/api";
import Layout from "@/components/layout";
import BlogDetailsBanner from "@/components/blogDetailsBanner/blogDetailsBanner";
import BlogDetailsTableContent from "@/components/blogDetailsTableContent/blogDetailsTableContent";
import BlogContentWriting from "@/components/blogContentWriting/blogContentWriting";
import BlogContactCard from "@/components/blogContactCard/blogContactCard";
import BlogCard from "@/components/blogCard/BlogCard";

export default function BlogDetails() {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    get("blogDetailsPage").then((response) => {
      setBlogData(response);
    });
  }, []);

  return (
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
  );
}
