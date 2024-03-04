export default {
  name: 'guideHero',
  title: 'Guide Hero',
  type: 'object',
  options: {
    collapsable: true,
  },
  fields: [
    {
      name: 'layout',
      title: 'Hero Layout',
      type: 'string',
      options: {
        list: [
          { title: 'LR Hero', value: 'lrHero' },
          { title: 'Stack Hero', value: 'stackHero' },
          { title: 'Main Column', value: 'mainColumnHero' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'lrHero',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'feature',
      title: 'Hero Feature',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
          { title: 'Product Grid', value: 'productGrid' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'image',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'h1',
      title: 'H1 Text',
      type: 'string',
      validation: (Rule) => [Rule.required().error('H1 Text is required')],
    },
    {
      name: 'subtitle',
      title: 'Hero Subtitle Text',
      type: 'minPT',
    },
    {
      name: 'image',
      title: 'Hero Image',
      type: 'imageBlock',
      hidden: ({ parent }) => {
        const { feature = '' } = parent || {};
        return feature !== 'image';
      },
    },
    {
      name: 'video',
      title: 'Hero Video',
      type: 'video',
      hidden: ({ parent }) => {
        const { feature = '' } = parent || {};
        return feature !== 'video';
      },
    },
    {
      name: 'productGrid',
      title: 'Hero Product Grid',
      type: 'productGrid',
      hidden: ({ parent }) => {
        const { feature = '', layout = '' } = parent || {};
        return feature !== 'productGrid' || layout !== 'stackHero';
      },
    },
  ],
};
