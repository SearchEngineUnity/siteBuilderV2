import React from 'react';
import { BsFillMenuButtonWideFill } from 'react-icons/bs';

export default {
  name: 'navGroup',
  type: 'object',
  title: 'Navigation Group',
  icon: BsFillMenuButtonWideFill,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
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
    },
    {
      title: 'Group',
      name: 'group',
      type: 'array',
      of: [{ type: 'navItem' }],
      validation: (Rule) => [Rule.min(1).error('Must contain at least oen item')],
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'nav.slug.current',
    },
    prepare({ title }) {
      return {
        title,
      };
    },
  },
};
