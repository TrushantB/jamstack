import { apiVersion, dataset, projectId, useCdn } from '@/lib/sanity.api'
import {
  homePageQuery,
  homePageTitleQuery,
  pagePaths,
  pagesBySlugQuery,
  projectBySlugQuery,
  projectPaths,
  settingsQuery,
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

export async function getHomePageTitle({
  token,
}) {
  return await sanityClient(token)?.fetch(homePageTitleQuery)
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
