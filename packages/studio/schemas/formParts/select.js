import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'select',
  type: 'object',
  title: 'Select',
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
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [defineArrayMember({ type: 'option' })],
      validation: (Rule) => Rule.min(2).error('Must contain at least two items'),
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
        title: title || 'Select label',
        subtitle,
      };
    },
  },
});
