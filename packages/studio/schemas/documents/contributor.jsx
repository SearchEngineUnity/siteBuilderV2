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
      type: 'text',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'string',
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
