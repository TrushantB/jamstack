import { apiVersion, dataset, projectId, useCdn } from '@/lib/sanity.api'
import {
  homePageQuery,
  homePageTitleQuery,
  pagePaths,
  complienceBySlugQuery,
  platformsQuery,
  projectBySlugQuery,
  projectPaths,
  settingsQuery,
  platformsQueryEcomj,
  platformsQueryMObj,
  platformsQueryWebj,
  contactQuery,
  jamStackQuery,
  faqPageQuery
} from './sanity.queries'
import { createClient } from 'next-sanity'

const sanityClient = (token) => {
  return projectId
    ? createClient({ projectId, dataset, apiVersion, useCdn, token })
    : null
}

export async function getHomePage({
  token,
}) {
  return await sanityClient(token)?.fetch(homePageQuery)
}

export async function getPageBySlug({
  slug,
  token,
}) {
  return await sanityClient(token)?.fetch(pagesBySlugQuery, { slug })
}

export async function getProjectBySlug({
  slug,
  token,
}) {
  return await sanityClient(token)?.fetch(projectBySlugQuery, { slug })
}

export async function getSettings({
  token,
}) {
  return await sanityClient(token)?.fetch(settingsQuery)
}

export async function getProjectPaths() {
  return await sanityClient()?.fetch(projectPaths)
}

export async function getPagePaths() {
  return await sanityClient()?.fetch(pagePaths)
}

export async function getPlatformsQueryEcomj({
  token,
}) {
  return await sanityClient(token)?.fetch(platformsQueryEcomj)
}
export async function getPlatformsQueryMObj({
  token,
}) {
  return await sanityClient(token)?.fetch(platformsQueryMObj)
}
export async function getPlatformsQueryWebj({
  token,
}) {
  return await sanityClient(token)?.fetch(platformsQueryWebj)
}

export async function getContacts({
  token,
}) {
  return await sanityClient(token)?.fetch(contactQuery)
}
export async function getJamStack({
  token,
}) {
  return await sanityClient(token)?.fetch(jamStackQuery)
}

export async function getComplienceBySlug({
  slug,
  token,
}) {
  return await sanityClient(token)?.fetch(complienceBySlugQuery, { slug })
}

export async function getPlatformsQuery({
  slug,
  token,
}) {
  return await sanityClient(token)?.fetch(platformsQuery, { slug })
}

export async function getFAQ({
  token,
}) {
  return await sanityClient(token)?.fetch(faqPageQuery)
}