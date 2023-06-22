import { urlForImage } from '@/lib/sanity.image'

const refactorPlatforms = (data) => {
  return {
    "banner": {
      "heading": data?.banner?.heading,
      "description": data?.banner?.description || "",
      "backGroundColor": data?.banner.backgroundColor,
      "headingSize": data?.banner?.headingSize,
      "image": "/ecommj.svg",
      "type": data?.banner?.type,
      "label": data?.banner?.label,
      "size": data?.banner?.size,
      "layout": data?.banner?.layout,
      "href": data?.banner?.href,
      "animationType": data?.banner?.animationType
    },
    "info": {
      "description": data?.info?.description,
      "question": data?.info?.question,
      "href": data?.info?.href,
    },
    "stepperData": {
      "heading": data?.stepperData?.heading,
      "stepper": data?.stepperData?.stepper?.map((item) => ({
        label: item.label,
        content: item?.content,
        layout: item.layout,
        animationType: item.animationType !== undefined ? item.animationType : null,
        id: item.id,
        faqs: item?.faqs?.map((faq) => ({
          label: faq.label !== undefined ? faq.label : null,
          description: faq.description !== undefined ? faq.description : null,
          icon: faq.icon !== undefined ? faq.icon : null,
          arrow: faq.arrow !== undefined ? faq.arrow : null,
        })) || [],
        cta: item.cta ? {
          label: item.cta.label !== undefined ? item.cta.label : null,
          size: item.cta.size,
          type: item.cta.type,
          href: item.cta.href !== undefined ? item.cta.href : "contact"
        } : [],
      }))
    },
    "morderTechnologyOne": {
      "heading": data?.morderTechnologyOne?.heading,
      "label": data?.morderTechnologyOne?.label,
      "size": data?.morderTechnologyOne?.size,
      "href": data?.morderTechnologyOne?.href
    },
    "accordian": {
      "heading": data?.accordian?.heading,
      "accordinaList": data?.accordian?.accordinaList?.map((item) => ({
        label: item.label,
        description: item.description,
        icon: item.icon || null,
        arrow: item.arrow || null
      })) || []
    },
    "cta": {
      "heading": data?.cta?.heading,
      "href": data?.cta?.href,
      "type": data?.cta?.type,
      "label": data?.cta?.label,
      "size": data?.cta?.size
    },
    // TODO:Static things add from CMS
    caseStudy:{ 
      heading: 'Case Study',
      description: data?.caseStudies?.description || 
      ' We may also automatically collect certain information through cookies to improve our Platform, such as pattern of your use of the Platform, visits, material that you viewed or searched for; page response times, download errors, length of visits to certain pages, page' ,
      itemList: data?.caseStudies?.map((item) => ({
        label: item?.title || "",
        href: item?.slug.current || "",
        percentageList: item?.caseStudy.itemList[0].percentageList?.map((percentageItem) => ({
          percentage: percentageItem?.percentage || "",
          description: percentageItem?.description || "",
        })) || [],
      })),
      hasIcon: data?.caseStudies?.hasIcon || true,
      label: data?.caseStudies?.label || 'Read More',
      icon: data?.caseStudies?.icon || '',
      href: data?.caseStudies?.href || '',
    },
    "testimonialCard": {
      "heading": data?.testimonialCard?.heading,
      "cards": data?.testimonialCard?.cards.map((item) => ({
        name: item.name,
        description: item.description,
        image: urlForImage(item.image).url(),
      })),
    },
    "blogCard": {
      "heading": data?.blogCard?.heading,
      "cards": data?.latestBlogs.map((item) => ({
        label: item.title || null,
        buttonLabel: item.buttonLabel || null,
        image: urlForImage(item.image).url() || null,
        alt: item.image?.logoAlt || null,
        description: item.description || null,
        href: item.slug.current || ''
      })),
      "hasIcon": data?.blogCard?.hasIcon,
      "label": data?.blogCard?.label
    },
  }
}

export { refactorPlatforms }