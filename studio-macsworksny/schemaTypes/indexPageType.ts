import {defineField, defineType} from 'sanity'
import {CharCountInput} from '../components/CharCountInput'
import {maxLengthRule} from '../helpers/helpers'

export const indexPageType = defineType({
  name: 'indexPage',
  title: 'Index Page Data',
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
      components: {
        input: CharCountInput,
      },
      validation: (rule) =>
        rule
          .required()
          .max(60)
          .custom((title) => maxLengthRule(title, 60)),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Metadata Description (50 - 160 characters)',
      type: 'string',

      components: {
        input: CharCountInput,
      },
      validation: (rule) =>
        rule
          .required()
          .max(160)
          .custom((desc) => maxLengthRule(desc, 160)),
    }),
    defineField({
      name: 'contactFooterTitle',
      title: 'Contact Footer Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contactFooterDescription',
      title: 'Contact Footer Description',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contactFooterSubtitle',
      title: 'Contact Footer Subtitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contactFooterImage',
      title: 'Contact Footer Image',
      type: 'accessibleImage',
      validation: (rule) => rule.required(),
    }),
  ],
})
