import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    ...
  }
`
export const faqPageQuery = groq`
  *[_type == "faqs"][0]{
    ...
  }
`

export const platformsQuery = groq`
  *[_type == "platforms" && slug.current == $slug][0] {
   ...
  }
  `

export const contactQuery = groq`
*[_type == "contact"][0] {
  ...
}
`
export const jamStackQuery = groq`
*[_type == "jamstack"][0] {
  ...
}
`

export const complienceBySlugQuery = groq`
  *[_type == "compliences" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    content
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
