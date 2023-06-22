import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    ...,
    seo {
    seoTitle,
    "seoImage":ogImage,
    seoDescription
  },
  "caseStudies": *[_type == "caseStudyDetails" && wasDeleted != true && isDraft != true] | order(publishDate desc){
    ..., 
  },
  "latestBlogs": *[_type == "blog" && wasDeleted != true && isDraft != true] | order(publishDate desc){
    ..., 
  }[0...3]
}
`
export const blogsPageQuery = groq`
*[_type == "blogs"][0] {
   title,
   "blogs": *[_type == "blog" && wasDeleted != true && isDraft != true] | order(publishDate desc){
    image,
     "imageAlt":image.logoAlt,
     title,
    "slug":slug.current,
     author-> {
     name,
     image,
     "imageAlt":image.logoAlt
     }
  }
  
  }
`
export const ecoQuery = groq`
  *[_type == "ecosystem"][0]{
    ...
  }
`
export const aboutQuery = groq`
*[_type == "about"][0]{
  ...
}
`

export const pricingQuery = groq`
  *[_type == "pricing"][0] {
   ...
  }
  `
export const caseStudyQuery = groq`
 *[_type == "caseStudyDetails" && wasDeleted != true && isDraft != true] | order(publishDate desc){
  ..., 
}
  `
export const faqPageQuery = groq`
  *[_type == "faqs"][0]{
    ...,
     "latestBlogs": *[_type == "blog" && wasDeleted != true && isDraft != true] | order(publishDate desc){
    ..., 
  }[0...3]
  }
`

export const platformsQuery = groq`
  *[_type == "platforms" && slug.current == $slug][0] {
   ...,
   "latestBlogs": *[_type == "blog" && wasDeleted != true && isDraft != true] | order(publishDate desc){
    ..., 
  }[0...3],
  "caseStudies": *[_type == "caseStudyDetails" && wasDeleted != true && isDraft != true] | order(publishDate desc){
    ..., 
  },
  }
  `

export const contactQuery = groq`
*[_type == "contact"][0] {
  ...,
  "latestBlogs": *[_type == "blog" && wasDeleted != true && isDraft != true] | order(publishDate desc){
    ..., 
  }[0...3]
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

export const blogPaths = groq`
  *[_type == "blog" && slug.current != null].slug.current
`

export const caseStudyPaths = groq`
  *[_type == "caseStudyDetails" && slug.current != null].slug.current
`

export const pagePaths = groq`
  *[_type == "page" && slug.current != null].slug.current
`
export const blogPageQuery = groq`
*[_type == "blog" && slug.current == $slug][0] {
  ...,
  author-> {
    ...
  },
  letTalk {
    ...,
    cta {
      displayName,
      page-> {
        "slug":slug.current
      }
    }
  },
  "latestBlogs": *[_type == "blog" && wasDeleted != true && isDraft != true] | order(publishDate desc){
    ..., 
  }[0...4]
  }
  `

export const caseStudyPageQuery = groq`
*[_type == "caseStudyDetails" && slug.current == $slug][0] {
  ...,
  letTalk {
    ...,
    cta {
      displayName,
      page-> {
        "slug":slug.current
      }
    }
  },
  "latestBlogs": *[_type == "caseStudyDetails" && wasDeleted != true && isDraft != true] | order(publishDate desc){
    ..., 
  }[0...4]
  }
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
