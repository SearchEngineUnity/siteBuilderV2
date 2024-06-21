export default {
  name: 'socialAccount',
  title: 'Social Account',
  type: 'object',
  fields: [
    {
      name: 'social',
      title: 'Social',
      type: 'string',
      options: {
        list: ['linkedin', 'twitter', 'instagram', 'facebook', 'pinterest', 'tumblr', 'youtube'],
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
      subtitle: 'link',
    },
    prepare({ title, subtitle }) {
      return {
        title: title.charAt(0).toUpperCase() + title.slice(1),
        subtitle,
      };
    },
  },
};
