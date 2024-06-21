import { MdAlternateEmail } from 'react-icons/md';

export default {
  name: 'socialInfo',
  title: 'Social Info',
  description: 'social media links',
  type: 'document',
  icon: MdAlternateEmail,
  fields: [
    {
      name: 'social',
      title: 'Social',
      type: 'string',
      options: {
        list: ['facebook', 'x', 'instagram', 'pinterest', 'linkedin', 'youtube'],
      },
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      title: 'social',
    },
    prepare({ title }) {
      switch (title) {
        case 'facebook':
          return { title: 'Facebook' };
        case 'x':
          return { title: 'X' };
        case 'instagram':
          return { title: 'Instagram' };
        case 'pinterest':
          return { title: 'Pinterest' };
        case 'linkedin':
          return { title: 'LinkedIn' };
        case 'youtube':
          return { title: 'Youtube' };
        case 'homestars':
          return { title: 'HomeStars' };
        default:
          return { title: 'Error' };
      }
    },
  },
};
