import { defineType, defineField } from 'sanity';
import { MdWeb } from 'react-icons/md';
import * as sections from '../sections';

export default defineType({
  name: 'page',
  type: 'document',
  title: 'Structured Page',
  icon: MdWeb,
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
      name: 'sections',
      title: 'Sections',
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
      name: 'sections',
      type: 'array',
      fieldset: 'sections',
      title: 'Sections',
      of: [
        ...Object.values(sections)
          .filter(
            (section) =>
              section.name !== 'customTilesSection' &&
              section.name !== 'featuredTilesSection' &&
              section.name !== 'latestWithPaginationSection' &&
              section.name !== 'latestXSection' &&
              section.name !== 'tagSetSection',
          )
          .map(({ name, title }) => ({
            type: name,
            title,
          })),
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'This page URL will show as domain.com/slug',
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
      title: 'Canonical URL',
      type: 'url',
      fieldset: 'indexing',
      description: 'Use this field to replace self canonical URL.',
    }),
  ],
  preview: {
    select: {
      title: 'seuID',
      slug: 'slug.current',
      fbImg: 'facebookShareMetaPack.image',
      twitterImg: 'twitterShareMetaPack.image',
    },
    prepare({ title, slug, fbImg, twitterImg }) {
      const currentSlug = slug === '/' ? '/' : `/${slug}`;
      return {
        title,
        subtitle: currentSlug,
        media: fbImg || twitterImg,
      };
    },
  },
});
