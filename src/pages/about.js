import { lazy } from "react";
import {  getAbout, getSettings } from "@/lib/sanity.client";
import { refactorSettings } from "@/utils/settings";
import { PreviewSuspense } from '@sanity/preview-kit'
import { PreviewWrapper } from "@/components/preview/PreviewWrapper";
import about from "@/components/pages/about";
import { refactorAbout } from "@/utils/about";

const AboutDataPreview = lazy(
  () => import('@/components/pages/about/preview')
)

const About = (props) => {
  const { aboutData, settings, preview, token } = props

  if (!aboutData) {
    return <></>;
  }

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PreviewWrapper>
            <about aboutData={aboutData} settings={settings} preview={preview} />
          </PreviewWrapper>
        }
      >
        <AboutDataPreview token={token} settings={settings} />
      </PreviewSuspense>
    )
  }

  return <about aboutData={aboutData} settings={settings} />

};

export async function getStaticProps(ctx) {
  const { preview = false, previewData = {} } = ctx

  const token = previewData.token
  const [settings, page] = await Promise.all([
    getSettings({ token }),
    getAbout({ token }),
  ])

  return {
    props: {
      aboutData: refactorAbout(page),
      settings: refactorSettings(settings),
      preview,
      token: previewData.token ?? null,
    },
  }
}

export default About;
