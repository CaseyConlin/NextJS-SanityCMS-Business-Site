import {defineField, defineType} from 'sanity'

export const heroImageType = defineType({
  name: 'heroImage',
  title: 'Hero Image',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'object',
      title: 'Image',
      name: 'image',
      fields: [
        defineField({
          name: 'asset',
          type: 'image',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'alt',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
})
