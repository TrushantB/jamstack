
import { urlForImage } from '@/lib/sanity.image'
const refactorPricing = (data) => {

  return {
    "banner": {
      "heading": data?.banner?.heading,
      "image": "/priceBanner.svg",
      "imageTwo": "/mobileBannerTwo.png",
      "alt": data?.banner?.alt,
      "backGroundColor": data?.banner?.backgroundColor,
      "headingSize": data?.banner?.headingSize,
      "type": data?.banner?.type ,
      "label": data?.banner?.label ,
      "size": data?.banner?.size,
      "layout": data?.banner?.layout,
      "href" : data?.banner?.href,
      "animationType":"pricing"
    },
    "textBanner": {
      "sliderControls": {
        "dots": data?.textBanner?.sliderControls?.dots || null,
        "infinite": data?.textBanner?.sliderControls?.infinite || null,
        "speed": data?.textBanner?.sliderControls?.speed || null,
        "autoplaySpeed": data?.textBanner?.sliderControls?.autoplaySpeed || null,
        "autoplay": data?.textBanner?.sliderControls?.autoplay || null,
        "arrows": data?.textBanner?.sliderControls?.arrows || null,
        "swipe": data?.textBanner?.sliderControls?.swipe || null
      },
      "info": data?.textBanner?.info?.map((item) => ({
        label: item.label,
        icon: item.icon,
        alt: item.alt
      }))
    },
    "Webstatstics": {
      "heading": data?.webStatistics?.heading,
      "description": data?.webStatistics?.description,
      "placeholder": data?.webStatistics?.placeholder,
      "buttonLabel": data?.webStatistics?.buttonLabel,
      "isButton": data?.webStatistics?.isButton
    },
    "customPlan": {
      "heading": data?.customPlan?.heading,
      "description": data?.customPlan?.description,
      "selectPlanHeading": data?.customPlan?.selectPlanHeading,
      "idealPlanHeading": data?.customPlan?.idealPlanHeading,
      "plans": data?.customPlan?.plans?.map((item) => ({
        name: item?.name,
        id: item?.id,
        "selected": [],
        options : item?.options?.map((optionItem)=>({
          name : optionItem?.name,
          icon : optionItem?.icon,
          id : optionItem?.id
        }))
      })),
      
    },
    
    "accordinData": {
      "heading": data?.accordinData?.heading,
      "button": {
        "buttonLabel": data?.accordinData?.button?.buttonLabel,
        "href": data?.accordinData?.button?.href
      },
      "accordin":  data?.accordinData?.accordin?.map((item) => ({
        label : item.label,
        description : item.description
      }))
    },
    "ConnectChoose": {
      "heading": data?.ConnectChoose?.heading,
      "description": data?.ConnectChoose?.description,
      "buttonLabel": data?.ConnectChoose?.buttonLabel,
      label: data?.ConnectChoose?.label,
      "type": data?.ConnectChoose?.type,
      "size": data?.ConnectChoose?.size,
      href : data?.ConnectChoose?.href
    }
  }
}

export { refactorPricing }