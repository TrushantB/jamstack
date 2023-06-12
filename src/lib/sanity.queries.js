import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    ...
  }
`

export const homePageTitleQuery = groq`
  *[_type == "home"][0].title
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`

export const projectPaths = groq`
  *[_type == "project" && slug.current != null].slug.current
`

export const pagePaths = groq`
  *[_type == "page" && slug.current != null].slug.current
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    ...,
    headerMenus {
     menus[] {
       "label": displayName,
       "href": Menu-> {
         "slug":slug.current
       }.slug
     }
    },
    footerMenus {
     menus[] {
       "label": displayName,
       "href": Menu-> {
         "slug":slug.current
       }.slug
     }
    },
    sidebarMenus {
     menus[] {
       "label": displayName,
       "href": Menu-> {
         "slug":slug.current
       }.slug
     }
    },
    secondaryFooterMenus {
     menus[] {
       "label": displayName,
       "href": Menu-> {
         "slug":slug.current
       }.slug
     }
    },
    ogImage
  }
`