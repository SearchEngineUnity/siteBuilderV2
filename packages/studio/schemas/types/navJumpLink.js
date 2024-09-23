// This is not currently in use

import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'navJumpLink',
  title: 'Nav Jump Link',
  type: 'object',
  fields: [
    defineField({
      title: 'Nav title',
      name: 'title',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      description: 'Please enter the ID of the section you would like to jump to',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'isButton',
      type: 'boolean',
      title: 'Apply Button Style?',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'link',
    },
  },
});
