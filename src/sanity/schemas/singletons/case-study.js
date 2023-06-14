import { DocumentIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your page.',
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
    })
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'case-study',
        title,
      }
    },
  },
})
