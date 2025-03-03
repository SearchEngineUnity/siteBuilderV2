import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'guideHero',
  title: 'Guide Hero',
  type: 'object',
  options: {
    collapsable: true,
  },
  fields: [
    defineField({
      name: 'layout',
      title: 'Hero Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Main Column', value: 'mainColumnHero' },
          { title: 'LR Hero', value: 'lrHero' },
          { title: 'Stack Hero', value: 'stackHero' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'mainColumnHero',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'feature',
      title: 'Hero Feature',
      type: 'string',
      options: {
        list: [
          { title: 'Featureless', value: 'featureless' },
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
          { title: 'Product Grid', value: 'productGrid' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'featureless',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'h1',
      title: 'H1 Text',
      type: 'string',
      validation: (Rule) => [Rule.required().error('H1 Text is required')],
    }),
    defineField({
      name: 'subtitle',
      title: 'Hero Subtitle Text',
      type: 'minPT',
    }),
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'imageBlock',
      hidden: ({ parent }) => {
        const { feature = '' } = parent || {};
        return feature !== 'image';
      },
    }),
    defineField({
      name: 'video',
      title: 'Hero Video',
      type: 'video',
      hidden: ({ parent }) => {
        const { feature = '' } = parent || {};
        return feature !== 'video';
      },
    }),
    defineField({
      name: 'productGrid',
      title: 'Hero Product Grid',
      type: 'productGrid',
      hidden: ({ parent }) => {
        const { feature = '', layout = '' } = parent || {};
        return feature !== 'productGrid' || layout !== 'stackHero';
      },
    }),
  ],
});
