import { defineType, defineField, defineArrayMember } from 'sanity';
import { TfiLayoutAccordionMerged } from 'react-icons/tfi';

export default defineType({
  name: 'accordionBlock',
  title: 'Accordion Block',
  type: 'object',
  icon: TfiLayoutAccordionMerged,
  fields: [
    defineField({
      name: 'name',
      title: 'Accordion Name',
      type: 'string',
      description: 'This is used for display purpose in the studio.',
    }),
    defineField({
      name: 'accordionSet',
      title: 'Accordion Set',
      type: 'array',
      of: [defineArrayMember({ type: 'accordionItem' })],
    }),
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
});
