import { React } from "react";
import Layout from "@/components/layout";
import Banner from "@/components/presentational/banner/Banner";
import MordernTechnology from "@/components/modernTechonology/modernTechnology";
import { JamStackRecipe } from "@/components/jamStackRecipe/jamStackRecipe";
import { JamStackStories } from "@/components/jamStackStories/JamStackStories";
import Card from "@/components/presentational/card/Card";
import JamSTackAuthor from "@/components/jamStactAuthor/JamSTackAuthor";
import { AboutArticle } from "@/components/aboutArticle/aboutArticle";

const About = ({ aboutData, settings, preview }) => {

  return (
    <Layout header={settings.header} footer={settings.footer} preview={preview}>
      <section className="container mx-auto">
        <Banner {...aboutData?.banner} />
      </section>
      <section className="flex flex-col py-16 bg-accent-100 ">
        <MordernTechnology {...aboutData?.morderTechnology} isInner={true} />
      </section>

      <section className="flex justify-center items-center py-24 px-3 lg:px-0  ">
        <JamStackRecipe {...aboutData?.jamStackRecipe} />
      </section>

      <section className="text-white bg-secondary py-12 md:py-24 px-4 xl:px-0">
        <div className="container mx-auto flex flex-col">
          <JamStackStories {...aboutData?.jamStackStories} />
        </div>
      </section>
      <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between container mx-auto px-4 xl:px-0 pt-16 xl:pt-20 xl:pb-4">
        <div className="lg:w-3/12 pb-0">
          <h2>{aboutData && aboutData.cards && aboutData.cards.heading}</h2>
        </div>
        <div className="lg:w-8/12">
          <Card items={aboutData?.cards?.cardsArray} />
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-0 py-16 lg:py-24">
        <AboutArticle jamStackProcess={aboutData?.jamStackProcess} />
      </section>

      <section className="text-white bg-secondary">
        <section className="container mx-auto px-4 md:px-0 py-16 lg:py-24 flex flex-col">
          <JamSTackAuthor {...aboutData?.jamstackQuote} />
        </section>
      </section>
    </Layout>
  );
};

export default About;
