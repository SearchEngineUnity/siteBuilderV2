import React from 'react';
import { MdVideocam } from 'react-icons/md';
import VideoPreview from '../components/previews/VideoPreview';

export default {
  type: 'object',
  name: 'video',
  title: 'Video',
  icon: MdVideocam,
  fields: [
    {
      name: 'idTag',
      title: 'Hash ID',
      type: 'string',
      description:
        'Add ID to the selected string. Please only use alphanumeric characters and hypen and do not start the string with a number.',
    },
    {
      type: 'string',
      name: 'videoId',
      title: 'Youtube ID',
    },
  ],
  preview: {
    select: {
      url: 'url',
      videoId: 'videoId',
    },
  },
  components: {
    preview: VideoPreview,
  },
};
