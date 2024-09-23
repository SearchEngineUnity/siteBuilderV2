import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'relatedContentSection',
  title: 'Related Guides',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'relatedItems',
      title: 'Guides',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'soloGuidePage' }] })],
      validation: (Rule) => Rule.max(4).error('Maximum 4 items'),
    }),
  ],
});
