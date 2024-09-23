import { defineType, defineField, defineArrayMember } from 'sanity';
import { FaTags } from 'react-icons/fa';

export default defineType({
  name: 'tagSetSection',
  title: 'Tag Set Section',
  type: 'object',
  icon: FaTags,
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
      name: 'tagSet',
      title: 'Tag Set',
      type: 'array',
      of: [
        defineArrayMember({ type: 'reference', to: [{ type: 'topic' }, { type: 'subcategory' }] }),
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'minPT',
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
