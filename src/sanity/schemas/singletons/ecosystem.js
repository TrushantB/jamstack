import { DocumentIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'ecosystem',
  title: 'Ecosystem',
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
      name : 'banner',
      title : 'Banner',
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
          name: "title",
          type: "string",
          title: "Title",
        },
      ]
    }),
    defineField({
      name: 'accordinData',
      title: 'Accordion Data',
      description: 'This is the accordion data field.',
      type: 'object',
      fields: [
        {
          name: 'heading',
          type: 'string',
          title: 'Heading',
        },
        {
          name: 'accordin',
          type: 'array',
          title: 'Accordion Items',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'label',
                  type: 'string',
                  title: 'Label',
                },
                {
                  name: 'description',
                  type: 'string',
                  title: 'Description',
                },
                {
                  name: 'content',
                  type: 'text',
                  title: 'Content',
                },
                {
                  name: 'image',
                  type: 'image',
                  title: 'Image',
                },
                {
                  name: 'animationType',
                  type: 'string',
                  title: 'Animation Type',
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'ConnectChoose',
      title: 'Connect, Check, Choose',
      description: 'This is the ConnectChoose field.',
      type: 'object',
      fields: [
        {
          name: 'heading',
          type: 'string',
          title: 'Heading',
        },
        {
          name: 'description',
          type: 'string',
          title: 'Description',
        },
        {
          name: 'buttonLabel',
          type: 'string',
          title: 'Button Label',
        },
        {
          name: 'type',
          type: 'string',
          title: 'Type',
        },
        {
          name: 'label',
          type: 'string',
          title: 'Label',
        },
        {
          name: 'size',
          type: 'string',
          title: 'Size',
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
        subtitle: 'Ecosystem',
        title,
      }
    },
  },
})
