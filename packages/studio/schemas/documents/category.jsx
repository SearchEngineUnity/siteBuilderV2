import React from 'react';
import { MdAccountTree } from 'react-icons/md';

export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  icon: MdAccountTree,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'listingPage',
      title: 'Listing Page',
      type: 'reference',
      to: [{ type: 'flexListingPage' }],
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
