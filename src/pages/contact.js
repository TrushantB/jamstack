import { React, useEffect, useState } from "react";
import Form from "@/components/form";
import { get } from "@/client/api";
import CaseStudy from "@/components/caseStudy/CaseStudy";
import TestimonialCard from "@/components/presentational/testimonialCard/TestimonialCard";
import BlogCard from "@/components/blogCard/BlogCard";
import Layout from "@/components/layout";

const Contact = () => {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    get("contactUs").then((response) => {
      setContactData(response);
    });
  }, []);

  return (
    // <Layout>
      <div className="container mx-auto">
        <div className="lg:pl-24 pt-24">
          <h2 className="lg:w-7/12">{contactData?.heading}</h2>
          <p className="w-1/2 pt-6">{contactData?.description}</p>
        </div>
        <div className="lg:px-24 pt-10 pb-10">
          <Form script={contactData?.form} />
        </div>

        <div className="px-24 pt-32">
          <h3 className="lg:w-8/12 pb-5">{contactData?.contactDetails}</h3>
          <a
            href="mailto: hello@jamstack.plus"
            className="text-primary heading-4"
          >
            {contactData?.contactEmail}
          </a>
        </div>

        <div className="pt-48 px-24">
          <CaseStudy {...contactData?.caseStudy} />
        </div>

        <div className="lg:px-24 px-5 pt-28">
          <TestimonialCard {...contactData?.testimonialCard} />
        </div>

        <div className="lg:px-24 px-5 pt-24">
          <BlogCard {...contactData?.blogCard} />
        </div>
      </div>
    // </Layout>
  );
};
export default Contact;
