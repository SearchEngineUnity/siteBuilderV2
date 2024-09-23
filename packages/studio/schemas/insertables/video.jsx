import { defineType, defineField } from 'sanity';
import { MdVideocam } from 'react-icons/md';
import VideoPreview from '../components/previews/VideoPreview';

export default defineType({
  type: 'object',
  name: 'video',
  title: 'Video',
  icon: MdVideocam,
  components: {
    preview: VideoPreview,
  },
  fields: [
    defineField({
      name: 'idTag',
      title: 'Hash ID',
      type: 'string',
      description:
        'Add ID to the selected string. Please only use alphanumeric characters and hypen and do not start the string with a number.',
    }),
    defineField({
      type: 'string',
      name: 'videoId',
      title: 'Youtube ID',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
  ],
  preview: {
    select: {
      url: 'url',
      videoId: 'videoId',
    },
  },
});
