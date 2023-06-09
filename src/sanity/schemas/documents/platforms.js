import { DocumentIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'platforms',
  title: 'platforms',
  icon: DocumentIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
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
      name: 'banner',
      title: 'Banner',
      description:
        'This is a block of text that will be displayed at the bottom of the page.',
      type: 'object',
      fields: [
        {
          name: 'heading',
          type: 'string',
          title: 'Heading',
        },
        {
          name: 'backgroundColor',
          type: 'string',
          title: 'Background Color',
        },
        {
          name: 'popUp',
          type: 'object',
          title: 'Pop-up Configuration',
          fields: [
            {
              name: 'headingSize',
              type: 'string',
              title: 'Heading Size',
              options: {
                list: [
                  { title: 'Small', value: 'small' },
                  { title: 'Medium', value: 'medium' },
                  { title: 'Large', value: 'large' },
                ],
              },
              initialValue: 'medium',
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: {
                accept: 'image/svg+xml',
              },
            },
            {
              name: 'type',
              type: 'string',
              title: 'Type',
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
              type: 'string',
              title: 'Label',
              initialValue: 'Start A Project',
            },
            {
              name: 'size',
              type: 'string',
              title: 'Size',
              options: {
                list: [
                  { title: 'Small', value: 'small' },
                  { title: 'Medium', value: 'medium' },
                  { title: 'Large', value: 'large' },
                ],
              },
              initialValue: 'medium',
            },
            {
              name: 'layout',
              type: 'string',
              title: 'Layout',
              options: {
                list: [
                  { title: 'Image Left', value: 'image-left' },
                  { title: 'Image Right', value: 'image-right' },
                  { title: 'Image Top', value: 'image-top' },
                ],
              },
              initialValue: 'image-left',
            },
            {
              name: 'href',
              type: 'string',
              title: 'Href',
              initialValue: 'contact',
            },
            {
              name: 'animationType',
              type: 'string',
              title: 'Animation Type',
              options: {
                list: [
                  { title: 'Home', value: 'home' },
                  { title: 'Fade', value: 'fade' },
                  { title: 'Slide', value: 'slide' },
                ],
              },
              initialValue: 'home',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'info',
      title: 'Info',
      type: 'object',
      fields: [
        {
          name: 'description',
          type: 'text',
          title: 'Description',
        },
        {
          name: 'question',
          type: 'string',
          title: 'Question',
        },
        {
          name: 'href',
          type: 'string',
          title: 'URL',
        },
        {
          name: 'lineImage',
          type: 'object',
          title: 'Line Image',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'URL',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'stepperData',
      title: 'Stepper Data',
      type: 'object',
      fields: [
        {
          name: 'heading',
          type: 'string',
          title: 'Heading',
        },
        {
          name: 'stepper',
          type: 'array',
          title: 'Stepper',
          of: [
            {
              name: 'step',
              type: 'object',
              title: 'Step',
              fields: [
                {
                  name: 'label',
                  type: 'string',
                  title: 'Label',
                },
                {
                  name: 'content',
                  type: 'text',
                  title: 'Content',
                },
                {
                  name: 'layout',
                  type: 'string',
                  title: 'Layout',
                  options: {
                    list: [
                      { title: 'Image Right', value: 'imageRight' },
                      { title: 'Image Left', value: 'imageLeft' },
                      { title: 'Image Center', value: 'imageCenter' },
                    ],
                  },
                },
                {
                  name: 'image',
                  type: 'image',
                  title: 'Image',
                  options: {
                    hotspot: true,
                  },
                },
                {
                  name: 'id',
                  type: 'string',
                  title: 'ID',
                },
                {
                  name: 'animationType',
                  type: 'string',
                  title: 'Animation Type',
                },
                {
                  name: 'faqs',
                  type: 'array',
                  title: 'FAQs',
                  of: [
                    {
                      name: 'faq',
                      type: 'object',
                      title: 'FAQ',
                      fields: [
                        {
                          name: 'label',
                          type: 'string',
                          title: 'Label',
                        },
                        {
                          name: 'description',
                          type: 'text',
                          title: 'Description',
                        },
                        {
                          name: 'icon',
                          type: 'string',
                          title: 'Icon',
                        },
                        {
                          name: 'arrow',
                          type: 'boolean',
                          title: 'Arrow',
                        },
                      ],
                    },
                  ],
                },
                {
                  name: 'cta',
                  type: 'object',
                  title: 'Call to Action',
                  fields: [
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
                    {
                      name: 'type',
                      type: 'string',
                      title: 'Type',
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
      name: 'morderTechnologyOne',
      title: 'Modern Technology One',
      type: 'object',
      fields: [
        {
          name: 'heading',
          type: 'string',
          title: 'Heading',
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
        {
          name: 'href',
          type: 'string',
          title: 'Href',
        },
      ],
    }),
    defineField({
      name: 'accordian',
      title: 'Accordian',
      type: 'object',
      fields: [
        {
          name: 'heading',
          type: 'string',
          title: 'Heading',
        },
        {
          name: 'accordinaList',
          type: 'array',
          title: 'Accordian List',
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
                  type: 'text',
                  title: 'Description',
                },
                {
                  name: 'icon',
                  type: 'string',
                  title: 'Icon',
                },
                {
                  name: 'arrow',
                  type: 'boolean',
                  title: 'Arrow',
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
          type: 'string',
          title: 'Heading',
        },
        {
          name: 'href',
          type: 'string',
          title: 'Href',
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
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Platforms',
        title,
      }
    },
  },
})