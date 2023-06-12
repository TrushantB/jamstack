import { CogIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'projectName',
      title: 'Project Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'image',
      icon: ImageIcon,
      name: 'logo',
      title: 'Logo',
      options: {
        hotspot: true,
      },
      preview: {
        select: {
          imageUrl: 'asset.url',
          title: 'caption',
        },
      },
      fields: [
        defineField({
          name: 'logoAlt',
          type: 'string',
          title: 'Alt text',
          description:
            'Alternative text for screenreaders. Falls back on caption if not set',
        }),
      ],
    }),
    defineField({
      title: 'Header Menus',
      name: 'headerMenus',
      type: 'navigation'
    }),
    defineField({
      title: 'Sidebar Menus',
      name: 'sidebarMenus',
      type: 'navigation'
    }),
    defineField({
      name: 'description',
      description:
        'This is a block of text that will be displayed at the bottom of the page.',
      title: 'Short Description',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'contactButton',
      type: 'object',
      title: 'Contact Button',
      fields: [
        {
          name: 'label',
          type: 'string',
          title: 'Label',
        },
        {
          title: 'page',
          name: 'Page',
          type: 'reference',
          to: [
            {
              type: 'home',
            },
            {
              type: 'platforms',
            },
            {
              type: 'pricing',
            },
            {
              type: 'ecosystem',
            },
            {
              type: 'caseStudy',
            },
            {
              type: 'blog',
            },
            {
              type: 'blogs',
            },
            {
              type: 'compliences',
            },
            {
              type: 'about',
            },
            {
              type: 'faqs',
            },
            {
              type: 'jamstack',
            },
            {
              type: 'contact',
            },
          ],
        },
        {
          title: 'target',
          name: 'target',
          type: 'string',
          options: {
            list: [
              { title: 'Blank', value: '_blank' },
              { title: 'Self', value: '_self' },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'contactInfo',
      type: 'object',
      title: 'Contact info',
      fields: [
        {
          name: 'label',
          type: 'string',
          title: 'Label',
        },
        {
          name: 'phoneNumber',
          type: 'string',
          title: 'Phone Number',
        },
        {
          name: 'email',
          type: 'email',
          title: 'Email',
        },
        {
          name: 'country',
          type: 'string',
          title: 'Country',
        },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          title: 'items',
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Name',
            },
            {
              name: 'icon',
              type: 'string',
              title: 'Icon',
            },
            {
              name: 'href',
              type: 'string',
              title: 'Href',
            },
            {
              title: 'Target',
              name: 'target',
              type: 'string',
              options: {
                list: [
                  { title: 'Blank', value: '_blank' },
                  { title: 'Self', value: '_self' },
                ],
              },
            },
          ],
        },
      ],
    }),
    defineField({
      title: 'Footer Menus',
      name: 'footerMenus',
      type: 'navigation'
    }),
    defineField({
      title: 'Secondary Footer Menus',
      name: 'secondaryFooterMenus',
      type: 'navigation'
    }),
    defineField({
      name: 'copyRight',
      description:
        'This is a block of text that will be displayed at the bottom of the page.',
      title: 'Copy Right',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Displayed on social cards and search engine results.',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings',
      }
    },
  },
})
