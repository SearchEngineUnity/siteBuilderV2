import { defineType, defineField } from 'sanity';
import { BsChatQuote } from 'react-icons/bs';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: BsChatQuote,
  fields: [
    defineField({
      name: 'text',
      title: 'Testimonial Text',
      type: 'text',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'tileImage',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      media: 'image.asset',
      company: 'company',
      role: 'role',
    },
    prepare({ name, media }) {
      return {
        title: name,
        media,
      };
    },
  },
});
