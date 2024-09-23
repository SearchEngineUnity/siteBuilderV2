import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'textarea',
  type: 'object',
  title: 'Textarea',
  fields: [
    defineField({
      name: 'id',
      type: 'string',
      title: 'Id Tag',
      description: 'Give one string to identify this field',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'label',
      type: 'string',
      title: 'Label',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'helperText',
      title: 'Helper Text',
      type: 'string',
    }),
    defineField({
      name: 'placeholderText',
      title: 'Placeholder Text',
      type: 'string',
    }),
    defineField({
      name: 'rows',
      title: 'Number of rows of text',
      type: 'number',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'required',
      title: 'Is this information required?',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: '_type',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Textarea label',
        subtitle,
      };
    },
  },
});
