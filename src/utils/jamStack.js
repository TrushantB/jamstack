import { urlForImage } from '@/lib/sanity.image'

const refactorJamStack = (data) => {
  return {
    "banner": {
      "heading": data?.banner?.heading,
      "description": data.banner?.description,
      "backGroundColor": data.banner?.backgroundColor,
      "headingSize": data.banner?.headingSize,
      "image": "/jamstackBanner.png",
      "type": data?.banner?.type,
      "size": data.banner?.size,
      "layout": data.banner?.layout,
    },
    "cards": {
      "heading": data?.cards?.heading,
      "description": data?.cards?.description,
      "cardsitems": data?.cards?.cardsitems?.map((item) => ({
        title: item.title,
        class: item.class
      }))
    },
    "accordian": {
      "heading": data?.accordian?.heading,
      "accordinaList": data?.accordian?.accordinaList?.map((item) => ({
        label: item.label,
        description: item.description,
        icon: item.icon,
        description: item.description,
        animationType: item.animationType,
        arrow: item.arrow,
      }))
    },
    "cta": {
      "heading": data?.cta?.heading,
      "href": data?.cta?.href,
      "type": data?.cta?.type,
      "label": data?.cta?.label,
      "size": data?.cta?.size
    },
    "productCard": {
      "heading": data?.productCard?.heading,
      "cards": data?.productCard?.cards?.map((item) => ({
        label: item.label,
        description: item.description,
        buttonLabel: item.buttonLabel,
        href: item.href
      }))
    }
  }
}

export { refactorJamStack }