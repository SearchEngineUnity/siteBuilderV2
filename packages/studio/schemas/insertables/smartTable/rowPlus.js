import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  title: 'Row',
  name: 'rowPlus',
  type: 'object',
  fields: [
    defineField({
      name: 'cells',
      type: 'array',
      of: [
        defineArrayMember({ type: 'tablePtCell' }),
        defineArrayMember({ type: 'emptyCell' }),
        defineArrayMember({ type: 'splitCell' }),
        defineArrayMember({ type: 'illustration' }),
        defineArrayMember({ type: 'clickableImage' }),
        defineArrayMember({ type: 'btnBlockMui' }),
        defineArrayMember({ type: 'video' }),
        defineArrayMember({ type: 'smartOrderedList' }),
        defineArrayMember({ type: 'smartUnorderedList' }),
      ],
    }),
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: `row`,
      };
    },
  },
});
