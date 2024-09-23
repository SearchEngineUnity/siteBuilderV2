import { defineType, defineField } from 'sanity';
import { TbNewSection } from 'react-icons/tb';

export default defineType({
  title: 'Product Card Grid PT Tile',
  name: 'productCardGridPtTile',
  type: 'object',
  icon: TbNewSection,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      title: 'Title Heading Level',
      name: 'headingLevel',
      type: 'string',
      options: {
        list: [
          { title: 'H2', value: 'h2' },
          { title: 'H3', value: 'h3' },
          { title: 'H4', value: 'h4' },
          { title: 'Non-Heading', value: 'p' },
        ],
      },
      initialValue: 'p',
    }),
    defineField({
      name: 'content',
      title: 'Tile Content',
      type: 'noHeadingsPT',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Product Card Grid PT Tile',
      };
    },
  },
});
