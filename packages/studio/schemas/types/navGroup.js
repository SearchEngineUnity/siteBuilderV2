import { defineType, defineField, defineArrayMember } from 'sanity';
import { BsFillMenuButtonWideFill } from 'react-icons/bs';

export default defineType({
  name: 'navGroup',
  type: 'object',
  title: 'Navigation Group',
  icon: BsFillMenuButtonWideFill,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'nav',
      title: 'Navigate to',
      type: 'reference',
      to: [
        { type: 'page' },
        { type: 'soloGuidePage' },
        { type: 'flexListingPage' },
        { type: 'aToZPage' },
      ],
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      title: 'Group',
      name: 'group',
      type: 'array',
      of: [defineArrayMember({ type: 'navItem' })],
      validation: (Rule) => [Rule.min(1).error('Must contain at least one item')],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'nav.slug.current',
    },
    prepare({ title }) {
      return {
        title,
      };
    },
  },
});
