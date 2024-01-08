import { BiChevronDownSquare } from 'react-icons/bi';

export default {
  name: 'accordionItem',
  title: 'Item',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Item Title',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'text',
      title: 'Item Text',
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
