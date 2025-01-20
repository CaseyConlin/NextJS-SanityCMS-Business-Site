import {defineField, defineType} from 'sanity'

export const clientType = defineType({
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'leadInText',
      title: 'Lead In Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'clientName'},
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
      name: 'services',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required().max(8),
    }),
    defineField({
      name: 'metaData',
      title: 'Metadata',
      type: 'metaDataType',
      validation: (rule) => rule.required(),
    }),
  ],
})
