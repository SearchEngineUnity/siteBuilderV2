import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'aToZItem',
  title: 'A to Z Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Item Title',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'link',
      title: 'Item Link',
      type: 'url',
      description: "Internal Links must start with '/' and external links must start with https",
      validation: (Rule) => [
        Rule.uri({
          allowRelative: true,
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
