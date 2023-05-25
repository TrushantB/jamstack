import { React, useEffect, useState } from "react";
import { get } from "@/client/api";
import Layout from "@/components/layout";
import Banner from "@/components/presentational/banner/Banner";

const About = ({ header, footer }) => {

  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    get("aboutUs").then((response) => {
      setAboutData(response);
      console.log(aboutData)
    });
  }, []);
  console.log(header, footer);


  return (
    <Layout header={header} footer={footer}>
      <div>
        <div>
            <Banner {...aboutData.banner} />
        </div>

        <div className="flex flex-col py-16 bg-accent-100 ">
          <h2 className="text-4xl  lg:w-6/12  lg:pl-24">
            Purpose behind Jamstack+
          </h2>
          <p className="heading-4 lg:pl-24 lg:w-10/12 pt-3">
            Technology that simplifies digital journey for ambitious businesses!
          </p>
        </div>

        <div className="flex justify-center items-center pt-32  pb-24 ">
          <h2 className=" text-center  lg:w-8/12 ">
            At Jamstack+ we serve the perfect{" "}
            <span className="text-tertiary">RECIPE </span>
          </h2>
        </div>

        <div className="flex flex-col text-white lg:pl-24  bg-secondary ">
          <h2 className=" mt-20 mb-14">Journey of Jamstack+</h2>

          <p className=" w-10/12 heading-4 mb-12">
            We began the journey with the goal of giving the best, creatively
            made, and timeless solutions to our valued consumers through
            technology. On this journey, we worked with the same JAMstack basics
            from beginning to end of the project.
          </p>
          <p className=" w-10/12 heading-4 mb-12">
            We envisioned building a single platform that would provide
            everything for everyone online. As a result of our efforts to
            justify JAMstack, we created the Jamstack+: the next generation of
            modern technology.
          </p>
          <p className=" w-10/12 heading-4 mb-12">
            We developed J+heros to deliver solutions across all platforms.
            These are thoroughly processed, rehearsed, and well-engineered
            solutions for anyone wishing to advance their digital platforms
            using popular technology.
          </p>
        </div>

        <div className="border-t-2 border-b-2 border-red-600">
          <div className="flex lg:px-24   my-24">
            <div className="border-2 w-3/12  ">
              <h2> Our PLUS Factors:</h2>
            </div>
            <div className="border-2 w-8/12  p-10">Card section</div>
          </div>
        </div>

        {/* How we do it */}
        <div className="border-t-2 border-b-2 pb-32 border-blue-600">
          <h2 className="text-4xl text-center ">How we do it</h2>
        </div>
      </div>

      <div className="flex flex-col text-white lg:pl-24  bg-secondary ">
        <h2 className=" mt-20 mb-14 w-10/12">
          “Simplifying and scaling up your noteworthy digital journey”
        </h2>
        <h3 className="w-10/12 lg:text-right">-Team Jamstack</h3>
      </div>
    </Layout>
  );
};
export default About;
