import { SiElasticstack } from 'react-icons/si';

import * as blocks from '../blocks';

export default {
  name: 'stackHero',
  title: 'Stack - Hero',
  type: 'object',
  icon: SiElasticstack,
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
    {
      name: 'idTag',
      title: 'Hash ID',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
      description:
        'Add ID to the selected string. Please only use alphanumeric characters and hypen and do not start the string with a number.',
    },
    {
      name: 'header',
      type: 'heroHeader',
      title: 'Header',
    },
    {
      name: 'blocks',
      type: 'array',
      title: 'Blocks',
      description: 'The block(s) will appear in order.',
      of: [
        ...Object.values(blocks)
          .filter((block) => block.name !== 'sectionBlock')
          .map(({ name, title }) => ({
            type: name,
            title,
          })),
        { type: 'video' },
      ],
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'minPT',
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
      name: 'designSettings',
      title: 'Section Design Option',
      type: 'reference',
      to: [{ type: 'sectionDesignSet' }],
      fieldset: 'design',
    },
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
};
