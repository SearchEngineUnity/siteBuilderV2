import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'paddingSet',
  title: 'Padding Set',
  type: 'object',
  fields: [
    defineField({
      name: 'desktopPadding',
      title: 'Desktop Padding',
      type: 'string',
    }),
    defineField({
      name: 'tabletPadding',
      title: 'Tablet Padding',
      type: 'string',
    }),
    defineField({
      name: 'tabletMobilePadding',
      title: 'Tablet-Mobile Padding',
      type: 'string',
    }),
    defineField({
      name: 'mobilePadding',
      title: 'Mobile Padding',
      type: 'string',
    }),
  ],
});
