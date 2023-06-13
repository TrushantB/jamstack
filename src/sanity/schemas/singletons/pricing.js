import { DashboardIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'pricing',
  title: 'Pricing',
  type: 'document',
  icon: DashboardIcon,
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
              { title: "Image Bottom", value: "Image Bottom" },
            ],
          },
          initialValue: "image-left",
        },
        {
          name: "href",
          type: "string",
          title: "Href",
          initialValue: "contact",
        },
        {
          name: "alt",
          type: "string",
          title: "Alt",
        },
        {
          name: "animationType",
          type: "string",
          title: "Animation Type",
          options: {
            list: [
              { title: "price", value: "price" },
              { title: "Fade", value: "fade" },
              { title: "Slide", value: "slide" },
            ],
          },
          initialValue: "home",
        },
      ],
    }),
    defineField({
      name: 'textBanner',
      title: 'Text Banner',
      description: 'This is the text banner field.',
      type: 'object',
      fields: [
        {
          name: 'sliderControls',
          title: 'Slider Controls',
          type: 'object',
          fields: [
            {
              name: 'dots',
              title: 'Dots',
              type: 'boolean',
            },
            {
              name: 'infinite',
              title: 'Infinite',
              type: 'boolean',
            },
            {
              name: 'speed',
              title: 'Speed',
              type: 'number',
            },
            {
              name: 'autoplaySpeed',
              title: 'Autoplay Speed',
              type: 'number',
            },
            {
              name: 'autoplay',
              title: 'Autoplay',
              type: 'boolean',
            },
            {
              name: 'arrows',
              title: 'Arrows',
              type: 'boolean',
            },
            {
              name: 'swipe',
              title: 'Swipe',
              type: 'boolean',
            },
          ],
        },
        {
          name: 'info',
          title: 'Info',
          type: 'array',
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
                  name: 'icon',
                  type: 'string',
                  title: 'Icon',
                },
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alt Text',
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'webStatistics',
      title: 'Web Statistics',
      description: 'This field allows you to check website performance and request a report.',
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
          name: 'placeholder',
          title: 'Placeholder',
          type: 'string',
        },
        {
          name: 'buttonLabel',
          title: 'Button Label',
          type: 'string',
        },
        {
          name: 'isButton',
          title: 'Is Button',
          type: 'boolean',
        },
      ],
    }),
    defineField({
      name: 'customPlan',
      title: 'Custom Plan',
      description: 'This field allows you to select an ideal custom plan for your business.',
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
          name: 'selectPlanHeading',
          title: 'Select Plan Heading',
          type: 'string',
        },
        {
          name: 'idealPlanHeading',
          title: 'Ideal Plan Heading',
          type: 'string',
        },
        {
          name: 'plans',
          title: 'Plans',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                },
                {
                  name: 'id',
                  title: 'ID',
                  type: 'string',
                },
                {
                  name: 'options',
                  title: 'Options',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        {
                          name: 'name',
                          title: 'Name',
                          type: 'string',
                        },
                        {
                          name: 'icon',
                          title: 'Icon',
                          type: 'string',
                        },
                        {
                          name: 'id',
                          title: 'ID',
                          type: 'string',
                        },
                      ],
                    },
                  ],
                },
                {
                  name: 'selected',
                  title: 'Selected',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        {
                          name: 'name',
                          title: 'Name',
                          type: 'string',
                        },
                        {
                          name: 'icon',
                          title: 'Icon',
                          type: 'string',
                        },
                        {
                          name: 'id',
                          title: 'ID',
                          type: 'string',
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
      name: 'accordinData',
      title: 'Accordion Data',
      description: 'This field contains accordion data for pricing packages related FAQs.',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
        {
          name: 'button',
          title: 'Button',
          type: 'object',
          fields: [
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
        {
          name: 'accordin',
          title: 'Accordion',
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
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'ConnectChoose',
      title: 'Connect & Choose',
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
          name: 'description',
          title: 'Description',
          type: 'string',
        },
        {
          name: 'buttonLabel',
          title: 'Button Label',
          type: 'string',
        },
        {
          name: 'type',
          title: 'Button Type',
          type: 'string',
          options: {
            list: [
              { title: 'Primary', value: 'primary' },
              { title: 'Secondary', value: 'secondary' },
            ],
          },
        },
        {
          name: 'label',
          title: 'Button Accessibility Label',
          type: 'string',
        },
        {
          name: 'size',
          title: 'Button Size',
          type: 'string',
          options: {
            list: [
              { title: 'Small', value: 'small' },
              { title: 'Medium', value: 'medium' },
              { title: 'Large', value: 'large' },
            ],
          },
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
        subtitle: 'Pricing',
        title,
      }
    },
  },
})
