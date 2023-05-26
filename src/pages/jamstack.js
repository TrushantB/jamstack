import Layout from "@/components/layout";
import React from "react";

const jamstack = ({ header, footer }) => {
  return (
    <Layout header={header} footer={footer}>
      {/* Banner section */}
      <div className="border-t-2 border-b-2 pb-32 border-blue-600">
        <h2 className="text-center text-2xl">Banner</h2>
      </div>{" "}
      {/* Banner section */}
      <div className="border-t-2 border-b-2 pb-32 border-blue-600">
        <h2 className="text-center text-2xl">Banner</h2>
      </div>
      {/* Card section */}
      <div className="border-t-2 border-b-2 pb-32 border-blue-600">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:pl-24 lg:w-5/12">
            <h2 className="w-10/12 pb-2">Why we love JAM?</h2>
            <p className=" text-justify ">
              Why we love JAM? Easy CMS Ultra Fast Highly Secure Since JAM
              development is not a specific technology or language to build the
              web solutions , it’s instead a countless combination of tools and
              languages that are combined to create the final product. Tailored
              Tech Stack Cheap Scaling Easy Maintain
            </p>
          </div>
          <div className="lg:w-7/12 flex justify-center items-center text-4xl">
            Card section
          </div>
        </div>
      </div>
      {/* Banner section */}
      <div className="border-t-2 border-b-2 pb-32 border-blue-600">
        <h2 className="text-center text-2xl">Accordian Section</h2>
      </div>
      <div className="flex fle-col bg-accent-100 ">
        <h2 className="text-4xl py-20 lg:w-6/12  lg:pl-24">
          Jamstack is the way to sustainable success and Jamstack+ is your
          gateway.
        </h2>
      </div>
      {/* Product card section */}
      <div className="py-24 border-t-2 border-b-2 border-blue-500">
        <h2 className="text-center text-4xl">Product card</h2>
      </div>
    </Layout>
  );
};

export default jamstack;
