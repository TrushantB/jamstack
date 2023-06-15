import { lazy } from "react";
import {  getHomePage, getSettings } from "@/lib/sanity.client";
import { refactorSettings } from "@/utils/settings";
import { PreviewSuspense } from '@sanity/preview-kit'
import { PreviewWrapper } from "@/components/preview/PreviewWrapper";
import Index from "@/components/pages/home";
import { refactorHome } from "@/utils/home";

const HomePagePreview = lazy(
  () => import('@/components/pages/home/preview')
)

const index = (props) => {
  const { homeData, settings, preview, token } = props

  if (!homeData) {
    return <></>;
  }

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PreviewWrapper>
            <Index homeData={homeData} settings={settings} preview={preview} />
          </PreviewWrapper>
        }
      >
        <HomePagePreview token={token} settings={settings} />
      </PreviewSuspense>
    )
  }

  return <Index homeData={homeData} settings={settings} />

};

export async function getStaticProps(ctx) {
  const { preview = false, previewData = {} } = ctx

  const token = previewData.token
  const [settings, page] = await Promise.all([
    getSettings({ token }),
    getHomePage({ token }),
  ])

  return {
    props: {
      homeData: refactorHome(page),
      settings: refactorSettings(settings),
      preview,
      token: previewData.token ?? null,
    },
  }
}

export default index;
