import { urlForImage } from '@/lib/sanity.image'

const refactorCaseStudy = (data) => {
  return { 
    heading: data?.caseStudy?.title || '',
    description: data?.caseStudy?.description || '',
    itemList: data?.caseStudies?.map((item) => ({
      label: item?.title || "",
      href: item?.slug.current || "",
      percentageList: item?.caseStudy.itemList[0].percentageList?.map((percentageItem) => ({
        percentage: percentageItem?.percentage || "",
        description: percentageItem?.description || "",
      })) || [],
    })) || [],
    hasIcon: data?.caseStudy?.hasIcon || true,
    label: data?.caseStudy?.label || '',
    icon: data?.caseStudy?.icon || '',
    href: data?.caseStudy?.href || '',
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