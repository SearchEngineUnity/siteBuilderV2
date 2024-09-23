import { defineType, defineField } from 'sanity';
import { BsCardText } from 'react-icons/bs';

export default defineType({
  name: 'sectionBlock',
  title: 'Section Block',
  type: 'object',
  icon: BsCardText,
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
      title: 'Header',
      type: 'header',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'maxPT',
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
      description: 'This will only apply to the header above the text.',
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
      name: 'textAlignment',
      title: 'Text Alignment',
      type: 'string',
      description: 'This will only apply to the text.',
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
      description: 'This will only apply to the footer below the text.',
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
        title: heading || subheading || 'Section PT Block',
      };
    },
  },
});
