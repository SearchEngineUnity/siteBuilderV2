import { RiPagesLine } from 'react-icons/ri';

export default {
  name: 'soloGuidePage',
  type: 'document',
  title: 'Solo Guide Page',
  icon: RiPagesLine,
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
      name: 'tile',
      title: 'Listing Tile Fields',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'mainContent',
      title: 'Main Content',
      options: {
        collapsible: true,
        collapsed: false,
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
    {
      name: 'seuID',
      title: 'ID',
      type: 'string',
      fieldset: 'general',
      validation: (Rule) => [
        Rule.required().error('Field is required'),
        // add a custom rule for isUnique
      ],
    },
    {
      name: 'sortOrderDate',
      title: 'Sort Order Date',
      type: 'date',
      fieldset: 'general',
    },
    {
      name: 'displayDate',
      title: 'Display Date',
      type: 'datetime',
      fieldset: 'general',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'createdDate',
      type: 'datetime',
      title: 'Created Date',
      fieldset: 'general',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'pageTitle',
      type: 'string',
      title: 'Page Title',
      fieldset: 'general',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      fieldset: 'general',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'contributor' }],
      fieldset: 'general',
    },
    {
      name: 'editor',
      title: 'Editor',
      type: 'reference',
      to: [{ type: 'contributor' }],
      fieldset: 'general',
    },
    {
      name: 'primarySubcategory',
      title: 'Primary Subcategory',
      type: 'reference',
      to: [{ type: 'subcategory' }],
      fieldset: 'general',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'secondarySubcategory',
      title: 'Secondary Subcategory',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'subcategory' }] }],
      fieldset: 'general',
    },
    {
      name: 'topicTags',
      title: 'Topic Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topic' }] }],
      fieldset: 'general',
    },
    {
      name: 'fbShareMetaPack',
      title: 'Facebook Open Graph Meta Pack',
      type: 'fbShareMetaPack',
      fieldset: 'social',
    },
    {
      name: 'twitterShareMetaPack',
      title: 'Twitter Open Graph Meta Pack',
      type: 'twitterShareMetaPack',
      fieldset: 'social',
    },
    {
      name: 'tileTitle',
      title: 'Tile Title',
      type: 'string',
      fieldset: 'tile',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'tileImage',
      title: 'Tile Image',
      type: 'tileImage',
      fieldset: 'tile',
      validation: (Rule) => Rule.custom((value) => (value?.asset ? true : 'An image is required')),
    },
    {
      name: 'tileText',
      title: 'Tile Text',
      type: 'text',
      fieldset: 'tile',
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'guideHero',
    },
    {
      name: 'toc',
      title: 'Table of Contents',
      type: 'array',
      of: [{ type: 'tocLink' }],
      description: 'The order should match the in content appearance.',
      fieldset: 'mainContent',
    },
    {
      name: 'guideBody',
      type: 'maxPT',
      title: 'Guide Content Body',
      fieldset: 'mainContent',
      // validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'includeDisclaimer',
      title: 'Include Disclaimer',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Please add the full path after domain.com/ as slug.',
      fieldset: 'indexing',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'noindex',
      title: 'Noindex',
      type: 'boolean',
      fieldset: 'indexing',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'nofollow',
      title: 'Nofollow',
      type: 'boolean',
      fieldset: 'indexing',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'canonical',
      title: 'Canonical Link Setting',
      type: 'url',
      fieldset: 'indexing',
      description: 'Fill in to replace default self canonical URL.',
    },
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
};
