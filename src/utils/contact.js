
import { urlForImage } from '@/lib/sanity.image'

const refactorContact = (data) => {
  return {
    "heading": data?.contactSection?.heading,
    "description": data?.contactSection?.description,
    "contactDetails": data?.contactSection?.contactDetails,
    "contactEmail": data?.contactSection?.contactEmail,
    caseStudy: {
      heading: data?.caseStudy?.heading,
      description: data?.caseStudy?.description,
      itemList: data?.caseStudy?.itemList?.map((item) => ({
        label: item.label,
        href: item?.href || "",
        percentageList: item.percentageList?.map((percentageItem) => ({
          percentage: percentageItem?.percentage,
          description: percentageItem?.description,
        })),
      })),
      hasIcon: data?.caseStudy?.hasIcon,
      label: data?.caseStudy?.label,
      icon: data?.caseStudy?.icon,
      href: data?.caseStudy?.href || "",
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
    "form": "<form action=\"https://forms.zohopublic.in/setoosolutionsprivatelimited/form/ContactUsJamstackplus/formperma/Pp2Ws2PM0DANC2AnR60st_Y1vzc5y2QYa3qUYgzzfgY/htmlRecords/submit\" name=\"form\" id=\"form\" method=\"POST\" accept-charset=\"UTF-8\" enctype=\"multipart/form-data\">\n  <input type=\"hidden\" name=\"zf_referrer_name\" value=\"\" />\n  <input type=\"hidden\" name=\"zf_redirect_url\" value=\"\" />\n  <input type=\"hidden\" name=\"zc_gad\" value=\"\" />\n\n  <input type=\"text\" name=\"SingleLine\" fieldType={1} maxlength=\"255\" required placeholder=\"Name\" />\n\n  <label></label>\n  <input type=\"text\" maxlength=\"255\" name=\"Email\" fieldType={9} required placeholder=\"Email\" />\n\n  <label class='mb-2 text-md text-gray-400'>Select Product*</label>\n  <div>\n    <input type=\"checkbox\" id=\"Checkbox_1\" name=\"Checkbox\" value=\"WebJ\" checked />\n    <label for=\"Checkbox_1\">WebJ</label>\n    <input type=\"checkbox\" id=\"Checkbox_2\" name=\"Checkbox\" value=\"EcommJ\" />\n    <label for=\"Checkbox_2\">EcommJ</label>\n    <input type=\"checkbox\" id=\"Checkbox_3\" name=\"Checkbox\" value=\"MobJ\" />\n    <label for=\"Checkbox_3\">MobJ</label>\n    <input type=\"checkbox\" id=\"Checkbox_4\" name=\"Checkbox\" value=\"Custom\" />\n    <label for=\"Checkbox_4\">Custom</label>\n  </div>\n\n  <label></label>\n  <textarea name=\"MultiLine\" maxlength=\"65535\" placeholder=\"Product details\" required></textarea>\n  <button class='btn' type=\"submit\">Set Up Meeting</button>\n</form>"
  }
}

export { refactorContact }