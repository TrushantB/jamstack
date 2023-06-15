
import { urlForImage } from '@/lib/sanity.image'

const refactorBlogs = (data) => {
  return {
    ...data,
    blogs: data.blogs.map((blog) => {
      blog.author.image = urlForImage(blog.author.image).url();
      blog.image = urlForImage(blog.image).url();
      return {
        ...blog,
      }
    }),
    "hasIcon": false,
    "label": "Read More"
  }
}

const refactorBlog = (data) => {
  return {
    "slug": data.slug.current,
    "heading": data.title,
    "blogBanner": urlForImage(data.image).url(),
    "alt": data.image.logoAlt,
    "author": {
      "image": urlForImage(data.author.image).url(),
      "alt": data.author.image.logoAlt,
      "name": data.author.name,
      "description": data.author.shortDescription,
      "socialSharing": data.author.socialLinks.map((linkItem) => ({
        icon: linkItem.icon,
        alt: linkItem.name,
        href: linkItem.href,
        target: linkItem.target
      }))
    },
    "publishDate": {
      "icon": "/calendar.png",
      "alt": "calendar",
      "date": data.publishedDt
    },
    "tableHeading": data.tableOfContentHeading,
    "iconHeading": data.shareHeading,
    "tabelContent": data.tableOfContent.map((content) => {
      return {
        title: content.heading,
        content: content.content
      }
    }),
    "socialSharing": data.socialLinks.map((linkItem) => ({
      icon: linkItem.icon,
      alt: linkItem.name,
      href: linkItem.href,
      target: linkItem.target
    })),

    "suggestionPost": {
      "image": urlForImage(data.letTalk.image).url(),
      "alt": data.letTalk.image.logoAlt,
      "title": data.letTalk.title,
      "buttonLabel": data.letTalk.cta.displayName,
      "href": data.letTalk.cta.page.slug
    }
  }
}

export { refactorBlogs, refactorBlog }