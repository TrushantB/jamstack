
import { urlForImage } from '@/lib/sanity.image'

const refactorPlatforms = (data) => {
  return {
    "banner": {
      "heading": data?.banner?.heading,
      "description": data?.banner?.description,
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
        content: item.content,
        layout: item.layout,
        animationType: item.animationType !== undefined ? item.animationType : null,
        id: item.id,
        faqs: item?.faqs?.map((faq) => ({
          label: faq.label,
          description: faq.description,
          icon: faq.icon,
          arrow: faq.arrow,
        })) || [],
        cta: item.cta ? {
          label: item.cta.label,
          size: item.cta.size,
          type: item.cta.type,
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
        icon: item.icon || null ,
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
    caseStudy: {
      heading: data?.caseStudy?.heading,
      description: data?.caseStudy?.description,
      itemList: data?.caseStudy?.itemList?.map((item) => ({
        label: item.label,
        href: item.href,
        percentageList: item.percentageList.map((percentageItem) => ({
          percentage: percentageItem.percentage,
          description: percentageItem.description,
        })),
      })),
      hasIcon: data?.caseStudy?.hasIcon,
      label: data?.caseStudy?.label,
      icon: data?.caseStudy?.icon,
      href: data?.caseStudy?.href,
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
      "cards": data?.blogCard?.cards.map((item) => ({
        label: item.label || null,
        buttonLabel: item.buttonLabel || null,
        image: urlForImage(item.image).url() || null,
        alt: item.alt || null,
        description: item.description || null,
        href: item.href || null
      })),
      "hasIcon": data?.blogCard?.hasIcon,
      "label": data?.blogCard?.label
    }
  }
}

export { refactorPlatforms }