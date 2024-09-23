import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'Twitter Open Graph Meta Pack',
  name: 'twitterShareMetaPack',
  type: 'object',
  fields: [
    defineField({
      title: 'Twitter Share Title',
      name: 'twitterShareTitle',
      type: 'string',
    }),
    defineField({
      title: 'Twitter Share Description',
      name: 'twitterShareDescription',
      type: 'text',
      rows: 3,
    }),
    defineField({
      title: 'Twitter Share Image',
      name: 'twitterShareImage',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'twitterShareTitle',
    },
  },
});
