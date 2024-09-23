import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'muiBtnColorSet',
  title: 'Mui Btn Color Set',
  type: 'object',
  fields: [
    defineField({
      name: 'main',
      title: 'Main',
      description:
        'This is the background color for a filled button. This is the text color and border color for a outlined button. This is the text color for the text only button.',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'dark',
      title: 'Dark',
      description:
        'This is the on hover color for all filled button including the ones using image background.',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'contrastText',
      title: 'Contrast Text',
      description: 'This is the text color and the on focus overlay color for a filled button.',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
  ],
});
