import { React, useEffect, useState } from "react";
import { get } from "@/client/api";
import Layout from '@/components/layout'
import Blogpage from "@/components/blog/Blogpage";

function Blog() {

    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
      get("blog").then((response) => {
        setBlogData(response);
      });
    }, []);
  

  return (
    <Layout >
        <div>
            {<Blogpage {...blogData} />}
        </div>            
    </Layout>

    )
}

export default Blog