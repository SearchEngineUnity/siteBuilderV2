import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'tileInfo',
  title: 'Tile - Information Content',
  type: 'object',
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
      name: 'tileImage',
      title: 'Tile Image',
      type: 'tileImage',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
    }),
    defineField({
      name: 'link',
      title: 'Tile link',
      type: 'array',
      of: [
        defineArrayMember({ type: 'internalLocal' }),
        defineArrayMember({ type: 'internalGlobal' }),
        defineArrayMember({ type: 'externalLink' }),
        defineArrayMember({ type: 'affiliateLink' }),
        defineArrayMember({ type: 'jumpLink' }),
      ],
    }),
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
});
