import { DocumentIcon, ImageIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "platforms",
  title: "platforms",
  icon: DocumentIcon,
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
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
          name: "description",
          type: "string",
          title: "Description",
        },
        {
          name: "backgroundColor",
          type: "string",
          title: "Background Color",
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
              { title: "webj", value: "webj" },
              { title: "mobj", value: "mobj" },
              { title: "ecomj", value: "ecomj" },
            ],
          },
          initialValue: "home",
        },
      ],
    }),
    defineField({
      name: "info",
      title: "Info",
      type: "object",
      fields: [
        {
          name: "description",
          type: "string",
          title: "Description",
        },
        {
          name: "question",
          type: "string",
          title: "Question",
        },
        {
          name: "href",
          type: "string",
          title: "Href",
        },
        {
          name: "lineImage",
          type: "object",
          title: "Line Image",
          fields: [
            {
              name: "url",
              type: "string",
              title: "URL",
            },
            {
              name: "alt",
              type: "string",
              title: "Alt",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "stepperData",
      title: "Stepper Data",
      type: "object",
      fields: [
        {
          name: "heading",
          title: "Heading",
          type: "string",
        },
        {
          name: "stepper",
          title: "Stepper",
          type: "array",
          of: [
            {
              name: "step",
              title: "Step",
              type: "object",
              fields: [
                {
                  name: "label",
                  title: "Label",
                  type: "string",
                },
                {
                  name: "content",
                  title: "Content",
                  type: "text",
                },
                {
                  name: "layout",
                  title: "Layout",
                  type: "string",
                },
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                },
                {
                  name: "id",
                  title: "ID",
                  type: "string",
                },
                {
                  name: "animationType",
                  title: "Animation Type",
                  type: "string",
                },
                {
                  name: "faqs",
                  title: "FAQs",
                  type: "array",
                  of: [
                    {
                      name: "faq",
                      title: "FAQ",
                      type: "object",
                      fields: [
                        {
                          name: "label",
                          title: "Label",
                          type: "string",
                        },
                        {
                          name: "description",
                          title: "Description",
                          type: "text",
                        },
                        {
                          name: "icon",
                          title: "Icon",
                          type: "string",
                        },
                        {
                          name: "arrow",
                          title: "Arrow",
                          type: "boolean",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "cta",
                  title: "CTA",
                  type: "object",
                  fields: [
                    {
                      name: "label",
                      title: "Label",
                      type: "string",
                    },
                    {
                      name: "size",
                      title: "Size",
                      type: "string",
                    },
                    {
                      name: "type",
                      title: "Type",
                      type: "string",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "morderTechnologyOne",
      title: "Morder Technology One",
      type: "object",
      fields: [
        {
          name: "heading",
          title: "Heading",
          type: "text",
        },
        {
          name: "label",
          title: "Label",
          type: "string",
        },
        {
          name: 'type',
          title: 'Type',
          type: 'string',
          options: {
            list: [
              { title: 'Primary', value: 'primary' },
              { title: 'Secondary', value: 'secondary' },
              { title: 'Tertiary', value: 'tertiary' },
            ],
          },
          initialValue: 'primary',
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
          name: "href",
          title: "Href",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "accordian",
      title: "Accordian",
      type: "object",
      fields: [
        {
          name: "heading",
          title: "Heading",
          type: "string",
        },
        {
          name: "accordianIcon",
          title: "Accordian Icon",
          type: "string",
        },
        {
          name: "accordinaList",
          title: "Accordian List",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "label",
                  title: "Label",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "text",
                },
                {
                  name: "icon",
                  title: "Icon",
                  type: "string",
                },
                {
                  name: "arrow",
                  title: "Arrow",
                  type: "boolean",
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
        {
          name: 'href',
          title: 'Href',
          type: 'string',
        },
        {
          name: 'type',
          title: 'Type',
          type: 'string',
          options: {
            list: [
              { title: 'Primary', value: 'primary' },
              { title: 'Secondary', value: 'secondary' },
              { title: 'Tertiary', value: 'tertiary' },
            ],
          },
          initialValue: 'primary',
        },
        {
          name: 'label',
          title: 'Label',
          type: 'string',
        },
        {
          name: 'size',
          title: 'Size',
          type: 'string',
          options: {
            list: [
              { title: 'Small', value: 'small' },
              { title: 'Medium', value: 'medium' },
              { title: 'Large', value: 'large' },
            ],
          },
          initialValue: 'medium',
        },
      ],
    }),
    defineField({
      name: "caseStudy",
      title: "Case Study",
      type: "object",
      fields: [
        {
          name: "heading",
          title: "Heading",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "string",
        },
        {
          name: "itemList",
          title: "Item List",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "label",
                  title: "Label",
                  type: "string",
                },
                {
                  name: "href",
                  title: "Href",
                  type: "string",
                },
                {
                  name: "percentageList",
                  title: "Percentage List",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      fields: [
                        {
                          name: "percentage",
                          title: "Percentage",
                          type: "string",
                        },
                        {
                          name: "description",
                          title: "Description",
                          type: "string",
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
          title: "Has Icon",
          type: "boolean",
        },
        {
          name: "label",
          title: "Label",
          type: "string",
        },
        {
          name: "icon",
          title: "Icon",
          type: "string",
        },
        {
          name: "href",
          title: "Href",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "testimonialCard",
      title: "Testimonial Card",
      type: "object",
      fields: [
        {
          name: "heading",
          title: "Heading",
          type: "string",
        },
        {
          name: "cards",
          title: "Cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "name",
                  title: "Name",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "string",
                },
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                },
                {
                  name: "alt",
                  title: "Alt Text",
                  type: "string",
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
      fields: [
        {
          name: "heading",
          title: "Heading",
          type: "string",
        },
        {
          name: "cards",
          title: "Cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                },
                {
                  name: "alt",
                  title: "Alt Text",
                  type: "string",
                },
                {
                  name: "label",
                  title: "Label",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "string",
                },
                {
                  name: "buttonLabel",
                  title: "Button Label",
                  type: "string",
                },
                {
                  name: "href",
                  title: "Link Href",
                  type: "string",
                },
              ],
            },
          ],
        },
        {
          name: "hasIcon",
          title: "Has Icon",
          type: "boolean",
        },
        {
          name: "label",
          title: "Read More Label",
          type: "string",
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
        subtitle: "Platforms",
        title,
      };
    },
  },
});
