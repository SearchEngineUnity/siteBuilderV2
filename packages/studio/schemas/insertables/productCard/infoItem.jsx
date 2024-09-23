import { defineType, defineField } from 'sanity';
import { BsInfoSquare } from 'react-icons/bs';

export default defineType({
  title: 'Info Item',
  name: 'infoItem',
  type: 'object',
  icon: BsInfoSquare,
  fields: [
    defineField({
      name: 'label',
      title: 'Info Item Label',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Info Item Text',
      type: 'minPT',
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'text',
    },
  },
});
