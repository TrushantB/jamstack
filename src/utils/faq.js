
import { urlForImage } from '@/lib/sanity.image'

const refactorFAQ = (data) => {

  return {
    "banner": {
      "heading": data.banner.heading,
      "backGroundColor": data.banner?.backgroundColor,
      "description": data.banner?.description,
      "headingSize": data.banner?.headingSize,
      "image": "/faqBanner.png",
      "layout": data.banner?.layout,
      "animationType": "faq"
    },
    "accordinData": data.accordinData,
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
    }
  }
}

export { refactorFAQ }