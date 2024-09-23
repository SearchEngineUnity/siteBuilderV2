import { defineType, defineField } from 'sanity';
import { FaRegImages } from 'react-icons/fa';

export default defineType({
  name: 'companyLogo',
  title: 'Logo',
  type: 'document',
  icon: FaRegImages,
  fields: [
    defineField({
      name: 'seuID',
      title: 'seuID',
      type: 'string',
      validation: (Rule) => [
        Rule.required().error('Field is required'),
        // add a custom rule for isUnique
      ],
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => [
        Rule.required().error('Field is required'),
        // add a custom rule for isUnique
      ],
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'label',
      media: 'logo',
    },
  },
});
