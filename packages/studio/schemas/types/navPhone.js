import { defineField, defineType } from 'sanity';
import { FiPhoneCall } from 'react-icons/fi';

export default defineType({
  title: 'Call us',
  name: 'navPhone',
  type: 'object',
  description: 'Only functional for main header and not main footer.',
  icon: FiPhoneCall,
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      title: 'Call us text',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'phoneNumber',
      type: 'string',
      title: 'Phone Number',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
  ],
  preview: {
    select: {
      name: 'text',
      number: 'phoneNumber',
    },
    prepare({ name, number }) {
      return {
        title: name,
        subtitle: `Dials ${number}`,
      };
    },
  },
});
