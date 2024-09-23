import { defineType, defineField } from 'sanity';
import { RiVideoLine } from 'react-icons/ri';

export default defineType({
  name: 'videoHero',
  title: 'Video - Hero',
  type: 'object',
  icon: RiVideoLine,
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
      name: 'heading',
      title: 'H1 Heading',
      description: 'Heading Color from Section Design will apply to this text.',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Image',
      type: 'tileImage',
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'btnBlockMui',
    }),
    defineField({
      name: 'video',
      title: 'Background Video',
      type: 'reference',
      to: [{ type: 'videoAsset' }],
    }),
    defineField({
      name: 'headingAlignment',
      title: 'H1 Alignment',
      type: 'string',
      description: 'This will only apply to the H1.',
      options: {
        list: ['left', 'center', 'right'],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'design',
      initialValue: 'left',
    }),
    defineField({
      name: 'imageAlignment',
      title: 'Image Alignment',
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
