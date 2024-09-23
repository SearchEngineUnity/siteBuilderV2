import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'radio',
  type: 'object',
  title: 'Radio',
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
        title: title || 'Radio label',
        subtitle,
      };
    },
  },
});
