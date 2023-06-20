
import { DocumentIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog Details',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your project.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    {
      type: 'image',
      icon: ImageIcon,
      name: 'image',
      title: 'Banner Image',
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
        }),
      ],
    },
    defineField({
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [
        {
          type: 'author',
        }
      ],
    }),
    defineField({
      name: 'publishedDt',
      title: 'Published Date',
      type: 'date',
    }),
    defineField({
      name: 'tableOfContentHeading',
      type: 'string',
      title: 'Table Of Content Heading',
    }),
    defineField({
      name: 'tableOfContent',
      type: 'array',
      of: [
        {
          title: 'items',
          type: 'object',
          fields: [
            {
              name: 'heading',
              type: 'string',
              title: 'Heading',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'block',
                  lists: [
                    { title: 'Bullet', value: 'bullet' },
                    { title: 'Numbered', value: 'number' },
                    { title: 'Squared', value: 'square' },
                  ],
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
                {
                  type: 'image',
                  icon: ImageIcon,
                  name: 'image',
                  title: 'image',
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
                      name: 'alt',
                      type: 'string',
                      title: 'Alt text',
                      description:
                        'Alternative text for screenreaders. Falls back on caption if not set',
                    }),
                  ],
                },
                {
                  name: 'table',
                  type: 'table'
                }
              ],
            }
          ],
        },
      ],
    }),
    defineField({
      name: 'shareHeading',
      type: 'string',
      title: 'Social Sharing Heading',
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
      name: "letTalk",
      title: "Let's Talk",
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          type: 'image',
          icon: ImageIcon,
          name: 'image',
          title: 'Image',
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
            }),
          ],
        },
        {
          name: 'cta',
          title: "CTA",
          type: "object",
          fields: [
            {
              title: "Display Name",
              type: "string",
              name: "displayName"
            },
            {
              title: 'page',
              name: 'page',
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
            }
          ]
        }

      ],
    }),
  ],
})
