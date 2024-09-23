import { defineType, defineField } from 'sanity';
import { MdBusiness } from 'react-icons/md';

export default defineType({
  name: 'contactInfo',
  title: 'Contact Info',
  type: 'document',
  icon: MdBusiness,
  fields: [
    defineField({
      name: 'name',
      title: 'Company name',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'phone',
      title: 'Contact Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'address1',
      title: 'Address Line 1',
      type: 'string',
    }),
    defineField({
      name: 'address2',
      title: 'Address Line 2',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'provinceState',
      title: 'Province / State',
      type: 'string',
    }),
    defineField({
      name: 'mailCode',
      title: 'Postal Code / ZIP Code',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),
    defineField({
      name: 'homePage',
      title: 'Company Home Page',
      description: 'This is the link that will be used for all company logos.',
      type: 'url',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: `Contact Info`,
      };
    },
  },
});
