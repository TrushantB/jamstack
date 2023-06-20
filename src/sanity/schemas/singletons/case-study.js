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
    // TODO: Commented for now
    // defineField({
    //   name: 'content',
    //   title: 'Content',
    //   type: 'array',
    //   of: [
    //     defineArrayMember({
    //       type: 'block',
    //       marks: {
    //         annotations: [
    //           {
    //             name: 'link',
    //             type: 'object',
    //             title: 'Link',
    //             fields: [
    //               {
    //                 name: 'href',
    //                 type: 'url',
    //                 title: 'Url',
    //               },
    //             ],
    //           },
    //         ],
    //         decorators: [
    //           { 
    //             name: 'color', 
    //             type: 'object', 
    //             title: 'Color', 
    //             fields: [
    //               {
    //                 name: 'value',
    //                 type: 'color',
    //                 title: 'Value',
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //     }),
    //     {
    //       type: 'image',
    //       name: 'image',
    //       title: 'Image',
    //     },
    //   ],
    // })

    // defineField({
    //   name: 'content',
    //   title: 'Content',
    //   type: 'array',
    //   of: [
    //     defineArrayMember({
    //       type: 'block',
    //       marks: {
    //         annotations: [
    //           {
    //             name: 'link',
    //             type: 'object',
    //             title: 'Link',
    //             fields: [
    //               {
    //                 name: 'href',
    //                 type: 'url',
    //                 title: 'Url',
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //     }),
    //   ],
    // })
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
