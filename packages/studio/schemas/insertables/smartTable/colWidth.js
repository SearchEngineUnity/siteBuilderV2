import { defineType, defineField } from 'sanity';
import { AiOutlineColumnWidth } from 'react-icons/ai';

export default defineType({
  name: 'colWidth',
  type: 'object',
  title: 'Minimum Column Width',
  icon: AiOutlineColumnWidth,
  fields: [
    defineField({
      name: 'width',
      type: 'string',
      title: 'Width',
      description: 'Must end in "px" (ex. 200px).',
    }),
  ],
  preview: {
    select: {
      title: 'width',
    },
  },
});
