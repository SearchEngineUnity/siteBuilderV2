import { defineType, defineField } from 'sanity';
import { MdVideoLibrary } from 'react-icons/md';

export default defineType({
  name: 'videoAsset',
  type: 'document',
  icon: MdVideoLibrary,
  title: 'Video Asset',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'This is for label purpose in studio only.',
    }),
    defineField({
      name: 'asset',
      title: 'Asset',
      type: 'file',
    }),
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
});
