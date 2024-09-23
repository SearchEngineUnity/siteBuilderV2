import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'heroHeader',
  title: 'Hero Header',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'H1 Heading',
      description: 'Heading Color from Section Design will apply to this text.',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'H2 Heading',
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
