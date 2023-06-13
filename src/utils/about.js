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
              labelArray: item?.labelArray?.map((labelItem) => labelItem?.label),
            })),
        //   [
        //     {
        //       "title": "Discuss- get started:",
        //       "image": "articleOne.png",
        //       "layout": "imageRight",
        //       "labelArray": [
        //         { "label": "Brainstorming on idea" },
        //         { "label": "Strategy planning" },
        //         { "label": "Requirement gathering" },
        //         { "label": "Analysis and approach" }
        //       ]
        //     },
        //     {
        //       "title": "Define and Design:",
        //       "image": "articleTwo.png",
        //       "layout": "imageLeft",
        //       "labelArray": [
        //         { "label": "Analysis documentation" },
        //         { "label": "Wireframes and mockups" },
        //         { "label": "Design architecture" },
        //         { "label": "Design templates with style guide" }
        //       ]
        //     },
        //     {
        //       "title": "Develop:",
        //       "image": "articleThree.png",
        //       "layout": "imageRight",
        //       "labelArray": [
        //         { "label": "Code ready to test" },
        //         { "label": "Dev documentation and approach" },
        //         { "label": "Frontend, backend with DB" },
        //         { "label": "Unit testing" }
        //       ]
        //     },
        //     {
        //       "title": "Deploy -pre and post methods:",
        //       "image": "articleFive.svg",
        //       "layout": "imageLeft",
        //       "labelArray": [
        //         { "label": "Quality assurance testing" },
        //         { "label": "CDN/edge networking" },
        //         { "label": "Usage guidelines" },
        //         { "label": "Hosting" }
        //       ]
        //     },
        //     {
        //       "title": "Accelerate",
        //       "image": "articleFour.svg",
        //       "layout": "imageRight",
        //       "labelArray": [
        //         { "label": "Business analysis and dashboard" },
        //         { "label": "Recommendations and insights of the business" },
        //         { "label": "Recommendations and insights of the business" }
        //       ]
        //     }
        //   ]
        },
        "jamstackQuote": {
          "heading": data?.jamstackQuote?.heading ,
          "author": data?.jamstackQuote?.author
        }
      }
}

export { refactorAbout } 