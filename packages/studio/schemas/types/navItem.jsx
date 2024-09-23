/* eslint-disable no-plusplus */
import React from 'react';
import { defineType, defineField } from 'sanity';
import { FiLink2 } from 'react-icons/fi';

export default defineType({
  name: 'navItem',
  type: 'object',
  title: 'Navigation Item',
  icon: FiLink2,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: (
        <>
          Search{' '}
          <a
            href="https://fonts.google.com/icons?selected=Material+Icons"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>{' '}
          for an icon.
        </>
      ),
      hidden: ({ document, parent }) => {
        if (document.type === 'mainFooter') {
          return true;
        }
        for (let i = 0; i < document.menuArray.length; i++) {
          for (let j = 0; j < document.menuArray[i].menuGroup.length; j++) {
            if (document.menuArray[i].menuGroup[j]._key === parent._key) {
              return true;
            }
          }
        }
        return false;
      },
    }),
    defineField({
      name: 'nav',
      title: 'Navigate to',
      type: 'reference',
      to: [
        { type: 'page' },
        { type: 'soloGuidePage' },
        { type: 'flexListingPage' },
        { type: 'aToZPage' },
      ],
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'isButton',
      type: 'boolean',
      title: 'Is it in the Button Style?',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'nav.slug.current',
    },
    prepare({ title, slug }) {
      return {
        title,
        subtitle: slug === '/' ? `Links to root` : `Links to /${slug}`,
      };
    },
  },
});
