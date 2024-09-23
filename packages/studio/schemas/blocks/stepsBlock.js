import { defineType, defineField, defineArrayMember } from 'sanity';
import { GrSteps } from 'react-icons/gr';

export default defineType({
  name: 'stepsBlock',
  title: 'Steps Block',
  type: 'object',
  icon: GrSteps,
  fields: [
    defineField({
      name: 'name',
      title: 'Steps Name',
      type: 'string',
      description: 'This is used for display purpose in the studio.',
    }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [defineArrayMember({ type: 'stepItem' })],
    }),
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare({ name }) {
      return {
        title: name || 'Steps Block',
      };
    },
  },
});
