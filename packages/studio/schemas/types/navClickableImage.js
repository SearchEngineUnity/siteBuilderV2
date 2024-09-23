import { defineType, defineField, defineArrayMember } from 'sanity';
import { BsCardImage } from 'react-icons/bs';

export default defineType({
  title: 'Clickable Image',
  name: 'navClickableImage',
  type: 'object',
  description: 'Only functional for main header and not main footer.',
  icon: BsCardImage,
  fields: [
    defineField({
      name: 'image',
      type: 'clickableImageImage',
      title: 'Image',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      description: 'Only one link can be added.',
      type: 'array',
      of: [
        defineArrayMember({ type: 'internalLocal' }),
        defineArrayMember({ type: 'internalGlobal' }),
        defineArrayMember({ type: 'externalLink' }),
        defineArrayMember({ type: 'affiliateLink' }),
        defineArrayMember({ type: 'jumpLink' }),
      ],
      validation: (Rule) => [
        Rule.length(1).error('Must contain only one item'),
        Rule.required().error('Field is required'),
      ],
    }),
  ],
  preview: {
    select: {
      alt: 'image.alt',
      media: 'image.asset',
    },
    prepare({ alt, media }) {
      return {
        title: alt,
        media,
      };
    },
  },
});
