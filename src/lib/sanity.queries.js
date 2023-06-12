import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    ...
  }
`
export const platformsQueryEcomj = groq`
*[_type == "platforms" && slug.current == "ecommj"][0] {
  ...
}
`
export const platformsQueryMObj = groq`
*[_type == "platforms" && slug.current == "mobj"][0] {
  ...
}
`
export const platformsQueryWebj = groq`
*[_type == "platforms" && slug.current == "webj"][0] {
  ...
}
`
export const contactQuery = groq`
*[_type == "contact"][0] {
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
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
       sidebarLink[]->{
      _type,
      "slug": slug.current,
      title
    },
      secondaryFooterItems[]->{
      _type,
      "slug": slug.current,
      title
    },
      footerItems[]->{
      _type,
      "slug": slug.current,
      title
    },
      
    ogImage,
  }
`
