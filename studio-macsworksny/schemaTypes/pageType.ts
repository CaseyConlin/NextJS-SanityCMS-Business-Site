import {defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Pages',
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
      name: 'body',
      title: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'metaData',
      title: 'Metadata',
      type: 'metaDataType',
      validation: (rule) => rule.required(),
    }),
  ],
})
