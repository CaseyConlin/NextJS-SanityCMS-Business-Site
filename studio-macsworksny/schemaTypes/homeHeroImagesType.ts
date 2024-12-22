import {defineField, defineType} from 'sanity'

export const homeHeroImagesType = defineType({
  name: 'homeHeroImagesData',
  title: 'Home Hero Images',
  type: 'object',
  fields: [
    defineField({
      name: 'heroImages',
      title: 'Hero Images',
      type: 'array',
      of: [{type: 'heroImage'}],
    }),
  ],
})
