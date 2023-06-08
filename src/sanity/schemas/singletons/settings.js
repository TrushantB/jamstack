import { CogIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
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
      name: 'menuItems',
      title: 'Menu Item list',
      description: 'Links displayed on the header of your site.',
      type: 'array',
      of: [
        {
          title: 'Reference',
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
              type: 'contact',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'sidebarLink',
      title: 'Sidebar Links',
      description: 'Links displayed on the header of your site.',
      type: 'array',
      of: [
        {
          title: 'Reference',
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
              type: 'contact',
            },
          ],
        },
      ],
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
      name: 'footerItems',
      title: 'Footer Items',
      description: 'Links displayed on the footer of your site.',
      type: 'array',
      of: [
        {
          title: 'Reference',
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
              type: 'contact',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'secondaryFooterItems',
      title: 'Secondary Footer Items',
      description: 'Secondary links displayed on the footer of your site.',
      type: 'array',
      of: [
        {
          title: 'Reference',
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
              type: 'contact',
            },
          ],
        },
      ],
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
