
import { DocumentIcon, ImageIcon, ThLargeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudyDetails',
  title: 'Case Study Details',
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
    defineField({
      name: "description",
      type: "text",
      title: "Short Description",
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
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    },
    defineField({
      name: "client",
      type: "string",
      title: "Client",
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: "timeline",
      type: "string",
      title: "Timeline",
    }),
    defineField({
      name: "service",
      type: "string",
      title: "Services",
    }),
    defineField({
      name: 'tableOfContentHeading',
      type: 'string',
      title: 'Table Of Content Heading',
      validation: (rule) => rule.required(),
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
              validation: (rule) => rule.required(),
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
                      title: 'Alt Text',
                      description:
                        'Alternative text for screenreaders. Falls back on caption if not set',
                    }),
                    defineField({
                      name: 'caption',
                      type: 'string',
                      title: 'Caption Text',
                      description: 'Caption for image',
                    }),
                  ],
                },
                defineField({
                  name: "customTable",
                  title: "Custom Table",
                  type: 'object',
                  icon: ThLargeIcon,
                  fields: [
                    {
                      title: 'Table Type',
                      name: 'tableType',
                      type: 'string',
                      initialValue: 'bg-primary',
                      options: {
                        list: [
                          { title: 'Primary', value: 'bg-primary' },
                          { title: 'Secondary', value: 'bg-secondary' },
                          { title: 'Tertiary', value: 'bg-tertiary' },
                        ],
                      },
                    },
                    {
                      name: 'table',
                      type: 'table'
                    }
                  ]
                })
              ],
            }
          ],
        },
      ],
    }),
    // defineField({
    //   name: 'shareHeading',
    //   type: 'string',
    //   title: 'Social Sharing Heading',
    //   validation: (rule) => rule.required(),
    // }),
    // defineField({
    //   name: 'socialLinks',
    //   title: 'Social Links',
    //   type: 'array',
    //   of: [
    //     {
    //       title: 'items',
    //       type: 'object',
    //       fields: [
    //         {
    //           name: 'name',
    //           type: 'string',
    //           title: 'Name',
    //         },
    //         {
    //           name: 'icon',
    //           type: 'string',
    //           title: 'Icon',
    //         },
    //         {
    //           name: 'href',
    //           type: 'string',
    //           title: 'Href',
    //         },
    //         {
    //           title: 'Target',
    //           name: 'target',
    //           type: 'string',
    //           options: {
    //             list: [
    //               { title: 'Blank', value: '_blank' },
    //               { title: 'Self', value: '_self' },
    //             ],
    //           },
    //         },
    //       ],
    //     },
    //   ],

    // }),
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
})
