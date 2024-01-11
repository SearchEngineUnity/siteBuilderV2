import { BiChevronDownSquare } from 'react-icons/bi';

export default {
  name: 'accordionItem',
  title: 'Accordion Item',
  type: 'object',
  icon: BiChevronDownSquare,
  fields: [
    {
      name: 'title',
      title: 'Accordion Title',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'text',
      title: 'Accordion Text',
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
