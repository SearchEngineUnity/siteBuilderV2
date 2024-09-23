import { defineType, defineField } from 'sanity';
import { ImBooks } from 'react-icons/im';

export default defineType({
  name: 'latestXSection',
  title: 'Latest X Section',
  type: 'object',
  icon: ImBooks,
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
      description:
        'Add ID to the selected string. Please only use alphanumeric characters and hypen and do not start the string with a number.',
    }),
    defineField({
      name: 'header',
      type: 'header',
      title: 'Header',
    }),
    defineField({
      name: 'subject',
      title: 'Subject',
      type: 'reference',
      to: [{ type: 'topic' }, { type: 'subcategory' }, { type: 'category' }],
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'minPT',
    }),
    defineField({
      name: 'count',
      type: 'number',
      title: 'Tiles Shown',
      fieldset: 'design',
      description: 'Number of tiles per section',
      initialValue: 4,
      validation: (Rule) => [
        Rule.required().error('Field is required'),
        Rule.integer().error('Value must be an integer'),
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
