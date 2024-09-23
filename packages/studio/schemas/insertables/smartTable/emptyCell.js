import { defineType, defineField } from 'sanity';

export default defineType({
  title: 'Empty Cell',
  name: 'emptyCell',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      title: 'Cell Value',
      type: 'string',
      initialValue: 'Empty Cell',
      hidden: true,
    }),
  ],
});
