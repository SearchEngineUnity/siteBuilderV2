import { BsCardText } from 'react-icons/bs';

export default {
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
    {
      name: 'header',
      title: 'Header',
      type: 'header',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'maxPT',
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
      description: 'This will only apply to the header above the text.',
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
    },
    {
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
    },
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
};
