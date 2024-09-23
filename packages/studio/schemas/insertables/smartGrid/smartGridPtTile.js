import { defineType, defineField } from 'sanity';
import { TbNewSection } from 'react-icons/tb';

export default defineType({
  title: 'Smart Grid PT Tile',
  name: 'smartGridPtTile',
  type: 'object',
  icon: TbNewSection,
  fields: [
    defineField({
      name: 'content',
      title: 'Tile Content',
      type: 'maxPT',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Smart Grid PT Tile',
      };
    },
  },
});
