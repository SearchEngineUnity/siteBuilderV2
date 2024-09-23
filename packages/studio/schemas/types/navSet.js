import { defineType, defineField, defineArrayMember } from 'sanity';
import { FiNavigation2 } from 'react-icons/fi';

export default defineType({
  name: 'navSet',
  title: 'Navigation Menu',
  type: 'object',
  icon: FiNavigation2,
  fields: [
    defineField({
      name: 'menuGroup',
      title: 'Menu Group',
      type: 'array',
      description: 'Use Navigation Item for single link and Group for bundled links',
      of: [
        defineArrayMember({ type: 'navBrand' }),
        defineArrayMember({ type: 'navItem' }),
        defineArrayMember({ type: 'navGroup' }),
        defineArrayMember({ type: 'navPhone' }),
        defineArrayMember({ type: 'navClickableImage' }),
      ],
      validation: (Rule) => Rule.min(1).error('Must contain at least one item'),
    }),
  ],
  preview: {
    select: {
      menuGroup: 'menuGroup',
    },
    prepare({ menuGroup }) {
      return {
        title: 'Navigation Set',
        subtitle: `# of items in set: ${menuGroup.length}`,
      };
    },
  },
});
