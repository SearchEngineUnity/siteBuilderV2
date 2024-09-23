import { defineType, defineField } from 'sanity';
import { MdAccountTree } from 'react-icons/md';

export default defineType({
  name: 'category',
  type: 'document',
  title: 'Category',
  icon: MdAccountTree,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
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
