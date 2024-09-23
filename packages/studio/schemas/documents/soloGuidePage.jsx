import { defineType, defineField, defineArrayMember } from 'sanity';
import { RiPagesLine } from 'react-icons/ri';

export default defineType({
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
      name: 'sortOrderDate',
      title: 'Sort Order Date',
      type: 'date',
      fieldset: 'general',
    }),
    defineField({
      name: 'displayDate',
      title: 'Display Date',
      type: 'datetime',
      fieldset: 'general',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'createdDate',
      type: 'datetime',
      title: 'Created Date',
      fieldset: 'general',
      validation: (Rule) => [Rule.required().error('Field is required')],
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'contributor' }],
      fieldset: 'general',
    }),
    defineField({
      name: 'editor',
      title: 'Editor',
      type: 'reference',
      to: [{ type: 'contributor' }],
      fieldset: 'general',
    }),
    defineField({
      name: 'primarySubcategory',
      title: 'Primary Subcategory',
      type: 'reference',
      to: [{ type: 'subcategory' }],
      fieldset: 'general',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'secondarySubcategory',
      title: 'Secondary Subcategory',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'subcategory' }] })],
      fieldset: 'general',
    }),
    defineField({
      name: 'topicTags',
      title: 'Topic Tags',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'topic' }] })],
      fieldset: 'general',
    }),
    defineField({
      name: 'includeDisclaimer',
      title: 'Include Disclaimer',
      type: 'boolean',
      initialValue: true,
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
      name: 'tileTitle',
      title: 'Tile Title',
      type: 'string',
      fieldset: 'tile',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'tileImage',
      title: 'Tile Image',
      type: 'tileImage',
      fieldset: 'tile',
      validation: (Rule) => Rule.custom((value) => (value?.asset ? true : 'An image is required')),
    }),
    defineField({
      name: 'tileText',
      title: 'Tile Text',
      type: 'text',
      fieldset: 'tile',
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'guideHero',
    }),
    defineField({
      name: 'toc',
      title: 'Table of Contents',
      type: 'array',
      of: [defineArrayMember({ type: 'tocLink' })],
      description: 'The order should match the in content appearance.',
      fieldset: 'mainContent',
    }),
    defineField({
      name: 'guideBody',
      type: 'maxPT',
      title: 'Guide Content Body',
      fieldset: 'mainContent',
      // validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'relatedContentSection',
      title: 'Best Related Guides',
      type: 'relatedContentSection',
      fieldset: 'mainContent',
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
