import { defineField, defineType } from 'sanity';
import { MdPlaylistAdd } from 'react-icons/md';

export default defineType({
  name: 'smartUnorderedListItem',
  type: 'object',
  title: 'List Item',
  icon: MdPlaylistAdd,
  fields: [
    defineField({
      name: 'content',
      type: 'noHeadingsPT',
    }),
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare({ content }) {
      switch (content[0]._type) {
        case 'block':
          return {
            title: content[0].children[0].text,
          };

        default:
          return {
            title: `This list item starts with '${content[0]._type}'`,
          };
      }
    },
  },
});
