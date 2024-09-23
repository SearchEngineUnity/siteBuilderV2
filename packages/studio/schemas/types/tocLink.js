import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'tocLink',
  type: 'object',
  title: 'ToC Menu Item',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'hashID',
      title: 'Hash ID',
      type: 'string',
      description: 'Please enter the ID you would like to jump to. Do not include the # symbol.',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'hashID',
    },
  },
});
