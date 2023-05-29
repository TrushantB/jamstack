import { React, useEffect, useState } from "react";
import { get } from "@/client/api";
import Layout from "@/components/layout";
import BlogDetailsBanner from "@/components/blogDetailsBanner/blogDetailsBanner";
import BlogDetailsTableContent from "@/components/blogDetailsTableContent/blogDetailsTableContent";
import BlogContentWriting from "@/components/blogContentWriting/blogContentWriting";
import BlogContactCard from "@/components/blogContactCard/blogContactCard";
export default function blogDetails() {
  return (
   <div>
        <BlogDetailsBanner />
        <BlogDetailsTableContent />   
   </div>
  )
}
