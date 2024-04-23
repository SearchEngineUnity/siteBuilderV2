import { ImBooks } from 'react-icons/im';

export default {
  name: 'latestXSection',
  title: 'Latest X Section',
  type: 'object',
  icon: ImBooks,
  fieldsets: [
    {
      name: 'presentation',
      title: 'Presentation Settings',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'idTag',
      title: 'ID',
      type: 'string',
      description:
        'Add ID to the selected string. Please only use alphanumeric characters and hypen and do not start the string with a number.',
    },
    {
      name: 'header',
      type: 'header',
      title: 'Header',
    },
    {
      name: 'subject',
      title: 'Subject',
      type: 'reference',
      to: [{ type: 'topic' }, { type: 'subcategory' }, { type: 'category' }],
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'minPT',
    },
    {
      name: 'count',
      type: 'number',
      title: 'Tiles Shown',
      fieldset: 'presentation',
      description: 'Number of tiles per section',
      initialValue: 4,
      validation: (Rule) => [
        Rule.required().error('Field is required'),
        Rule.integer().error('Value must be an integer'),
      ],
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
      fieldset: 'presentation',
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
      fieldset: 'presentation',
      initialValue: 'left',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'designSettings',
      title: 'Design Settings',
      type: 'reference',
      to: [{ type: 'sectionDesignSet' }],
      fieldset: 'presentation',
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
