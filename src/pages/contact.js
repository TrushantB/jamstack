import { lazy } from "react";
import { getContacts, getSettings } from "@/lib/sanity.client";
import { refactorContact } from "@/utils/contact";
import { refactorSettings } from "@/utils/settings";
import { PreviewSuspense } from '@sanity/preview-kit'
import { PreviewWrapper } from "@/components/preview/PreviewWrapper";
import Contact from "@/components/pages/contact";

const ContactPreview = lazy(
  () => import('@/components/pages/contact/preview')
)


const ContactPage = (props) => {
  const { contactData, settings, preview, token } = props

  if (!contactData) {
    return <></>;
  }

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PreviewWrapper>
            <Contact contactData={contactData} settings={settings} preview={preview} />
          </PreviewWrapper>
        }
      >
        <ContactPreview token={token} settings={settings} />
      </PreviewSuspense>
    )
  }

  return <Contact contactData={contactData} settings={settings} />

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

export default ContactPage;
