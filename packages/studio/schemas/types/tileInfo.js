export default {
  name: 'tileInfo',
  title: 'Tile - Information Content',
  type: 'object',
  fieldsets: [
    {
      name: 'presentation',
      title: 'Presentation Settings',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'tileImage',
      title: 'Tile Image',
      type: 'tileImage',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
    {
      name: 'link',
      title: 'Tile link',
      type: 'array',
      of: [
        { type: 'internalLocal' },
        { type: 'internalGlobal' },
        { type: 'externalLink' },
        { type: 'affiliateLink' },
        { type: 'jumpLink' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'tileImage.asset',
    },
    prepare({ media, title }) {
      return {
        title: title || `tile`,
        media,
      };
    },
  },
};
