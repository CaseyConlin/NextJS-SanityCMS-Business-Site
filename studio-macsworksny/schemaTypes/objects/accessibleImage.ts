// /schemas/objects/accessibleImage.js (.ts)

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'accessibleImage',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      // hidden: ({parent}) => !parent?.asset,
    }),
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Alternative text is required.',
      // hidden: ({parent}) => !parent?.asset,
      validation: (Rule) => [Rule.required()],
    }),
  ],
})
