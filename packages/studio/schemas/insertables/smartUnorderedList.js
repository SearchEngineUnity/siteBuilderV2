import { defineType, defineField, defineArrayMember } from 'sanity';
import { AiOutlineUnorderedList } from 'react-icons/ai';

export default defineType({
  name: 'smartUnorderedList',
  title: 'Smart Unordered List',
  type: 'object',
  icon: AiOutlineUnorderedList,
  fields: [
    defineField({
      name: 'listItems',
      title: 'List Items',
      type: 'array',
      of: [defineArrayMember({ type: 'smartUnorderedListItem' })],
      validation: (Rule) => Rule.min(1).error('Must contain at least one item'),
    }),
    defineField({
      name: 'listStyleImage',
      title: 'List Style Image',
      description: 'Image to be used instead of bullet.',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      type: 'type',
    },
    prepare({ type }) {
      return {
        title: 'Smart Unordered list',
        subtitle: type,
      };
    },
  },
});
