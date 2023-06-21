import { lazy } from "react";
import { getPlatformsQuery, getSettings } from "@/lib/sanity.client";
import { refactorPlatforms } from "@/utils/platforms";
import { refactorSettings } from "@/utils/settings";

import { PreviewSuspense } from "@sanity/preview-kit";
import { PreviewWrapper } from "@/components/preview/PreviewWrapper";
import Platform from "@/components/pages/platform";
const PlatformPreview = lazy(() =>
  import("@/components/pages/platform/preview")
);

const Webj = (props) => {
  const { platformsData, settings, preview, token } = props;

  if (!platformsData) {
    return <></>;
  }

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PreviewWrapper>
            <Platform
              platformsData={platformsData}
              settings={settings}
              preview={preview}
            />
          </PreviewWrapper>
        }
      >
        <PlatformPreview
          token={token}
          settings={settings}
          params={{ slug: "webj" }}
        />{" "}
      </PreviewSuspense>
    );
  }

  return <Platform platformsData={platformsData} settings={settings} />;
};

export async function getStaticProps(ctx) {
  const { preview = false, previewData = {} } = ctx;

  const token = previewData.token;
  const [settings, platform] = await Promise.all([
    getSettings({ token }),
    getPlatformsQuery({ token, slug: "webj" }),
  ]);

  return {
    props: {
      platformsData: refactorPlatforms(platform),
      settings: refactorSettings(settings),
      preview,
      token: previewData.token ?? null,
    },
  };
}

export default Webj;
