import { defineType, defineField, defineArrayMember } from 'sanity';
import { FiNavigation2 } from 'react-icons/fi';

export default defineType({
  name: 'navMenu',
  title: 'Navigation Menu',
  type: 'document',
  icon: FiNavigation2,
  fields: [
    defineField({
      name: 'type',
      Title: 'Type',
      type: 'string',
      description: 'There should only ever be one published copy of each type',
      options: {
        list: [
          { title: 'Main Header', value: 'mainNav' },
          { title: 'Main Footer', value: 'mainFooter' },
        ],
      },
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'menuArray',
      title: 'Menu',
      type: 'array',
      of: [defineArrayMember({ type: 'navSet' })],
      validation: (Rule) => Rule.min(1).error('Must contain at least one item'),
    }),
  ],
  preview: {
    select: {
      type: 'type',
    },
    prepare({ type }) {
      switch (type) {
        case 'mainNav':
          return { title: 'Main Header' };
        case 'mainFooter':
          return { title: 'Main Footer' };
        default:
          return { title: 'Error: Type not found.' };
      }
    },
  },
});
