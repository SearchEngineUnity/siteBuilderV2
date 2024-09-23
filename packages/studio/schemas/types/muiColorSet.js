import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'muiColorSet',
  title: 'Mui Color Set',
  type: 'object',
  fields: [
    defineField({
      name: 'light',
      title: 'Light',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    }),
    defineField({
      name: 'main',
      title: 'Main',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    }),
    defineField({
      name: 'dark',
      title: 'Dark',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    }),
    defineField({
      name: 'contrastText',
      title: 'Contrast Text',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    }),
  ],
});
