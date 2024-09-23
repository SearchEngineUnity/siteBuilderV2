import { defineType, defineField, defineArrayMember } from 'sanity';
import { FaRegImages } from 'react-icons/fa';

export default defineType({
  name: 'navBrand',
  type: 'object',
  title: 'Navigation Brand Group',
  icon: FaRegImages,
  fields: [
    defineField({
      name: 'brandGroup',
      title: 'Brand Group',
      type: 'array',
      of: [defineArrayMember({ type: 'brandItem' })],
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'alt',
      title: 'Alt for Brand Image',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Nav Brand Group',
      };
    },
  },
});
