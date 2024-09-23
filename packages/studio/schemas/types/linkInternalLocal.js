import { defineType, defineField } from 'sanity';
import { FaLink } from 'react-icons/fa';

export default defineType({
  title: 'Internal Local Link',
  name: 'internalLocal',
  type: 'object',
  icon: FaLink,
  fields: [
    defineField({
      name: 'href',
      type: 'string',
      title: 'Path',
      description: 'Please start with "/".',
      // also need validation for rules must start with "/"
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      title: 'Open in new tab?',
      name: 'newTab',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
  ],
  preview: {
    select: {
      link: 'href',
    },
    prepare({ link }) {
      return {
        title: link,
      };
    },
  },
});
