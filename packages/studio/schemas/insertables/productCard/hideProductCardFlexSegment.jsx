import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'hideProductCardFlexSegment',
  title: 'Hide Product Card Flex Segment',
  type: 'object',
  fieldsets: [
    {
      name: 'set',
      title:
        'Please check all screen range options you wish to hide this product card flex segment on.',
      options: {
        collapsible: false,
        collapsed: false,
        columns: 2,
      },
    },
  ],
  fields: [
    defineField({
      name: 'hideOnMobile',
      title: 'Mobile',
      options: {
        layout: 'checkbox',
      },
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
      fieldset: 'set',
    }),
    defineField({
      name: 'hideOnTabletMobile',
      title: 'Tablet Mobile ',
      options: {
        layout: 'checkbox',
      },
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
      fieldset: 'set',
    }),
    defineField({
      name: 'hideOnTablet',
      title: 'Tablet',
      options: {
        layout: 'checkbox',
      },
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
      fieldset: 'set',
    }),
    defineField({
      name: 'hideOnDesktop',
      title: 'Desktop',
      options: {
        layout: 'checkbox',
      },
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
      fieldset: 'set',
    }),
  ],
});
