import { defineType, defineField } from 'sanity';

export default defineType({
  title: 'Split Cell',
  name: 'splitCell',
  type: 'object',
  fields: [
    defineField({
      name: 'splitColHead',
      title: 'Split Column Heading',
      type: 'string',
    }),
    defineField({
      name: 'splitRowHead',
      title: 'Split Row Heading',
      type: 'string',
    }),
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: `Split Cell`,
      };
    },
  },
});
