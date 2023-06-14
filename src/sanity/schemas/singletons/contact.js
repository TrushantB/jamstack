import { MobileDeviceIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  icon: MobileDeviceIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your personal website.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contactSection',
      title: 'Contact Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
        },
        {
          name: 'contactDetails',
          title: 'Contact Details',
          type: 'string',
        },
        {
          name: 'contactEmail',
          title: 'Contact Email',
          type: 'string',
        },
      ],
    }), defineField({
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
    })
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Contact',
        title,
      }
    },
  },
})
