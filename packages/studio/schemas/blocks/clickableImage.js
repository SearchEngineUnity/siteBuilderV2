import { defineType, defineField, defineArrayMember } from 'sanity';
import { BsCardImage } from 'react-icons/bs';

export default defineType({
  name: 'clickableImage',
  title: 'Clickable Image',
  type: 'object',
  icon: BsCardImage,
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
    defineField({
      name: 'alignment',
      title: 'Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'flex-start' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'flex-end' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'design',
      initialValue: 'flex-start',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'borderRadius',
      title: 'Border Radius',
      type: 'string',
      fieldset: 'design',
      initialValue: '0px',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
  ],
  preview: {
    select: {
      title: 'image.alt',
      media: 'image.asset',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
        subtitle: 'Clickable Image',
      };
    },
  },
});
