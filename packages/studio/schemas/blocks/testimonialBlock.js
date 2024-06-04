import { CgQuoteO } from 'react-icons/cg';

export default {
  name: 'testimonialBlock',
  title: 'Testimonial Block',
  type: 'object',
  icon: CgQuoteO,
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
      type: 'header',
      title: 'Header',
    },
    {
      name: 'testimonialList',
      type: 'array',
      title: 'Testimonial List',
      of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'minPT',
    },
    {
      name: 'tileOption',
      title: 'Testimonial Design Option',
      type: 'string',
      fieldset: 'design',
      options: {
        list: [
          { title: 'Testimonial with Image using Grid', value: '1' },
          { title: 'Plain Testimonial using Grid', value: '2' },
          { title: 'Company Testimonial using Slider', value: '3' },
          { title: 'Company Testimonial using Carousel', value: '4' },
        ],
      },
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'layout',
      title: 'Number of tiles in a row (only applies if using Grid)',
      description:
        'Please enter in the format of value/value/value/value for desktop/tablet/tablet-mobile/mobile. Accepted values are 1, 2, 3, 4, 6, 12.',
      type: 'string',
      initialValue: '3/2/2/1',
      fieldset: 'design',
      validation: (Rule) => [
        Rule.required().error('Field is required'),
        Rule.regex(/^(1|2|3|4|6|12)(\/(1|2|3|4|6|12))(\/(1|2|3|4|6|12))(\/(1|2|3|4|6|12))$/).error(
          'Accepted pattern is value/value/vale/value. Accepted values are 1, 2, 3, 4, 6, 12.',
        ),
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
  ],
  preview: {
    select: {
      heading: 'header.heading',
      subheading: 'header.subheading',
      tileOption: 'tileOption',
    },
    prepare({ heading, subheading, tileOption }) {
      switch (tileOption) {
        case '1':
          return {
            title: heading || subheading || 'Testimonial Grid',
            subtitle: 'display: Testimonial with Image',
          };
        case '2':
          return {
            title: heading || subheading || 'Testimonial Grid',
            subtitle: 'display: Plain Testimonial',
          };
        case '3':
          return {
            title: heading || subheading || 'Testimonial Slider',
            subtitle: 'display: Company Testimonial',
          };
        case '4':
          return {
            title: heading || subheading || 'Testimonial Carousel',
            subtitle: 'display: Company Testimonial',
          };
        default:
          return { title: 'Error' };
      }
    },
  },
};
