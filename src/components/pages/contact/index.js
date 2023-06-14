import { React } from "react";
import Layout from "@/components/layout";
import Form from "@/components/form";
import CaseStudy from "@/components/caseStudy/CaseStudy";
import TestimonialCard from "@/components/presentational/testimonialCard/TestimonialCard";
import BlogCard from "@/components/blogCard/BlogCard";
import { getContacts, getSettings } from "@/lib/sanity.client";
import { refactorContact } from "@/utils/contact";
import { refactorSettings } from "@/utils/settings";

const Contact = ({ contactData, settings }) => {
    return (
        <Layout header={settings.header} footer={settings.footer}>
            <div className="container mx-auto">
                <div className="lg:px-6 px-5 pt-24">
                    <h2 className="lg:w-3/4">{contactData?.heading}</h2>
                    <p className="lg:w-3/4 pt-6">{contactData?.description}</p>
                </div>
                <div className="lg:px-6 px-5 pt-10 pb-10">
                    <Form script={contactData?.form} />
                </div>

                <div className="lg:px-6 px-5 pt-16 md:w-3/4">
                    <h3 className=" pb-5">{contactData?.contactDetails}</h3>
                    <a
                        href="mailto: hello@jamstack.plus"
                        className="text-primary heading-5 lg:text-4xl"
                    >
                        {contactData?.contactEmail}
                    </a>
                </div>

                <div className="pt-20 md:pt-32 px-5 lg:px-6">
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

export async function getStaticProps(ctx) {
    const { preview = false, previewData = {} } = ctx

    const token = previewData.token
    const [settings, contact] = await Promise.all([
        getSettings({ token }),
        getContacts({ token }),
    ])

    return {
        props: {
            contactData: refactorContact(contact),
            settings: refactorSettings(settings),
            preview,
            token: previewData.token ?? null,
        },
    }
}

export default Contact;
