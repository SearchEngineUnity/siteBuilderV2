import { defineType, defineField } from 'sanity';
import { TbFileDollar } from 'react-icons/tb';

export default defineType({
  title: 'Affiliate Link',
  name: 'affiliateLink',
  type: 'object',
  icon: TbFileDollar,
  fields: [
    defineField({
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['https'],
        }),
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
