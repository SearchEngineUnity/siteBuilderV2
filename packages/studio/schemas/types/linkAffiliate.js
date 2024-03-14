import { TbFileDollar } from 'react-icons/tb';

export default {
  title: 'Affiliate Link',
  name: 'affiliateLink',
  type: 'object',
  icon: TbFileDollar,
  fields: [
    {
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['https'],
        }),
    },
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
};
