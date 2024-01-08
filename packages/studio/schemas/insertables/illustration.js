import { BsCardImage } from 'react-icons/bs';

export default {
  name: 'illustration',
  title: 'Image',
  type: 'image',
  icon: BsCardImage,
  options: {
    hotspot: true, // <-- Defaults to false
    storeOriginalFilename: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alt',
    },
    {
      name: 'hasFrame',
      type: 'boolean',
      title: 'Framed',
      initialValue: true,
    },
    {
      name: 'caption',
      type: 'minPT',
      title: 'Caption Text',
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
    {
      name: 'align',
      type: 'string',
      title: 'Horizontal Alignment',
      options: {
        list: [
          { title: 'Left', value: 'flex-start' },
          { title: 'Center', value: 'center' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'flex-start',
    },
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'asset',
    },
    prepare({ title, media }) {
      return {
        title: `Alt text: ${title}`,
        media,
      };
    },
  },
};
