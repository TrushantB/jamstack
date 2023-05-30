import { React, useEffect, useState } from "react";
import { get } from "@/client/api";
import Layout from "@/components/layout";
import Banner from "@/components/presentational/banner/Banner";
import MordernTechnology from "@/components/modernTechonology/modernTechnology";
import { JamStackRecipe } from "@/components/jamStackRecipe/jamStackRecipe";
import { JamStackStories } from "@/components/jamStackStories/JamStackStories";
import Card from "@/components/presentational/card/Card";
import JamSTackAuthor from "@/components/jamStactAuthor/JamSTackAuthor";
import { AboutArticle } from "@/components/aboutArticle/aboutArticle";

const About = ({ header, footer }) => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    get("aboutUs").then((response) => {
      setAboutData(response);
    });
  }, []);

  return (
    <Layout header={header} footer={footer}>
      <div className="container mx-auto">
        <Banner {...aboutData?.banner} />
      </div>

      <div className="flex flex-col py-16 bg-accent-100 ">
        <MordernTechnology {...aboutData?.morderTechnology} isInner={true} />
      </div>

      <div className="flex justify-center items-center py-24 px-3 lg:px-0  ">
        <JamStackRecipe {...aboutData?.jamStackRecipe} />
      </div>

      <div className="text-white bg-secondary py-12 md:py-24 px-4 xl:px-0">
        <div className="container mx-auto flex flex-col"></div>
        <JamStackStories {...aboutData?.jamStackStories} />
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center container mx-auto px-4 xl:px-0 py-24">
        <div className="lg:w-3/12 pb-6">
          <h2>{aboutData && aboutData.cards && aboutData.cards.heading}</h2>
        </div>
        <div className="lg:w-8/12">
          <Card {...aboutData?.cards} />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-0 py-16 lg:py-24">
        <AboutArticle jamStackProcess={aboutData?.jamStackProcess} />
      </div>

      <div className="text-white bg-secondary">
        <div className="container mx-auto px-4 md:px-0 py-16 lg:py-24 flex flex-col">
          <JamSTackAuthor {...aboutData?.jamstackQuote} />
        </div>        
      </div>
    </Layout>
  );
};
export default About;
