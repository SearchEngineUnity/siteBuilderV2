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
      title: 'ID',
      type: 'string',
      description:
        'Add ID to the selected string. Please only use alphanumeric characters and hypen and do not start the string with a number.',
    },
    {
      type: 'url',
      name: 'url',
      title: 'URL',
    },
    {
      type: 'string',
      name: 'videoId',
      title: 'Video Id',
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
