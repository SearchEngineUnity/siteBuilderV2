import { defineType, defineField } from 'sanity';
import { BiChevronDownSquare } from 'react-icons/bi';

export default defineType({
  name: 'accordionItem',
  title: 'Accordion Item',
  type: 'object',
  icon: BiChevronDownSquare,
  fields: [
    defineField({
      name: 'title',
      title: 'Accordion Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Field is required'),
    }),
    defineField({
      name: 'text',
      title: 'Accordion Text',
      type: 'minPT',
      validation: (Rule) => Rule.required().error('Field is required'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
