import { DocumentIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'jamstack',
  title: 'Jamstack',
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
        }
      ],
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
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
          name: 'cardsitems',
          title: 'Card Items',
          type: 'array',
          of: [
            {
              name: 'cardItem',
              title: 'Card Item',
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                },
                {
                  name: 'class',
                  title: 'Class',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'accordian',
      title: 'Accordion',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
        {
          name: 'accordinaList',
          title: 'Accordion List',
          type: 'array',
          of: [
            {
              name: 'accordionItem',
              title: 'Accordion Item',
              type: 'object',
              fields: [
                {
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'string',
                },
                {
                  name: 'icon',
                  title: 'Icon',
                  type: 'string',
                },
                {
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  fields: [
                    {
                      name: 'alt',
                      title: 'Alt Text',
                      type: 'string',
                    },
                  ],
                },
                {
                  name: 'animationType',
                  title: 'Animation Type',
                  type: 'string',
                },
                {
                  name: 'arrow',
                  title: 'Arrow',
                  type: 'boolean',
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
      name: 'productCard',
      title: 'Product Card',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
        {
          name: 'cards',
          title: 'Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                },
                {
                  name: 'buttonLabel',
                  title: 'Button Label',
                  type: 'string',
                },
                {
                  name: 'href',
                  title: 'Href',
                  type: 'string',
                },
              ],
            },
          ],
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
        subtitle: 'Jamstack',
        title,
      }
    },
  },
})
