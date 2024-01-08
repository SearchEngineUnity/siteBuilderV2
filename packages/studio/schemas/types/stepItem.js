import { MdNumbers } from 'react-icons/md';

export default {
  name: 'stepItem',
  title: 'Step Item',
  type: 'object',
  icon: MdNumbers,
  fields: [
    {
      name: 'title',
      title: 'Step Title',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'text',
      title: 'Step Text',
      type: 'minPT',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
