import { defineType, defineField } from 'sanity';
import { GiLinkedRings } from 'react-icons/gi';

export default defineType({
  title: 'Internal Global Link',
  name: 'internalGlobal',
  type: 'object',
  icon: GiLinkedRings,
  fields: [
    defineField({
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['https', 'http'],
        }),
    }),
    defineField({
      title: 'Open in new tab?',
      name: 'newTab',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
  ],
  preview: {
    select: {
      link: 'href',
    },
    prepare({ link }) {
      return {
        title: link,
      };
    },
  },
});
