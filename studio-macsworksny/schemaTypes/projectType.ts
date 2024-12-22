import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
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
      name: 'clientCategory',
      title: 'Client Category',
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
      name: 'subheading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imagesGallery',
      title: 'Images gallery',
      type: 'array',
      of: [{type: 'accessibleImage'}],
      validation: (rule) => rule.required(),
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
      name: 'features',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required().max(8),
    }),
  ],
})
