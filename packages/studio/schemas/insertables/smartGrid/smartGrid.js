import { defineType, defineField, defineArrayMember } from 'sanity';
import { FiGrid } from 'react-icons/fi';

export default defineType({
  name: 'smartGrid',
  title: 'Smart Grid',
  type: 'object',
  icon: FiGrid,
  fields: [
    defineField({
      name: 'tiles',
      title: 'Tile Set',
      type: 'array',
      of: [
        defineArrayMember({ type: 'smartGridPtTile' }),
        defineArrayMember({ type: 'productCardGridPtTile' }),
        defineArrayMember({ type: 'illustration' }),
        defineArrayMember({ type: 'clickableImage' }),
        defineArrayMember({ type: 'btnBlockMui' }),
        defineArrayMember({ type: 'video' }),
        defineArrayMember({ type: 'smartOrderedList' }),
        defineArrayMember({ type: 'smartUnorderedList' }),
      ],
      validation: (Rule) => Rule.min(1).error('Must contain at least 1 item'),
    }),
    defineField({
      name: 'layout',
      title: 'Number of tiles in a row',
      description:
        'Please enter in the format of value/value/value/value for desktop/tablet/tablet-mobile/mobile. Accepted values are 1, 2, 3, 4, 6, 12.',
      type: 'string',
      initialValue: '3/2/2/1',
      validation: (Rule) => [
        Rule.required().error('Field is required'),
        Rule.regex(/^(1|2|3|4|6|12)(\/(1|2|3|4|6|12))(\/(1|2|3|4|6|12))(\/(1|2|3|4|6|12))$/).error(
          'Accepted pattern is value/value/vale/value. Accepted values are 1, 2, 3, 4, 6, 12.',
        ),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Smart Grid',
      };
    },
  },
});
