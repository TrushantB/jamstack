import React from 'react'
import Layout from '@/components/layout'
import { CustomPortableText } from '@/components/shared/CustomPortableText';
import { getComplienceBySlug, getSettings } from '@/lib/sanity.client';
import { refactorSettings } from '@/utils/settings';

export default function Security({ compliencesData, settings }) {
  return (
    <Layout header={settings.header} footer={settings.footer}>
      <div className='max-w-2xl xl:max-w-3xl mx-auto px-4'>
        <div className='text-page-content max-w-4xl mx-auto pb-12 mt-16'>
          <h1 className='mb-10'><strong>{compliencesData.title}</strong></h1>
          <CustomPortableText value={compliencesData?.content} />
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const token = previewData.token

  const [settings, complience] = await Promise.all([
    getSettings({ token }),
    getComplienceBySlug({ token, slug: 'security' }),
  ])

  if (!complience) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      compliencesData: complience,
      settings: refactorSettings(settings),
      preview,
      token: previewData.token ?? null,
    },
  }
}
