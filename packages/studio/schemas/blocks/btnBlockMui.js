import { defineType, defineField, defineArrayMember } from 'sanity';
import { BsBootstrap } from 'react-icons/bs';

export default defineType({
  name: 'btnBlockMui',
  title: 'Button',
  type: 'object',
  icon: BsBootstrap,
  fieldsets: [
    {
      name: 'design',
      title: 'Design Settings',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    defineField({
      name: 'idTag',
      title: 'Button ID',
      type: 'string',
      description:
        'Add ID to the button. Please only use alphanumeric characters and hypen and do no start the string with a number.',
    }),
    defineField({
      name: 'text',
      title: 'Button Text',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
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
      name: 'btnAlignment',
      title: 'Button Alignment',
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
      name: 'design', // fix to btnDesign for V2
      title: 'Button Design Option',
      type: 'reference',
      to: [{ type: 'btnDesignMui' }],
      fieldset: 'design',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
  ],
  preview: {
    select: {
      text: 'text',
      id: 'idTag',
    },
    prepare({ text, id }) {
      return {
        title: text,
        subtitle: `ID: ${id}`,
      };
    },
  },
});
