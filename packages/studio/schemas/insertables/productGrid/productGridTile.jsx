import { defineType, defineField, defineArrayMember } from 'sanity';
import { BsFillCreditCard2FrontFill } from 'react-icons/bs';

export default defineType({
  name: 'productGridTile',
  title: 'Product Grid Tile',
  type: 'object',
  icon: BsFillCreditCard2FrontFill,
  fields: [
    defineField({
      title: 'Special Tag Text',
      name: 'specialTagText',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      title: 'Tile Image',
      name: 'tileImage',
      type: 'tileImage',
      validation: (Rule) => [
        Rule.custom((value) => (value?.asset ? true : 'An image is required')),
        Rule.custom((value) => (value?.alt ? true : 'An alt is required.')),
      ],
    }),
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'noHeadingsPT',
    }),
    defineField({
      title: 'Button Text',
      name: 'btnText',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'btnLink',
      title: 'Button Link',
      description: 'Only one link can be added.',
      type: 'array',
      of: [
        defineArrayMember({ type: 'internalLocal' }),
        defineArrayMember({ type: 'internalGlobal' }),
        defineArrayMember({ type: 'externalLink' }),
        defineArrayMember({ type: 'affiliateLink' }),
        defineArrayMember({ type: 'jumpLink' }),
      ],
      initialValue: 'affiliateLink',
      validation: (Rule) => [
        Rule.length(1).error('Must contain only one item'),
        Rule.required().error('Field is required'),
      ],
    }),
    defineField({
      title: 'Page Jump Link',
      name: 'jumpLink',
      type: 'jumpLink',
    }),
  ],
  preview: {
    select: {
      media: 'tileImage.image',
      alt: 'tileImage.alt',
      name: 'name',
    },
    prepare({ alt, name, media }) {
      return {
        title: alt || name,
        media,
      };
    },
  },
});
