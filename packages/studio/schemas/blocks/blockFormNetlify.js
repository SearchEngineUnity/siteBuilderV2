import { defineType, defineField } from 'sanity';
import { FaWpforms } from 'react-icons/fa';

export default defineType({
  title: 'Form Block',
  name: 'blockFormNetlify',
  type: 'object',
  icon: FaWpforms,
  fieldsets: [
    {
      name: 'design',
      title: 'Design Settings',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    defineField({
      name: 'seuID',
      title: 'SEU ID',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      title: 'Form Heading',
      type: 'string',
      description: 'This is the title of the form that will appear on top of the form fields.',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      title: 'Form Heading Level',
      name: 'headingLevel',
      type: 'string',
      options: {
        list: [
          { title: 'H2', value: 'h2' },
          { title: 'H3', value: 'h3' },
          { title: 'H4', value: 'h4' },
        ],
      },
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'formNetlify',
      title: 'Form Netlify',
      type: 'reference',
      to: [
        {
          type: 'formNetlify',
        },
      ],
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'titleAlignment',
      title: 'Title Alignment',
      type: 'string',
      description: 'This only apply to the form title.',
      options: {
        list: ['left', 'center', 'right'],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'design',
      initialValue: 'left',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'formStyle',
      title: 'Form Style',
      type: 'reference',
      to: [{ type: 'formStyle' }],
      fieldset: 'design',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
  ],
  preview: {
    select: {
      title: 'seuID',
      subtitle: 'formNetlify.name',
    },
  },
});
