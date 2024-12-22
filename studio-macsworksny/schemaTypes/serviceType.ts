import {defineField, defineType} from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'accessibleImage',
    }),
    defineField({
      name: 'bodyTitle1',
      title: 'Body Title 1',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body1',
      title: 'Body 1',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bodyTitle2',
      title: 'Body Title 2',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body2',
      title: 'Body 2',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'workTitle',
      title: 'Work Area Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'workTitleBody',
      title: 'Work Area Body - 450 characters',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
  ],
})
