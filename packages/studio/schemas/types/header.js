import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'H2 Heading',
      description: 'Heading Color from Section Design will apply to this text.',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'H3 Heading',
      description: 'Subheading Color from Section Design will apply to this text.',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'minPT',
    }),
  ],
});
