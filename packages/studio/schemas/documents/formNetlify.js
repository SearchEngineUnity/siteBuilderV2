import { defineType, defineField, defineArrayMember } from 'sanity';
import { FaWpforms } from 'react-icons/fa';

export default defineType({
  title: 'Form Netlify',
  name: 'formNetlify',
  type: 'document',
  icon: FaWpforms,
  fields: [
    defineField({
      name: 'name',
      title: 'Form name',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'subject',
      title: 'Form Subject Line',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'formFields',
      title: 'Form Fields',
      type: 'array',
      of: [
        defineArrayMember({ type: 'textInput' }),
        defineArrayMember({ type: 'textarea' }),
        defineArrayMember({ type: 'select' }),
        defineArrayMember({ type: 'checkbox' }),
        defineArrayMember({ type: 'radio' }),
      ],
    }),
    defineField({
      name: 'submitBtn',
      title: 'Submit Button',
      type: 'submitBtn',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'thankYou',
      title: 'Thank You Message',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare({ title }) {
      return {
        title,
      };
    },
  },
});
