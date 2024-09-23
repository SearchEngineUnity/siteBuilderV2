import { defineType, defineField, defineArrayMember } from 'sanity';
import { FiGrid } from 'react-icons/fi';

export default defineType({
  name: 'smartGridBlock',
  title: 'Smart Grid Block',
  type: 'object',
  icon: FiGrid,
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
      name: 'header',
      type: 'header',
      title: 'Header',
    }),
    defineField({
      name: 'tiles',
      title: 'Tile Set',
      type: 'array',
      of: [
        defineArrayMember({ type: 'smartGridPtTile' }),
        defineArrayMember({ type: 'illustration' }),
        defineArrayMember({ type: 'smartUnorderedList' }),
        defineArrayMember({ type: 'video' }),
        defineArrayMember({ type: 'btnBlockMui' }),
        defineArrayMember({ type: 'clickableImage' }),
      ],
      validation: (Rule) => Rule.min(1).error('Must contain at least 1 item'),
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'minPT',
    }),
    defineField({
      name: 'layout',
      title: 'Number of tiles in a row',
      description:
        'Please enter in the format of value/value/value/value for desktop/tablet/tablet-mobile/mobile. Accepted values are 1, 2, 3, 4, 6, 12.',
      type: 'string',
      initialValue: '3/2/2/1',
      fieldset: 'design',
      validation: (Rule) => [
        Rule.required().error('Field is required'),
        Rule.regex(/^(1|2|3|4|6|12)(\/(1|2|3|4|6|12))(\/(1|2|3|4|6|12))(\/(1|2|3|4|6|12))$/).error(
          'Accepted pattern is value/value/vale/value. Accepted values are 1, 2, 3, 4, 6, 12.',
        ),
      ],
    }),
    defineField({
      name: 'headerAlignment',
      title: 'Header Text Alignment',
      type: 'string',
      description: 'This only apply to the header above the LR blocks.',
      options: {
        list: ['left', 'center', 'right'],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'design',
      initialValue: 'left',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'footerAlignment',
      title: 'Footer Text Alignment',
      type: 'string',
      description: 'This only apply to the footer below the LR blocks.',
      options: {
        list: ['left', 'center', 'right'],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'design',
      initialValue: 'left',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
  ],
  preview: {
    select: {
      heading: 'header.heading',
      subheading: 'header.subheading',
    },
    prepare({ heading, subheading }) {
      return {
        title: heading || subheading || 'Smart Grid Block',
        subtitle: heading && subheading,
      };
    },
  },
});
