import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'menus',
      type: 'array',
      of: [
        {
          title: 'items',
          type: 'object',
          fields: [
            {
              name: 'displayName',
              type: 'string',
              title: 'Display name',
              validation: (rule) => rule.required(),
            },
            {
              title: 'menu',
              name: 'Menu',
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
              validation: (rule) => rule.required(),
            },
          ],
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
        subtitle: 'Navigation',
        title,
      }
    },
  },
})
