import { MdVideoLibrary } from 'react-icons/md';

export default {
  name: 'videoAsset',
  type: 'document',
  icon: MdVideoLibrary,
  title: 'Video Asset',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'This is for label purpose in studio only.',
    },
    {
      name: 'asset',
      title: 'Asset',
      type: 'file',
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
