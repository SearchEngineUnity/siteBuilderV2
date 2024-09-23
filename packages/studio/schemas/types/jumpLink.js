import { defineType, defineField } from 'sanity';
import { MdLink } from 'react-icons/md';

export default defineType({
  name: 'jumpLink',
  type: 'object',
  title: 'Page Jump Link',
  icon: MdLink,
  fields: [
    defineField({
      name: 'hashId',
      title: 'Hash Id',
      type: 'string',
      description: 'Please enter the ID you would like to jump to. Do not include the # symbol.',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
  ],
  preview: {
    select: {
      id: 'hashId',
    },
    prepare({ id }) {
      return {
        title: `#${id}`,
      };
    },
  },
});
