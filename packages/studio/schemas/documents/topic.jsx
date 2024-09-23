import { defineType, defineField } from 'sanity';
import { MdAccountTree } from 'react-icons/md';

export default defineType({
  name: 'topic',
  type: 'document',
  title: 'Topic',
  icon: MdAccountTree,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'subcategory',
      title: 'Subcategory',
      type: 'reference',
      to: [{ type: 'subcategory' }],
    }),
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare({ name }) {
      return {
        title: name,
      };
    },
  },
});
