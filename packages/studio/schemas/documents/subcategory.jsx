import React from 'react';
import { MdAccountTree } from 'react-icons/md';

export default {
  name: 'subcategory',
  type: 'document',
  title: 'Subcategory',
  icon: MdAccountTree,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare({ name }) {
      return {
        title: name,
      };
    },
  },
};
