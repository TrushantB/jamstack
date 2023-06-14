import { urlForImage } from '@/lib/sanity.image'

const refactorAbout = (data) => {
    return  {
        "banner": {
          "heading": data?.banner?.heading,
          "backGroundColor": data?.banner?.backgroundColor ,
          "description": data?.banner?.description,
          "headingSize": data?.banner?.headingSize,
          "image": "/aboutus.svg",
          "layout": data?.banner?.layout
        },
        "morderTechnology": {
          "heading": data?.morderTechnology?.heading,
          "description": data?.morderTechnology?.description
        },
        "jamStackRecipe": {
          "heading": data?.jamStackRecipe?.heading,
          "label": data?.jamStackRecipe?.label
        },
        "jamStackStories": {
          "heading": data?.jamStackStories?.heading,
          "descriptionArray": data?.jamStackStories?.descriptionArray?.map((item) => ({
            description: item.description,
          }))
        },
        "cards": {
          "heading": data?.cards?.heading ,
          "cardsArray": data?.cards?.cardsArray?.map((item) => ({
            title: item.title,
            class: item.class,
          }))
        },
        "jamStackProcess": {
            "heading": data?.jamStackProcess?.heading,
            "processArray": data?.jamStackProcess?.processArray?.map((item) => ({
              title: item.title,
              layout: item.layout,
              labelArray: item?.labelArray?.map((labelItem) => {return { label: labelItem?.label}}),
            })
            ),
        },
        "jamstackQuote": {
          "heading": data?.jamstackQuote?.heading ,
          "author": data?.jamstackQuote?.author
        }
      }
}

export { refactorAbout } 