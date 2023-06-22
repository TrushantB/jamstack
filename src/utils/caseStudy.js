import { urlForImage } from '@/lib/sanity.image'

const refactorCaseStudy = (data) => {
  // TODO:Static things add from CMS
  return  { 
    heading: 'Case Study',
    description: data?.description || 
    ' We may also automatically collect certain information through cookies to improve our Platform, such as pattern of your use of the Platform, visits, material that you viewed or searched for; page response times, download errors, length of visits to certain pages, page' ,
    itemList: data?.map((item) => ({
      label: item?.title || "",
      href: item?.slug.current || "",
      percentageList: item?.caseStudy.itemList[0].percentageList?.map((percentageItem) => ({
        percentage: percentageItem?.percentage || "",
        description: percentageItem?.description || "",
      })) || [],
    })),
    hasIcon: data?.hasIcon || true,
    label: data?.label || 'Read More',
    icon: data?.icon || '',
    href: data?.href || '',

}
}

const refactorCaseStudyDetails = (data) => {
  const blogs = [];
  data?.latestBlogs.map((blog) => {
    if (blog.slug.current !== data.slug.current && blogs.length < 3) {
      blogs.push({
        label: blog.title || null,
        buttonLabel: blog.buttonLabel || null,
        image: urlForImage(blog.image).url() || null,
        alt: blog.image?.logoAlt || null,
        description: blog.description || null,
        href: blog.slug.current || ''
      });
    }
  })

  return {
    "slug": data.slug.current,
    "heading": data.title || '',
    "blogBanner": data?.image ? urlForImage(data.image).url() : '',
    "alt": data?.image?.logoAlt || '',
    client : data?.client || '',
    timeline : data?.timeline || '',
    "year": data?.year || '',
    service : data?.service || '',
    "tableHeading": data.tableOfContentHeading || '',
    "iconHeading": data?.shareHeading || '',
    "tabelContent": data.tableOfContent.map((content) => {
      return {
        title: content?.heading || '',
        content: content.content || ''
      }
    }),
    "suggestionPost": {
      "image": data?.letTalk?.image ? urlForImage(data.letTalk.image).url() : '',
      "alt": data?.letTalk?.image?.logoAlt || '',
      "title": data.letTalk?.title || '',
      "buttonLabel": data.letTalk?.cta?.displayName || '',
      "href": data.letTalk?.cta?.page?.slug || ''
    },
    "blogCard": {
      "heading": data?.blogCard?.heading,
      "cards": blogs,
      "hasIcon": data?.blogCard?.hasIcon,
      "label": data?.blogCard?.label
    },
  }
}

export { refactorCaseStudy , refactorCaseStudyDetails } 