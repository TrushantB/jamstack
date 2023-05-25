import { React, useEffect, useState } from "react";
import { get } from "@/client/api";
import Layout from "@/components/layout";
import Banner from "@/components/presentational/banner/Banner";
import MordernTechnology from "@/components/modernTechonology/modernTechnology";
import { JamStackRecipe } from "@/components/jamStackRecipe/jamStackRecipe";
import { JamStackStories } from "@/components/jamStackStories/JamStackStories";
import Card from "@/components/presentational/card/Card";
import JamSTackAuthor from "@/components/jamStactAuthor/JamSTackAuthor";

const About = ({ header, footer }) => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    get("aboutUs").then((response) => {
      setAboutData(response);
    });
  }, []);

  return (
    <Layout header={header} footer={footer}>
      <div className="px-24">
        <Banner {...aboutData?.banner} />
      </div>

      <div className="flex flex-col py-16 bg-accent-100 ">
        <MordernTechnology {...aboutData?.morderTechnology} />
      </div>

      <div className="flex justify-center items-center pt-32  pb-24 ">
        <JamStackRecipe {...aboutData?.jamStackRecipe} />
      </div>

      <div className="flex flex-col text-white lg:pl-24  bg-secondary ">
        <JamStackStories {...aboutData?.jamStackStories} />
      </div>

      <div className="flex lg:px-24   my-24">
        <div className="w-3/12  ">
          <h2>
            {}
            {...aboutData?.cards?.heading}
          </h2>
        </div>
        <div className="w-8/12">
          <Card {...aboutData?.cards} />
        </div>
      </div>

      <div className="flex flex-col text-white lg:pl-24  bg-secondary ">
        <JamSTackAuthor {...aboutData?.jamstackQuote} />
      </div>
    </Layout>
  );
};
export default About;
