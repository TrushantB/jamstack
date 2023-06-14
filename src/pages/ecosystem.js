import { lazy } from "react";
import {  getEcoSystem, getSettings } from "@/lib/sanity.client";
import { refactorSettings } from "@/utils/settings";
import { PreviewSuspense } from '@sanity/preview-kit'
import { PreviewWrapper } from "@/components/preview/PreviewWrapper";
import Index from "@/components/pages/ecosystem";
import { refactorEco } from "@/utils/ecosystem";

const EcoSystemPagePreview = lazy(
  () => import('@/components/pages/ecosystem/preview')
)

const index = (props) => {
  const { ecosystemData, settings, preview, token } = props

  if (!ecosystemData) {
    return <></>;
  }

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PreviewWrapper>
            <Index ecosystemData={ecosystemData} settings={settings} preview={preview} />
          </PreviewWrapper>
        }
      >
        <EcoSystemPagePreview token={token} settings={settings} />
      </PreviewSuspense>
    )
  }

  return <Index ecosystemData={ecosystemData} settings={settings} />

};

export async function getStaticProps(ctx) {
  const { preview = false, previewData = {} } = ctx

  const token = previewData.token
  const [settings, page] = await Promise.all([
    getSettings({ token }),
    getEcoSystem({ token }),
  ])

  return {
    props: {
      ecosystemData: refactorEco(page),
      settings: refactorSettings(settings),
      preview,
      token: previewData.token ?? null,
    },
  }
}

export default index;
