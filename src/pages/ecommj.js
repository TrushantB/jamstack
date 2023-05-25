import {React , useState , useEffect} from "react";
import { get } from "@/client/api";
import Layout from "@/components/layout";
import Stepper from "@/components/stepper/stepper";
import Banner from "@/components/presentational/banner/Banner";
import Info from "@/components/presentational/info/info";
import BlogCard from "@/components/blogCard/BlogCard";
import TestimonialCard from "@/components/presentational/testimonialCard/TestimonialCard";
import CaseStudy from "@/components/caseStudy/CaseStudy";
import MordernTechnology from "@/components/modernTechonology/modernTechnology";
import ModernTechnologyOne from "@/components/modernTechnologyOne/modernTechnologyOne";



  const Ecommj = ({ header, footer }) => {
    const [ecommjData, setEcommjData] = useState(null);
  
    useEffect(() => {
      get("ecomj").then((response) => {
        setEcommjData(response);
        
      });
    }, []);

  console.log("here" , ecommjData?.stepperData)

    if (!ecommjData) {
      return <></>;
    }
  return (
    <Layout header={header} footer={footer}>
      {/* Banner section */}
      <div className=" pb-32 pt-32 px-24 ">
      <Banner {...ecommjData.banner}/>
      </div>

      {/* Ecomm section */}
     <Info {...ecommjData.info}/>

      {/* Ecomm process */}
      <div className="pb-24 px-24 ">

        
          <Stepper {...ecommjData?.stepperData}/>
    
      </div>

      {/* Facts Section with bg color */}
      <div>
        <ModernTechnologyOne {...ecommjData?.morderTechnologyOne}/>
        
      </div>

     

      {/* Facts Section with bg color */}
     
        <h2 className="text-center text-4xl">Accordian Section</h2>
        <div className="flex flex-col lg:flex-row bg-white  ">
          <div className="px-10 py-1 border-2 w-5/12">section1</div>
          <div className="px-10 py-1 border-2 w-7/12">Section2</div>
        </div>
      

      {/* case study section */}
      <div className=" border-t-2 border-b-2 pb-24">
       <CaseStudy {...ecommjData?.caseStudy}/>
      </div>

      {/* cta section */}
      <div className="flex fle-col bg-accent-100 justify-center items-center">
        <h2 className="text-4xl py-20 ">Excited to switch to ecommJ?</h2>
      </div>

      {/* Testimonial section */}
      <div className="py-24 border-t-2 border-b-2 ">
        <TestimonialCard {...ecommjData?.testimonialCard}/>
      </div>

      {/*  blog section */}
      <div className=" border-b-2 pb-24 ">
       <BlogCard {...ecommjData?.blogCard}/>
      </div>
    </Layout>
  );
};

export default Ecommj;
