import Layout from "@/components/layout";
import React from "react";

const pricing = () => {
  return (
    <Layout>
      {/* Banner section with image bottom  */}
      <div className="pb-24 border-t-2 border-b-2 border-blue-600">
        <h2 className="text-center text-4xl">Banner Image bottom </h2>
      </div>

      {/* web facts section */}
      <div className=" p-5 lg:px-20 flex flex-col gap-5 py-12 bg-accent-100 ">
        <div className={`w-20 h-20 rounded-full bg-tertiary`}></div>
        <div>
          <h3 className="w-11/12">
            Google found that 53% of mobile users will leave a website that
            takes longer than three seconds to load.
          </h3>
        </div>
      </div>

      {/* web statics */}

      <div className="bg-secondary text-white lg:pl-28 lg:py-16">
        <div className="">
          <h2 className="">Know your webstatics</h2>
        </div>
        <div className="">
          <p className="w-7/12">
            Check your website performance and check how Jamstack+ can help you
            improve your business.
          </p>
        </div>
      </div>

      {/* Custom Plan */}

      <div className="border-t-2 border-b-2 border-red-600">
        <h3 className="text-4xl text-center py-24 ">Custom Plan</h3>
      </div>

      {/* Pricing Faq section */}

      <div className="border-t-2 border-b-2 border-blue-600 pb-32">
        <h3 className="text-4xl  text-center ">Pricing Faq</h3>
      </div>

      {/* Connect check choose section*/}

      <div className="border-t-2 border-b-2 border-red-600 pb-32 lg:pl-24">
        <h2 className=" ">Connect, Check, Choose</h2>
        <p className="w-5/12">
          Not sure what will work for you. Connect with Jamstack+ and know how
          can we help you improve your business.
        </p>
      </div>
    </Layout>
  );
};

export default pricing;
