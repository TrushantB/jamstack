import { lazy } from "react";
import { getJamStack, getSettings } from "@/lib/sanity.client";
import { refactorSettings } from "@/utils/settings";
import { PreviewSuspense } from '@sanity/preview-kit'
import { PreviewWrapper } from "@/components/preview/PreviewWrapper";
import Jamstack from "@/components/pages/jamstack";
import { refactorJamStack } from "@/utils/jamStack";

const JamstackPagePreview = lazy(
  () => import('@/components/pages/jamstack/preview')
)

const JamstackPage = (props) => {
  const { jamstackData, settings, preview, token } = props

  if (!jamstackData) {
    return <></>;
  }

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PreviewWrapper>
            <Jamstack jamstackData={jamstackData} settings={settings} preview={preview} />
          </PreviewWrapper>
        }
      >
        <JamstackPagePreview token={token} settings={settings} />
      </PreviewSuspense>
    )
  }

  return <Jamstack jamstackData={jamstackData} settings={settings} />

};

export async function getStaticProps(ctx) {
  const { preview = false, previewData = {} } = ctx

  const token = previewData.token
  const [settings, page] = await Promise.all([
    getSettings({ token }),
    getJamStack({ token }),
  ])

  return {
    props: {
      jamstackData: refactorJamStack(page),
      settings: refactorSettings(settings),
      preview,
      token: previewData.token ?? null,
    },
  }
}

export default JamstackPage;
