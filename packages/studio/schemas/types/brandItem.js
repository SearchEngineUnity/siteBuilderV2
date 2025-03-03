import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'brandItem',
  type: 'object',
  title: 'Navigation Brand Item',
  fields: [
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      to: [{ type: 'companyLogo' }],
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Desktop', value: 'desktop' },
          { title: 'Tablet', value: 'tablet' },
          { title: 'Mobile', value: 'mobile' },
        ],
      },
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'maxHeight',
      type: 'number',
      title: 'Image Max Height',
      description: `You can enter a height in pixels. If the image's native height is smaller it will be used instead.`,
    }),
    defineField({
      name: 'maxWidth',
      type: 'number',
      title: 'Image Max Width',
      description: `You can enter a width in pixels. If the image's native width is smaller it will be used instead.`,
    }),
  ],
  preview: {
    select: {
      title: 'type',
      media: 'brand.logo',
    },
  },
});
