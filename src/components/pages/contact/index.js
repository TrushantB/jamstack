import { React } from "react";
import Layout from "@/components/layout";
import Form from "@/components/form";
import CaseStudy from "@/components/caseStudy/CaseStudy";
import TestimonialCard from "@/components/presentational/testimonialCard/TestimonialCard";
import BlogCard from "@/components/blogCard/BlogCard";

const Contact = ({ contactData, settings, preview }) => {
    return (
        <Layout header={settings.header} footer={settings.footer} preview={preview}>
            <div className="container mx-auto">
                <div className="lg:px-6 px-5 pt-10 lg:pt-24">
                    <h2 className="lg:w-3/4">{contactData?.heading}</h2>
                    <p className="lg:w-3/4 pt-6">{contactData?.description}</p>
                </div>
                <div className="lg:px-6 px-5 pt-10 pb-10">
                    <Form script={contactData?.form} />
                </div>

                <div className="lg:px-6 px-5 pt-5 lg:pt-16 md:w-3/4">
                    <h3 className=" pb-3">{contactData?.contactDetails}</h3>
                    <a
                        href="mailto: hello@jamstack.plus"
                        className="text-primary heading-5 lg:text-4xl"
                    >
                        {contactData?.contactEmail}
                    </a>
                </div>

                <div className="pt-14 md:pt-20 lg:pt-24 px-5 lg:px-6">
                    <CaseStudy {...contactData?.caseStudy} />
                </div>

                <div className="lg:px-6 px-5 pt-28">
                    <TestimonialCard {...contactData?.testimonialCard} />
                </div>

                <div className="lg:px-6 pt-24">
                    <BlogCard {...contactData?.blogCard} />
                </div>
            </div>

        </Layout>
    );
};


export default Contact;
