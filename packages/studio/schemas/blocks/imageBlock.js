import { BsCardImage } from 'react-icons/bs';

export default {
  name: 'imageBlock',
  title: 'Image Block',
  type: 'image',
  icon: BsCardImage,
  options: {
    storeOriginalFilename: true,
  },
  fields: [
    {
      name: 'idTag',
      title: 'Hash ID',
      type: 'string',
      description:
        'Add ID to the selected string. Please only use alphanumeric characters and hypen and do not start the string with a number.',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alt',
    },
    {
      name: 'caption',
      type: 'minPT',
      title: 'Caption',
    },
    {
      name: 'maxHeight',
      type: 'number',
      title: 'Image Max Height',
      description: `You can enter a height in pixels. If the image's native height is smaller it will be used instead.`,
    },
    {
      name: 'maxWidth',
      type: 'number',
      title: 'Image Max Width',
      description: `You can enter a width in pixels. If the image's native width is smaller it will be used instead.`,
    },
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'asset',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
        subtitle: 'Image Block',
      };
    },
  },
};
