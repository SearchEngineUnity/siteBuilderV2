import { ImBooks } from 'react-icons/im';

export default {
  name: 'featuredTileSet',
  title: 'Featured Tile Set',
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
      name: 'seuID',
      title: 'seuID',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'idTag',
      title: 'ID',
      type: 'string',
      description:
        'Add ID to the selected string. Please only use alphanumeric characters and hypen and do not start the string with a number.',
    },
    {
      name: 'featuredTileSet',
      title: 'Featured Tile Set',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'soloGuidePage' }] }],
    },
    {
      name: 'header',
      type: 'header',
      title: 'Header',
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'minPT',
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
      id: 'seuID',
    },
    prepare({ id, subtitle }) {
      return {
        subtitle,
        title: `ID: ${id}`,
      };
    },
  },
};
