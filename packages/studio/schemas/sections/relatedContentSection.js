export default {
  name: 'relatedContentSection',
  title: 'Related Guides',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'relatedItems',
      title: 'Guides',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'soloGuidePage' }] }],
      validation: (Rule) => Rule.max(4).error('Maximum 4 items'),
    },
  ],
};
