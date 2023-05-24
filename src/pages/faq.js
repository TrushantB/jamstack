import Layout from "@/components/layout";
import React from "react";

const faq = ({ header, footer }) => {
  return (
    <Layout header={header} footer={footer}>
      {/* Banner section */}
      <div className="border-t-2 border-b-2 border-red-600 pb-32">
        <h2 className="text-center text-2xl">Banner</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white ">
          <div className="border-2  p-10">section1</div>
          <div className="border-2  p-10">Section2</div>
        </div>
      </div>

      {/* Faq  section */}
      <div className=" border-t-2 border-b-2 border-red-600 pb-32 ">
        <h2 className="text-center text-4xl">Faq section</h2>
      </div>

      {/* Blog card section */}
      <div className="pb-24 border-t-2 border-b-2 border-blue-500">
        <h2 className="text-center text-4xl">Blog card</h2>
      </div>
    </Layout>
  );
};

export default faq;
