import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'socialAccount',
  title: 'Social Account',
  type: 'object',
  fields: [
    defineField({
      name: 'social',
      title: 'Social',
      type: 'string',
      options: {
        list: ['linkedin', 'x', 'instagram', 'pinterest', 'tumblr', 'facebook', 'youtube'],
      },
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
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
});
