import React from 'react';
import { MdAccountTree } from 'react-icons/md';

export default {
  name: 'topic',
  type: 'document',
  title: 'SubcategTpoicory',
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
    {
      name: 'subcategory',
      title: 'Subcategory',
      type: 'reference',
      to: [{ type: 'subcategory' }],
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
