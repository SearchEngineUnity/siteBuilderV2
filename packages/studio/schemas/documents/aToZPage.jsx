import { defineType, defineField, defineArrayMember } from 'sanity';
import { TiSortAlphabetically } from 'react-icons/ti';

export default defineType({
  name: 'aToZPage',
  type: 'document',
  title: 'A to Z Page',
  icon: TiSortAlphabetically,
  fieldsets: [
    {
      name: 'general',
      title: 'SEO and General Fields',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'social',
      title: 'Social Sharing',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'indexing',
      title: 'Indexing',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    defineField({
      name: 'seuID',
      title: 'ID',
      type: 'string',
      fieldset: 'general',
      validation: (Rule) => [
        Rule.required().error('Field is required'),
        // add a custom rule for isUnique
      ],
    }),
    defineField({
      name: 'pageTitle',
      type: 'string',
      title: 'Page Title',
      fieldset: 'general',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      fieldset: 'general',
    }),
    defineField({
      name: 'fbShareMetaPack',
      title: 'Facebook Open Graph Meta Pack',
      type: 'fbShareMetaPack',
      fieldset: 'social',
    }),
    defineField({
      name: 'twitterShareMetaPack',
      title: 'Twitter Open Graph Meta Pack',
      type: 'twitterShareMetaPack',
      fieldset: 'social',
    }),
    defineField({
      name: 'h1',
      title: 'H1',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'instruction',
      title: 'Instruction',
      type: 'string',
    }),
    defineField({
      name: 'itemList',
      title: 'Item List',
      type: 'array',
      of: [defineArrayMember({ type: 'aToZItem' })],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Please add the full path after domain.com/ as slug.',
      fieldset: 'indexing',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'noindex',
      title: 'Noindex',
      type: 'boolean',
      fieldset: 'indexing',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'nofollow',
      title: 'Nofollow',
      type: 'boolean',
      fieldset: 'indexing',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'canonical',
      title: 'Canonical Link Setting',
      type: 'url',
      fieldset: 'indexing',
      description: 'Fill in to replace default self canonical URL.',
    }),
  ],
  preview: {
    select: {
      title: 'seuID',
      slug: 'slug.current',
      media: 'tileImage',
      fbImg: 'facebookShareMetaPack.image',
      twitterImg: 'twitterShareMetaPack.image',
    },
    prepare({ title, slug, media, fbImg, twitterImg }) {
      return {
        title,
        subtitle: `/${slug}`,
        media: media || fbImg || twitterImg,
      };
    },
  },
});
