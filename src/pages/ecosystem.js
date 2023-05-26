import Layout from "@/components/layout";
import React from "react";

const ecosysterm = ({ header, footer }) => {
  return (
    <Layout header={header} footer={footer}>
      <div className="pl-24 pb-24 pt-24">
        <h1>What is Eco System?</h1>
        <p className="w-7/12 pt-5">
          In the digital era, it’s very important to build your web presence
          first. But the journey of getting good business doesn’t always stop
          there. We know that it’s not just the product but the brand name that
          rules over the market. And we sincerely want you to stand out and to
          be recognised as a well known brand.
        </p>
        <h5 className="pt-3">
          Ecosystem of making online brands with popular technology.
        </h5>
      </div>

      {/* Ecosysterm Accordian */}
      <div className=" pb-24 border-t-2 border-b-2 border-red-600">
        <h2 className="text-center text-4xl">Ecosysterm Accordian</h2>
      </div>

      {/* Connect check choose section*/}

      <div className="border-t-2 border-b-2 border-blue-600 pb-32 lg:pl-24">
        <h2 className=" ">Connect, Check, Choose</h2>
        <p className="w-5/12">
          Not sure what will work for you. Connect with Jamstack+ and know how
          can we help you improve your business.
        </p>
      </div>
    </Layout>
  );
};

export default ecosysterm;
