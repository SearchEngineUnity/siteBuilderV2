import { defineType, defineField } from 'sanity';
import { SiAdobelightroom } from 'react-icons/si';
import * as blocks from '../blocks';

export default defineType({
  name: 'lrFlex',
  title: 'LR - Flex',
  type: 'object',
  icon: SiAdobelightroom,
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
      description: 'Please select exactly two blocks. The first item will appear left in layout.',
      of: [
        ...Object.values(blocks)
          .filter((block) => block.name !== 'heroBlock')
          .map(({ name, title }) => ({
            type: name,
            title,
          })),
        { type: 'video' },
      ],
      validation: (Rule) => Rule.length(2).error('Must contain two items'),
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'minPT',
    }),
    defineField({
      name: 'layout',
      type: 'string',
      title: 'Layout',
      fieldset: 'design',
      options: {
        list: [
          { title: '3:1', value: '9:3' },
          { title: '2:1', value: '8:4' },
          { title: '7:5', value: '7:5' },
          { title: '1:1', value: '6:6' },
          { title: '5:7', value: '5:7' },
          { title: '1:2', value: '4:8' },
          { title: '1:3', value: '3:9' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: '6:6',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'reverseOrder',
      type: 'boolean',
      title: 'Reverse order on stacking?',
      fieldset: 'design',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'blockAlignment',
      title: 'Block Alignment',
      type: 'string',
      description: 'This determines how the L and R blocks align to each other.',
      options: {
        list: [
          { title: 'Top', value: 'flex-start' },
          { title: 'Center', value: 'center' },
          { title: 'Bottom', value: 'flex-end' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'design',
      initialValue: 'center',
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
