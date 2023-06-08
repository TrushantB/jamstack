/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/pages/studio/[[...index]].jsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './src/sanity/env'
import home from './src/sanity/schemas/singletons/home'
import platforms from './src/sanity/schemas/documents/platforms'
import blogDetails from './src/sanity/schemas/documents/blogDetails'
import settings from './src/sanity/schemas/singletons/settings'
import pricing from './src/sanity/schemas/singletons/pricing'
import contact from './src/sanity/schemas/singletons/contact'
const singletonTypes = new Set(["settings"]);
import { pageStructure, singletonPlugin } from './src/plugins/settings'


export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
    types: [
      settings,
      contact,
      pricing,
      home,
      platforms
    ],
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  plugins: [
    deskTool({
      structure: pageStructure([home, settings, pricing, contact]),
    }),
    singletonPlugin([home.name, settings.name, pricing.name, contact.name]),

    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
