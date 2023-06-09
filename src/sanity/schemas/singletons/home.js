import { HomeIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: "title",
      description: "This field is the title of your personal website.",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "overview",
      description:
        "Used both for the <meta> description tag for SEO, and the personal website subheader.",
      title: "Description",
      type: "array",
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "Url",
                  },
                ],
              },
            ],
            decorators: [
              {
                title: "Italic",
                value: "em",
              },
              {
                title: "Strong",
                value: "strong",
              },
            ],
          },
          styles: [],
          type: "block",
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: "showcaseProjects",
      title: "Showcase projects",
      description:
        "These are the projects that will appear first on your landing page.",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "platforms" }],
        }),
      ],
    }),
    defineField({
      name: "banner",
      title: "Banner",
      description:
        "This is a block of text that will be displayed at the bottom of the page.",
      type: "object",
      fields: [
        {
          name: "heading",
          type: "string",
          title: "Heading",
        },
        {
          name: "backgroundColor",
          type: "string",
          title: "Background Color",
          options: {
            list: [
              { title: "primary", value: "primary" },
              { title: "secondary", value: "secondary" },
              { title: "tertiary", value: "tertiary" },
            ],
          },
          initialValue: "primary",
        },

        {
          name: "headingSize",
          type: "string",
          title: "Heading Size",
          options: {
            list: [
              { title: "Small", value: "small" },
              { title: "Medium", value: "medium" },
              { title: "Large", value: "large" },
            ],
          },
          initialValue: "medium",
        },
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            accept: "image/svg+xml",
          },
        },
        {
          name: "type",
          type: "string",
          title: "Type",
          options: {
            list: [
              { title: "Primary", value: "primary" },
              { title: "Secondary", value: "secondary" },
              { title: "Tertiary", value: "tertiary" },
            ],
          },
          initialValue: "primary",
        },
        {
          name: "label",
          type: "string",
          title: "Label",
          initialValue: "Start A Project",
        },
        {
          name: "size",
          type: "string",
          title: "Size",
          options: {
            list: [
              { title: "Small", value: "small" },
              { title: "Medium", value: "medium" },
              { title: "Large", value: "large" },
            ],
          },
          initialValue: "medium",
        },
        {
          name: "layout",
          type: "string",
          title: "Layout",
          options: {
            list: [
              { title: "Image Left", value: "image-left" },
              { title: "Image Right", value: "image-right" },
              { title: "Image Top", value: "image-top" },
            ],
          },
          initialValue: "image-left",
        },
        {
          name: "href",
          type: "string",
          title: "Href",
          initialValue: "contact",
        },
        {
          name: "animationType",
          type: "string",
          title: "Animation Type",
          options: {
            list: [
              { title: "Home", value: "home" },
              { title: "Fade", value: "fade" },
              { title: "Slide", value: "slide" },
            ],
          },
          initialValue: "home",
        },
      ],
    }),
    defineField({
      name: "technologySolution",
      title: "Technology Solution",
      description:
        "This is a block of text that will be displayed at the bottom of the page.",
      type: "object",
      fields: [
        {
          name: "description",
          type: "text",
          title: "Description",
        },
        {
          name: "heading",
          type: "string",
          title: "Heading",
        },
        {
          name: "href",
          type: "string",
          title: "Href",
        },
        {
          name: "logo",
          type: "image",
          title: "Logo",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt Text",
            },
          ],
        },
        {
          name: "lineImage",
          type: "image",
          title: "Line Image",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt Text",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "textBannerList",
      title: "Text Banner List",
      description:
        "This is a block of text that will be displayed at the bottom of the page.",
      type: "object",
      fields: [
        {
          name: "heading",
          type: "string",
          title: "Heading",
        },
        {
          name: "title",
          type: "string",
          title: "Title",
        },
        {
          name: "listItems",
          type: "array",
          title: "List Items",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "icon",
                  type: "string",
                  title: "Icon",
                },
                {
                  name: "label",
                  type: "string",
                  title: "Label",
                },
                {
                  name: "alt",
                  type: "string",
                  title: "Alt Text",
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "videoBanner",
      title: "Video Banner",
      description:
        "This is a block of text that will be displayed at the bottom of the page.",
      type: "object",
      fields: [
        {
          name: "heading",
          type: "string",
          title: "Heading",
        },
        {
          name: "video",
          type: "object",
          title: "Video",
          fields: [
            {
              name: "videoLink",
              type: "file",
              title: "Video Link",
            },
            {
              name: "alt",
              type: "string",
              title: "Alt Text",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "textBanner",
      title: "Text Banner",
      description:
        "This is a block of text that will be displayed at the bottom of the page.",
      type: "object",
      fields: [
        {
          name: "sliderControls",
          type: "object",
          title: "Slider Controls",
          fields: [
            {
              name: "dots",
              type: "boolean",
              title: "Show Dots",
              initialValue: false,
            },
            {
              name: "infinite",
              type: "boolean",
              title: "Infinite Loop",
              initialValue: true,
            },
            {
              name: "speed",
              type: "number",
              title: "Transition Speed (ms)",
              initialValue: 500,
            },
            {
              name: "autoplaySpeed",
              type: "number",
              title: "Autoplay Speed (ms)",
              initialValue: 2500,
            },
            {
              name: "autoplay",
              type: "boolean",
              title: "Autoplay",
              initialValue: true,
            },
            {
              name: "arrows",
              type: "boolean",
              title: "Show Arrows",
              initialValue: false,
            },
            {
              name: "swipe",
              type: "boolean",
              title: "Enable Swipe",
              initialValue: true,
            },
          ],
        },
        {
          name: "info",
          type: "array",
          title: "Information",
          of: [
            {
              name: "label",
              type: "string",
              title: "Label",
            },
            {
              name: "icon",
              type: "string",
              title: "Icon",
            },
            {
              name: "alt",
              type: "string",
              title: "Alt Text",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "webstatistics",
      title: "Web Statistics",
      description:
        "This is a block of text that will be displayed at the bottom of the page.",
      type: "object",
      fields: [
        {
          name: "heading",
          type: "string",
          title: "Heading",
        },
        {
          name: "description",
          type: "string",
          title: "Description",
        },
        {
          name: "placeholder",
          type: "string",
          title: "Input Placeholder",
        },
        {
          name: "buttonLabel",
          type: "string",
          title: "Button Label",
        },
        {
          name: "isButton",
          type: "boolean",
          title: "Show Button",
          initialValue: true,
        },
      ],
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
      description:
        "This is a block of text that will be displayed at the bottom of the page.",
      type: "object",
      fields: [
        {
          name: "heading",
          type: "string",
          title: "Heading",
        },
        {
          name: "benefitsList",
          type: "array",
          title: "Benefits List",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "icon",
                  type: "string",
                  title: "Icon",
                },
                {
                  name: "alt",
                  type: "string",
                  title: "Image Alt",
                },
                {
                  name: "heading",
                  type: "string",
                  title: "Heading",
                },
                {
                  name: "description",
                  type: "string",
                  title: "Description",
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "productCard",
      title: "Product Card",
      description:
        "This is a block of text that will be displayed at the bottom of the page.",
      type: "object",
      fields: [
        {
          name: "heading",
          type: "string",
          title: "Heading",
        },
        {
          name: "cards",
          type: "array",
          title: "Cards",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "label",
                  type: "string",
                  title: "Label",
                },
                {
                  name: "description",
                  type: "string",
                  title: "Description",
                },
                {
                  name: "buttonLabel",
                  type: "string",
                  title: "Button Label",
                },
                {
                  name: "href",
                  type: "string",
                  title: "Href",
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "ourClient",
      title: "Our Client",
      description:
        "This is a block of text that will be displayed at the bottom of the page.",
      type: "object",
      fields: [
        {
          name: "heading",
          type: "string",
          title: "Heading",
        },
        {
          name: "href",
          type: "string",
          title: "Href",
        },
        {
          name: "imageList",
          type: "array",
          title: "Image List",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "image",
                  type: "image",
                  title: "Image",
                  options: {
                    accept: "image/svg+xml",
                  },
                },
                {
                  name: "alt",
                  type: "string",
                  title: "Alt",
                },
              ],
            },
          ],
        },
        {
          name: "type",
          type: "string",
          title: "Type",
          options: {
            list: [
              { title: "Primary", value: "primary" },
              { title: "Secondary", value: "secondary" },
              { title: "Tertiary", value: "tertiary" },
            ],
          },
        },
        {
          name: "label",
          type: "string",
          title: "Label",
        },
        {
          name: "size",
          type: "string",
          title: "Size",
          options: {
            list: [
              { title: "Small", value: "small" },
              { title: "Medium", value: "medium" },
              { title: "Large", value: "large" },
            ],
          },
        },
      ],
    }),
    defineField({
      name: "edgeNetwork",
      title: "Edge Network",
      description:
        "This is a block of text that will be displayed at the bottom of the page.",
      type: "object",
      fields: [
        {
          name: "heading",
          type: "string",
          title: "Heading",
        },
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            accept: "image/png, image/jpeg, image/jpg",
          },
        },
        {
          name: "alt",
          type: "string",
          title: "Alt",
        },
      ],
    }),
    defineField({
      name: "caseStudy",
      title: "Case Study",
      description:
        "This is a block of text that will be displayed at the bottom of the page.",
      type: "object",
      fields: [
        {
          name: "heading",
          type: "string",
          title: "Heading",
        },
        {
          name: "description",
          type: "text",
          title: "Description",
        },
        {
          name: "itemList",
          type: "array",
          title: "Item List",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "label",
                  type: "string",
                  title: "Label",
                },
                {
                  name: "href",
                  type: "string",
                  title: "Href",
                },
                {
                  name: "percentageList",
                  type: "array",
                  title: "Percentage List",
                  of: [
                    {
                      type: "object",
                      fields: [
                        {
                          name: "percentage",
                          type: "string",
                          title: "Percentage",
                        },
                        {
                          name: "description",
                          type: "string",
                          title: "Description",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "hasIcon",
          type: "boolean",
          title: "Has Icon",
        },
        {
          name: "label",
          type: "string",
          title: "Label",
        },
        {
          name: "icon",
          type: "string",
          title: "Icon",
        },
        {
          name: "href",
          type: "string",
          title: "Href",
        },
      ],
    }),
    defineField({
      name: "modernTechnology",
      title: "Modern Technology",
      description:
        "This is a block of text that will be displayed at the bottom of the page.",
      type: "object",
      fields: [
        {
          name: "heading",
          type: "string",
          title: "Heading",
        },
        {
          name: "href",
          type: "string",
          title: "Href",
        },
        {
          name: "type",
          type: "string",
          title: "Type",
        },
        {
          name: "label",
          type: "string",
          title: "Label",
        },
        {
          name: "size",
          type: "string",
          title: "Size",
        },
      ],
    }),
    defineField({
      name: "testimonialCard",
      title: "Testimonial Card",
      type: "object",
      description:
        "This is a block of text that will be displayed at the bottom of the page.",
      fields: [
        {
          name: "heading",
          type: "string",
          title: "Heading",
        },
        {
          name: "cards",
          type: "array",
          title: "Cards",
          of: [
            {
              name: "card",
              type: "object",
              fields: [
                {
                  name: "name",
                  type: "string",
                  title: "Name",
                },
                {
                  name: "description",
                  type: "text",
                  title: "Description",
                },
                {
                  name: "image",
                  type: "image",
                  title: "Image",
                  options: {
                    accept: "image/svg+xml",
                  },
                },
                {
                  name: "alt",
                  type: "string",
                  title: "Alt Text",
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "blogCard",
      title: "Blog Card",
      type: "object",
      description:
        "This is a block of text that will be displayed at the bottom of the page.",
      fields: [
        {
          name: "heading",
          type: "string",
          title: "Heading",
        },
        {
          name: "cards",
          type: "array",
          title: "Cards",
          of: [
            {
              name: "card",
              type: "object",
              fields: [
                {
                  name: "image",
                  type: "image",
                  title: "Image",
                  options: {
                    accept: "image/png",
                  },
                },
                {
                  name: "alt",
                  type: "string",
                  title: "Alt Text",
                },
                {
                  name: "label",
                  type: "string",
                  title: "Label",
                },
                {
                  name: "description",
                  type: "text",
                  title: "Description",
                },
                {
                  name: "buttonLabel",
                  type: "string",
                  title: "Button Label",
                },
                {
                  name: "href",
                  type: "string",
                  title: "URL",
                },
              ],
            },
          ],
        },
        {
          name: "hasIcon",
          type: "boolean",
          title: "Has Icon",
        },
        {
          name: "label",
          type: "string",
          title: "Label",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        subtitle: "Home",
        title,
      };
    },
  },
});
