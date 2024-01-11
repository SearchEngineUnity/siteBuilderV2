import { GrSteps } from 'react-icons/gr';

export default {
  name: 'stepsBlock',
  title: 'Steps Block',
  type: 'object',
  icon: GrSteps,
  fields: [
    {
      name: 'name',
      title: 'Steps Name',
      type: 'string',
      description: 'This is used for display purpose in the studio.',
    },
    {
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [{ type: 'stepItem' }],
    },
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
};
