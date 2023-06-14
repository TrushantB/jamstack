import { DocumentIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
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
          title: "Background Color"
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
          name: "animationType",
          type: "string",
          title: "Animation Type",
          options: {
            list: [
              { title: "about", value: "about" },
              { title: "Fade", value: "fade" },
              { title: "Slide", value: "slide" },
            ],
          },
          initialValue: "about",
        },
      ],
    }),
    defineField({
      name: 'morderTechnology',
      title: 'Modern Technology',
      description: 'This is the morderTechnology field.',
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
      ],
    }),
    defineField({
      name: 'jamStackRecipe',
      title: 'Jamstack Recipe',
      description: 'This is the jamStackRecipe field.',
      type: 'object',
      fields: [
        {
          name: 'heading',
          type: 'string',
          title: 'Heading',
        },
        {
          name: 'label',
          type: 'string',
          title: 'Label',
        },
      ],
    }),
    defineField({
      name: 'jamStackStories',
      title: 'Jamstack Stories',
      description: 'This is the jamStackStories field.',
      type: 'object',
      fields: [
        {
          name: 'heading',
          type: 'string',
          title: 'Heading',
        },
        {
          name: 'descriptionArray',
          type: 'array',
          title: 'Description Array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'description',
                  type: 'string',
                  title: 'Description',
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      description: 'This is the cards field.',
      type: 'object',
      fields: [
        {
          name: 'heading',
          type: 'string',
          title: 'Heading',
        },
        {
          name: 'cardsArray',
          type: 'array',
          title: 'Cards Array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  type: 'string',
                  title: 'Title',
                },
                {
                  name: 'class',
                  type: 'string',
                  title: 'Class',
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'jamStackProcess',
      title: 'Jamstack Process',
      description: 'This is the Jamstack process field.',
      type: 'object',
      fields: [
        {
          name: 'heading',
          type: 'string',
          title: 'Heading',
        },
        {
          name: 'processArray',
          type: 'array',
          title: 'Process Array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  type: 'string',
                  title: 'Title',
                },
                {
                  name: 'image',
                  type: 'string',
                  title: 'Image',
                },
                {
                  name: 'layout',
                  type: 'string',
                  title: 'Layout',
                },
                {
                  name: 'labelArray',
                  type: 'array',
                  title: 'Label Array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        {
                          name: 'label',
                          type: 'string',
                          title: 'Label',
                        },
                      ],
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
      name: 'jamstackQuote',
      title: 'Jamstack Quote',
      description: 'This is the Jamstack quote field.',
      type: 'object',
      fields: [
        {
          name: 'heading',
          type: 'string',
          title: 'Heading',
        },
        {
          name: 'author',
          type: 'string',
          title: 'Author',
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
        subtitle: 'About',
        title,
      }
    },
  },
})
