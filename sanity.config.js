/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/pages/studio/[[...index]].jsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'


import { apiVersion, dataset, projectId, previewSecretId } from '@/lib/sanity.api'
import home from '@/sanity/schemas/singletons/home'
import platforms from '@/sanity/schemas/documents/platforms'
import settings from '@/sanity/schemas/singletons/settings'
import pricing from '@/sanity/schemas/singletons/pricing'
import contact from '@/sanity/schemas/singletons/contact'
import { pageStructure, singletonPlugin } from '@/plugins/settings'
import { previewDocumentNode } from '@/plugins/previewPane'
import { productionUrl } from '@/plugins/productionUrl'
import jamstack from '@/sanity/schemas/singletons/jamstack'
import faqs from '@/sanity/schemas/singletons/faq'
import about from '@/sanity/schemas/singletons/about'
import compliences from '@/sanity/schemas/documents/compliences'
import blogs from '@/sanity/schemas/singletons/blogs'
import blog from '@/sanity/schemas/documents/blog'
import caseStudy from '@/sanity/schemas/singletons/case-study'
import ecosystem from '@/sanity/schemas/singletons/ecosystem'
import faq from '@/sanity/schemas/singletons/faq'
import navigation from '@/sanity/schemas/objects/navigation'

export const PREVIEWABLE_DOCUMENT_TYPES = [
  home.name,
  platforms.name,
  contact.name,
  pricing.name,
]


export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: [
      settings,
      contact,
      pricing,
      home,
      platforms,
      jamstack,
      faqs,
      about,
      compliences,
      blogs,
      blog,
      caseStudy,
      ecosystem,

      // Objects
      navigation
    ],
  },
  plugins: [
    deskTool({
      structure: pageStructure({
        apiVersion,
        previewSecretId,
        types: [settings, home, pricing, contact, jamstack, faq, about, blogs, caseStudy, ecosystem]
      }),
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    singletonPlugin([home.name, settings.name, pricing.name, contact.name, jamstack.name, faq.name, about.name, blogs.name, caseStudy.name, ecosystem.name]),
    productionUrl({
      apiVersion,
      previewSecretId,
      types: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    unsplashImageAsset(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
