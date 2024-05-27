import React from 'react';
import { MdContactPage } from 'react-icons/md';

export default {
  name: 'contributor',
  type: 'document',
  title: 'Contributor',
  icon: MdContactPage,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'minPT',
    },
    {
      name: 'linkedIn',
      title: 'LinkedIn URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['https'],
        }),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
  ],
  preview: {
    select: {
      name: 'name',
      photo: 'photo.asset',
    },
    prepare({ name, photo }) {
      return {
        title: name,
        media: photo,
      };
    },
  },
};
