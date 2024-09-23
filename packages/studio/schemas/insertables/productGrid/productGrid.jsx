import { defineType, defineField, defineArrayMember } from 'sanity';
import { BsLayoutThreeColumns } from 'react-icons/bs';

export default defineType({
  name: 'productGrid',
  title: 'Product Grid',
  type: 'object',
  icon: BsLayoutThreeColumns,
  fields: [
    defineField({
      name: 'idTag',
      title: 'Hash ID',
      type: 'string',
      description:
        'Add ID to the selected string. Please only use alphanumeric characters and hypen and do not start the string with a number.',
    }),
    defineField({
      title: 'Page Jump Text',
      name: 'pageJumpText',
      type: 'string',
    }),
    defineField({
      title: 'Tile Set',
      name: 'tiles',
      type: 'array',
      of: [defineArrayMember({ type: 'productGridTile' })],
      validation: (Rule) =>
        Rule.custom((tiles) => {
          return !tiles || (tiles?.length >= 1 && tiles?.length <= 4)
            ? true
            : 'Number of tiles must be between 1 and 4.';
        }),
    }),
    defineField({
      title: 'Product Grid Design Option',
      name: 'design',
      type: 'string',
      options: {
        list: [{ title: 'Sites', value: 'sites' }],
      },
      validation: (Rule) => [Rule.required().error('Field is required')],
      initialValue: 'sites',
    }),
  ],
  preview: {
    select: {
      id: 'id',
    },
    prepare({ id }) {
      return {
        title: id || 'Product Grid',
      };
    },
  },
});
