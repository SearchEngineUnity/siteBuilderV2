import { defineField, defineType } from 'sanity';
import { MdNumbers } from 'react-icons/md';

export default defineType({
  name: 'stepItem',
  title: 'Step Item',
  type: 'object',
  icon: MdNumbers,
  fields: [
    defineField({
      name: 'title',
      title: 'Step Title',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'text',
      title: 'Step Text',
      type: 'minPT',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
