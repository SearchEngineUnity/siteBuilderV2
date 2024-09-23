import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'hlbColorSet',
  title: 'Highlight Box Color Set',
  type: 'object',
  fields: [
    defineField({
      name: 'borderColor',
      title: 'Border Color',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    }),
    defineField({
      name: 'bgColor',
      title: 'Background Color',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    }),
    defineField({
      name: 'iconColor',
      title: 'Icon Color',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    }),
    defineField({
      name: 'linkColor',
      title: 'Link Color',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    }),
  ],
});
