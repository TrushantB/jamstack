import { lazy } from "react";
import {  getFAQ, getSettings } from "@/lib/sanity.client";
import { refactorSettings } from "@/utils/settings";
import { PreviewSuspense } from '@sanity/preview-kit'
import { PreviewWrapper } from "@/components/preview/PreviewWrapper";
import Index from "@/components/pages/faq";
import { refactorFAQ } from "@/utils/faq";

const FaqPagePreview = lazy(
  () => import('@/components/pages/faq/preview')
)

const index = (props) => {
  const { faqData, settings, preview, token } = props

  if (!faqData) {
    return <></>;
  }

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PreviewWrapper>
            <Index faqData={faqData} settings={settings} preview={preview} />
          </PreviewWrapper>
        }
      >
        <FaqPagePreview token={token} settings={settings} />
      </PreviewSuspense>
    )
  }

  return <Index faqData={faqData} settings={settings} />

};

export async function getStaticProps(ctx) {
  const { preview = false, previewData = {} } = ctx

  const token = previewData.token
  const [settings, page] = await Promise.all([
    getSettings({ token }),
    getFAQ({ token }),
  ])

  return {
    props: {
      faqData: refactorFAQ(page),
      settings: refactorSettings(settings),
      preview,
      token: previewData.token ?? null,
    },
  }
}

export default index;
