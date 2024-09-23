import { defineType, defineField } from 'sanity';

export default defineType({
  title: 'Facebook Open Graph Meta Pack',
  name: 'fbShareMetaPack',
  type: 'object',
  fields: [
    defineField({
      title: 'Facebook Share Title',
      name: 'fbShareTitle',
      type: 'string',
    }),
    defineField({
      title: 'Facebook Share Description',
      name: 'fbShareDescription',
      type: 'text',
      rows: 3,
    }),
    defineField({
      title: 'Facebook Share Image',
      name: 'fbShareImage',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'fbShareTitle',
    },
  },
});
