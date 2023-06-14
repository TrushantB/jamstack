import Layout from "@/components/layout";
import Stepper from "@/components/stepper/stepper";
import Banner from "@/components/presentational/banner/Banner";
import Info from "@/components/presentational/info/info";
import BlogCard from "@/components/blogCard/BlogCard";
import TestimonialCard from "@/components/presentational/testimonialCard/TestimonialCard";
import CaseStudy from "@/components/caseStudy/CaseStudy";
import ModernTechnologyOne from "@/components/modernTechnologyOne/modernTechnologyOne";
import PlatformAccordian from "@/components/platformAccordian/platformAccordian";
import Cta from "@/components/cta/cta";
import { getPlatformsQuery, getSettings } from "@/lib/sanity.client";
import { refactorPlatforms } from "@/utils/platforms";
import { refactorSettings } from "@/utils/settings";

const Platform = ({ platformsData, settings, preview }) => {

    if (!platformsData) {
        return <></>;
    }
    return (
        <Layout header={settings.header} footer={settings.footer} preview={preview}>
            <div className="pb-0 pt-0">
                <Banner {...platformsData.banner} />
            </div>

            <Info {...platformsData.info} />

            <div className="pb-12 md:pb-24 lg:px-24 px-5 ">
                <Stepper {...platformsData?.stepperData} />
            </div>

            <div className="">
                <ModernTechnologyOne {...platformsData?.morderTechnologyOne} />
            </div>

            <div className="container mx-auto px-4 md:px-0 py-16 md:py-24">
                {<PlatformAccordian {...platformsData?.accordian} />}
            </div>

            <div className="container mx-auto px-4 md:px-0 pb-12 md:pb-24">
                <CaseStudy {...platformsData?.caseStudy} />
            </div>

            <div className="flex flex-col bg-accent-100 justify-center items-center">
                <Cta {...platformsData?.cta} />
            </div>

            <div className="py-12 md:py-24 container mx-auto px-4 md:px-0">
                <TestimonialCard {...platformsData?.testimonialCard} />
            </div>

            <div className="container mx-auto px-4 md:px-0 pb-12 md:pb-24">
                <BlogCard {...platformsData?.blogCard} />
            </div>
        </Layout>
    );
};

export async function getStaticProps(ctx) {
    const { preview = false, previewData = {} } = ctx

    const token = previewData.token
    const [settings, platform] = await Promise.all([
        getSettings({ token }),
        getPlatformsQuery({ token, slug: "webj" }),
    ])

    return {
        props: {
            platformsData: refactorPlatforms(platform),
            settings: refactorSettings(settings),
            preview,
            token: previewData.token ?? null,
        },
    }
}

export default Platform;