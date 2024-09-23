import { defineType, defineField } from 'sanity';
import { BsViewStacked } from 'react-icons/bs';

import * as blocks from '../blocks';

export default defineType({
  name: 'stackFlex',
  title: 'Stack - Flex',
  type: 'object',
  icon: BsViewStacked,
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
      name: 'idTag',
      title: 'Hash ID',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
      description:
        'Add ID to the selected string. Please only use alphanumeric characters and hypen and do not start the string with a number.',
    }),
    defineField({
      name: 'header',
      type: 'header',
      title: 'Header',
    }),
    defineField({
      name: 'blocks',
      type: 'array',
      title: 'Blocks',
      description: 'Please pick a minimum of one. The block(s) will appear in order.',
      of: [
        ...Object.values(blocks)
          .filter((block) => block.name !== 'heroBlock')
          .map(({ name, title }) => ({
            type: name,
            title,
          })),
        { type: 'video' },
      ],
      validation: (Rule) => Rule.min(1).error('Minimum 1 block required'),
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'minPT',
    }),
    defineField({
      name: 'blockWidth',
      type: 'string',
      title: 'Block Width',
      fieldset: 'design',
      description: 'This determines the width of the blocks in this section.',
      options: {
        list: [
          { title: 'full width', value: '12' },
          { title: '10/12', value: '10' },
          { title: '8/12', value: '8' },
          { title: '6/12', value: '6' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: '12',
      validation: (Rule) => [Rule.required().error('Field is required')],
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
    defineField({
      name: 'designSettings',
      title: 'Section Design Option',
      type: 'reference',
      to: [{ type: 'sectionDesignSet' }],
      fieldset: 'design',
    }),
  ],
  preview: {
    select: {
      subtitle: '_type',
      id: 'idTag',
    },
    prepare({ id, subtitle }) {
      return {
        subtitle,
        title: `ID: ${id}`,
      };
    },
  },
});
