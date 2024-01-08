import { TfiLayoutAccordionMerged } from 'react-icons/tfi';

export default {
  name: 'accordionBlock',
  title: 'Accordion Block',
  type: 'object',
  icon: TfiLayoutAccordionMerged,
  fields: [
    {
      name: 'name',
      title: 'Accordion Name',
      type: 'string',
      description: 'This is used for display purpose in the studio.',
    },
    {
      name: 'accordionSet',
      title: 'Accordion Set',
      type: 'array',
      of: [{ type: 'accordionItem' }],
    },
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare({ name }) {
      return {
        title: name || 'Accordion Block',
      };
    },
  },
};
