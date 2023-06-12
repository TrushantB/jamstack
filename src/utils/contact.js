
import { urlForImage } from '@/lib/sanity.image'

const refactorContact = (data) => {
    return  {
      "heading": "Let’s prepare your uniquely engineered digital presence together!",
      "description": "We are eager to connect with you in the journey of enhancing the PLUS in your business. Help us to know more about you.",
      "contactDetails": "If you prefer, send us an email for new business opportunities or job openings.",
      "contactEmail": "hello@jamstack.plus",
      "caseStudy": {
        "heading": "Case Study",
        "description": "We are experts in what we do. Our team has hands on on the modern and trendy tools with great knowledge of choosing them wisely. We strictly follow a systematic agile process of working that yields in excellent, robust and world class projects.",
        "itemList": [
          {
            "label": "Wise Experts",
            "href": "",
            "percentageList": [
              {
                "percentage": "120%",
                "description": "Increase in Content Engagement"
              },
              {
                "percentage": "80%",
                "description": "Decrease in Time from Idea to Publishing"
              },
              {
                "percentage": "150%",
                "description": "Indexed Pages"
              }
            ]
          },
          {
            "label": "Logic Tales",
            "href": "",
            "percentageList": [
              {
                "percentage": "120%",
                "description": "Increase in Content Engagement"
              },
              {
                "percentage": "30%",
                "description": "Decrease in Time from Idea to Publishing"
              },
              {
                "percentage": "190%",
                "description": "Indexed Pages"
              }
            ]
          },
          {
            "label": "Intercollab",
            "href": "",
            "percentageList": [
              {
                "percentage": "100%",
                "description": "Increase in Content Engagement"
              },
              {
                "percentage": "10%",
                "description": "Decrease in Time from Idea to Publishing"
              },
              {
                "percentage": "10%",
                "description": "Indexed Pages"
              }
            ]
          },
          {
            "label": "Skype",
            "href": "",
            "percentageList": [
              {
                "percentage": "110%",
                "description": "Increase in Content Engagement"
              },
              {
                "percentage": "60%",
                "description": "Decrease in Time from Idea to Publishing"
              },
              {
                "percentage": "90%",
                "description": "Indexed Pages"
              }
            ]
          }
        ],
        "hasIcon": true,
        "label": "Read More",
        "icon": "diamond"
      },
      "testimonialCard": {
        "heading": "We love our customers",
        "cards": [
          {
            "name": "Kaylynn Kenter",
            "description": "Our team has hands on on the modern and trendy tools with great knowledge of choosing them wisely.",
            "image": "/testimonalImageOne.svg",
            "alt": "image"
          },
          {
            "name": "Kianna Franci",
            "description": "Our team has hands on on the modern and trendy tools with great knowledge of choosing them wisely.",
            "image": "/testimonalImageTwo.svg",
            "alt": "image"
          },
          {
            "name": "Ryan Lipshutz",
            "description": "Our team has hands on on the modern and trendy tools with great knowledge of choosing them wisely.",
            "image": "/testimonalIMageThree.svg",
            "alt": "image"
          }
        ]
      },
      "blogCard": {
        "heading": "Blogs",
        "cards": [
          {
            "image": "/termgrid.png",
            "alt": "blog",
            "label": "Termgrid",
            "description": "Branding a whole new category of debt management.",
            "buttonLabel": "Read more",
            "href": ""
          },
          {
            "image": "/crisp.png",
            "alt": "blog",
            "label": "Crisp",
            "description": "Designing a new mobile experience for the all-in-one messaging platform.",
            "buttonLabel": "Read more",
            "href": ""
          },
          {
            "image": "/ternary.png",
            "alt": "blog",
            "label": "Ternary",
            "description": "Creating a visual identity and product for FinOps cloud innovator.",
            "buttonLabel": "Read more",
            "href": ""
          }
        ],
        "hasIcon": true,
        "label": "Read More"
      },
      "form": "<form action=\"https://forms.zohopublic.in/setoosolutionsprivatelimited/form/ContactUsJamstackplus/formperma/Pp2Ws2PM0DANC2AnR60st_Y1vzc5y2QYa3qUYgzzfgY/htmlRecords/submit\" name=\"form\" id=\"form\" method=\"POST\" accept-charset=\"UTF-8\" enctype=\"multipart/form-data\">\n  <input type=\"hidden\" name=\"zf_referrer_name\" value=\"\" />\n  <input type=\"hidden\" name=\"zf_redirect_url\" value=\"\" />\n  <input type=\"hidden\" name=\"zc_gad\" value=\"\" />\n\n  <input type=\"text\" name=\"SingleLine\" fieldType={1} maxlength=\"255\" required placeholder=\"Name\" />\n\n  <label></label>\n  <input type=\"text\" maxlength=\"255\" name=\"Email\" fieldType={9} required placeholder=\"Email\" />\n\n  <label class='mb-2 text-md text-gray-400'>Select Product*</label>\n  <div>\n    <input type=\"checkbox\" id=\"Checkbox_1\" name=\"Checkbox\" value=\"WebJ\" checked />\n    <label for=\"Checkbox_1\">WebJ</label>\n    <input type=\"checkbox\" id=\"Checkbox_2\" name=\"Checkbox\" value=\"EcommJ\" />\n    <label for=\"Checkbox_2\">EcommJ</label>\n    <input type=\"checkbox\" id=\"Checkbox_3\" name=\"Checkbox\" value=\"MobJ\" />\n    <label for=\"Checkbox_3\">MobJ</label>\n    <input type=\"checkbox\" id=\"Checkbox_4\" name=\"Checkbox\" value=\"Custom\" />\n    <label for=\"Checkbox_4\">Custom</label>\n  </div>\n\n  <label></label>\n  <textarea name=\"MultiLine\" maxlength=\"65535\" placeholder=\"Product details\" required></textarea>\n  <button class='btn' type=\"submit\">Set Up Meeting</button>\n</form>"
    }
}

export { refactorContact }