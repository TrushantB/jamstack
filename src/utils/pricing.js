
import { urlForImage } from '@/lib/sanity.image'
// TODO: static for now
const refactorPricing = (data) => {
  return {
    "banner": {
      "heading": "Let’s boost your business with powerful ecosystem by Jamstack+.",
      "image": "/priceBanner.svg",
      "imageTwo": "/mobileBannerTwo.png",
      "alt": "image",
      "backGroundColor": "#ffffff",
      "headingSize": "medium",
      "buttonLabel": "Start A Project",
      "type": "primary",
      "label": "Start A Project",
      "size": "medium",
      "layout": "Image Bottom"
    },
    "textBanner": {
      "sliderControls": {
        "dots": false,
        "infinite": true,
        "speed": 500,
        "autoplaySpeed": 2500,
        "autoplay": true,
        "arrows": false,
        "swipe": true
      },
      "info": [
        {
          "label": "Google found that 53% of mobile users will leave a website that takes longer than three seconds to load.",
          "icon": "circle",
          "alt": "image"
        },
        {
          "label": "Microsoft found that 45% of Ecomm users will leave a website that takes longer than three seconds to load.",
          "icon": "pentagon",
          "alt": "image"
        },
        {
          "label": "Yahoo found that 57% of mobile Web User will leave a website that takes longer than three seconds to load.",
          "icon": "diamond",
          "alt": "image"
        }
      ]
    },
    "Webstatstics": {
      "heading": "Know your webstatics",
      "description": "Check your website performance and check how Jamstack+ can help you improve your business.",
      "placeholder": "Paste website URL here",
      "buttonLabel": "Request Report",
      "isButton": true
    },
    "customPlan": {
      "heading": "Looking for ideal custom plan",
      "description": "Be updated with the latest technology. Choose your convenient tech stack and steps to upgrade your business with us",
      "selectPlanHeading": "Select platform",
      "idealPlanHeading": "Ideal plan",
      "plans": [
        {
          "name": "Platform",
          "id": "platform",
          "options": [
            {
              "name": "EcommJ",
              "icon": "icon-ecomm",
              "id": "ecommj"
            },
            {
              "name": "WebJ",
              "icon": "icon-web",
              "id": "webj"
            },
            {
              "name": "Mobj",
              "icon": "icon-mob",
              "id": "mobj"
            },
            {
              "name": "Mobj-WebJ",
              "icon": "icon-newspaper",
              "id": "mobjWebj"
            }
          ],
          "selected": []
        },
        {
          "name": "Frontend",
          "id": "frontend",
          "options": [
            {
              "name": "NextJs",
              "icon": "icon-web",
              "id": "nextjs"
            },
            {
              "name": "NuxtJs",
              "icon": "icon-group",
              "id": "nuxtjs"
            }
          ],
          "selected": []
        },
        {
          "name": "Backend",
          "id": "backend",
          "options": [
            {
              "name": "Strapi",
              "icon": "icon-newspaper",
              "id": "strapi"
            },
            {
              "name": "Sanity",
              "icon": "icon-database",
              "id": "sanity"
            }
          ],
          "selected": []
        },
        {
          "name": "Other Services",
          "id": "other",
          "options": [
            {
              "name": "GTM",
              "icon": "icon-stack",
              "id": "gtm"
            },
            {
              "name": "Sendgrid",
              "icon": "icon-stackoverflow",
              "id": "sendgrid"
            }
          ],
          "selected": []
        }
      ]
    },
    "accordinData": {
      "heading": "Pricing packages related FAQ",
      "button": {
        "buttonLabel": "Know More",
        "href": "blog"
      },
      "accordin": [
        {
          "label": "Can I exchange or extend my plan?",
          "description": "How much time does it take to develop a JAMstack website having 10-20 pages?"
        },
        {
          "label": "Does the other services are included in basic plan?",
          "description": "How much time does it take to develop a JAMstack website having 10-20 pages?"
        },
        {
          "label": "Is there AMC (Annual Maintenance Contract)?",
          "description": "How much time does it take to develop a JAMstack website having 10-20 pages?"
        }
      ]
    },
    "ConnectChoose": {
      "heading": "Connect, Check, Choose",
      "description": "Not sure what will work for you. Connect with Jamstack+ and know how can we help you improve your business.",
      "buttonLabel": "Connect with Team",
      "type": "primary",
      "label": "Connect with Team",
      "size": "medium"
    }
  }
}

export { refactorPricing }