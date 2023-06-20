
import { urlForImage } from '@/lib/sanity.image'
import { refactorBlog } from './blogs'

const refactorHome = (data) => {
  return {
    "id": 1,
    "title": "Home page",
    "banner": {
      "heading": data.banner.heading,
      "backGroundColor": data.banner.backgroundColor,
      "headingSize": data.banner.headingSize,
      "image": urlForImage(data?.banner?.image).url(),
      "type": data.banner.type,
      "label": data.banner.label,
      "size": data.banner.size,
      "layout": data.banner.layout,
      "href": data.banner.href,
      "animationType": data.banner.animationType
    },
    "technologySolution": {
      "description": data.technologySolution.description,
      "heading": data.technologySolution.heading,
      "href": data.technologySolution.href,
      "logo": {
        "url": urlForImage(data.technologySolution.logo).url(),
        "alt": data.technologySolution.logo.alt
      }
    },
    "textBannerList": {
      "heading": data?.textBannerList?.heading,
      "title": data?.textBannerList?.title,
      "listItems": data?.textBannerList?.listItems?.map((item) => ({
        label: item.label,
        icon: item.icon,
        alt: item.alt
      }))
    },
    "videoBanner": {
      "heading": data?.videoBanner?.heading,
      "video": {
        "Videolink": "/Jamstack+.mp4",
        "alt": data?.videoBanner?.video?.alt
      }
    },
    "textBanner": {
      "sliderControls": {
        "dots": data?.textBanner?.sliderControls?.dots,
        "infinite": data?.textBanner?.sliderControls?.infinite,
        "speed": data?.textBanner?.sliderControls?.speed,
        "autoplaySpeed": data?.textBanner?.sliderControls?.autoplaySpeed,
        "autoplay": data?.textBanner?.sliderControls?.autoplay,
        "arrows": data?.textBanner?.sliderControls?.arrows,
        "swipe": data?.textBanner?.sliderControls?.swipe
      },
      info: data?.textBanner?.info?.map((item) => ({
        label: item.label || "",
        icon: item.icon || "",
        alt: item?.alt || "",
      })) || []
    },
    "Webstatstics": {
      "heading": data?.webstatistics?.heading,
      "description": data?.webstatistics?.description,
      "placeholder": data?.webstatistics?.placeholder,
      "buttonLabel": data?.webstatistics?.buttonLabel,
      "isButton": data?.webstatistics?.isButton
    },
    "benefits": {
      "heading": data?.benefits?.heading,
      "benefitsList": data?.benefits?.benefitsList?.map((item) => ({
        heading: item.heading,
        icon: item.icon,
        alt: item.alt,
        description: item.description
      }))
    },
    "productCard": {
      "heading": data?.productCard?.heading,
      "cards": data?.productCard?.cards?.map((item) => ({
        label: item.label,
        description: item.description,
        buttonLabel: item.buttonLabel,
        href: item.href
      }))
    },
    "ourClient": {
      "heading": data?.ourClient?.heading,
      "href": data?.ourClient?.href,
      "imageList": data?.ourClient?.imageList?.map((item) => ({
        image: urlForImage(item.image).url(),
        alt: item.alt,
      })),
      "type": data?.ourClient?.type,
      "label": data?.ourClient?.label,
      "size": data?.ourClient?.size
    },
    "edgeNetwork": {
      "heading": data?.edgeNetwork?.heading,
      "image": "/world.png",
      "alt": "image"
    },
    caseStudy: {
      heading: data?.caseStudy?.heading,
      description: data?.caseStudy?.description,
      itemList: data?.caseStudy?.itemList?.map((item) => ({
        label: item.label,
        href: item.href || "",
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
    "morderTechnology": {
      "heading": data?.modernTechnology?.heading,
      "href": data?.modernTechnology?.href,
      "type": data?.modernTechnology?.type,
      "label": data?.modernTechnology?.label,
      "size": data?.modernTechnology?.size
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
    "seo": data.seo,
  }
}

export { refactorHome }