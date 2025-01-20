import {defineField, defineType} from 'sanity'
import {CharCountInput} from '../components/CharCountInput'
import {maxLengthRule} from '../helpers/helpers'

export const metaDataType = defineType({
  name: 'metaDataType',
  title: 'Metadata',
  type: 'object',
  fields: [
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
      name: 'metaImage',
      title: 'Metadata Image',
      type: 'image',
    }),
  ],
})
