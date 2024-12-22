import {defineField, defineType} from 'sanity'

export const indexPageType = defineType({
  name: 'indexPage',
  title: 'Index Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroImages',
      title: 'Hero Images',
      type: 'array',
      of: [{type: 'heroImage'}],
      validation: (rule) => rule.required().min(4).max(4),
    }),
    defineField({
      name: 'aboutTitle',
      title: 'About Title - 35 characters',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'aboutDescription',
      title: 'About Us Section - 750 characters',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'aboutLink',
      title: 'About Us Link',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'metaTitle',
      title: 'Metadata Title (50 - 60 characters)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Metadata Description (50 - 160 characters)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
