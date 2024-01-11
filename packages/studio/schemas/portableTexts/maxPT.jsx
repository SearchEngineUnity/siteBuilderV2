import { FaHashtag } from 'react-icons/fa';
// import InlineImageRenderer from '../components/previews/InlineImageRenderer';
import AffiliateLinkRenderer from '../components/previews/AffiliateLinkRenderer';
import HashIdRenderer from '../components/previews/HashIdRenderer';
import ExternalLinkRenderer from '../components/previews/ExternalLinkRenderer';
import InternalLocalRenderer from '../components/previews/InternalLocalRenderer';
import InternalGlobalRenderer from '../components/previews/InternalGlobalRenderer';
import JumpLinkRenderer from '../components/previews/JumpLinkRenderer';

export default {
  title: 'Max PT',
  name: 'maxPT',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            name: 'internalLocal',
            type: 'internalLocal',
            title: 'Internal Local Link',
            components: {
              annotation: InternalLocalRenderer,
            },
          },
          {
            name: 'internalGlobal',
            type: 'internalGlobal',
            title: 'Internal Global Link',
            components: {
              annotation: InternalGlobalRenderer,
            },
          },
          {
            title: 'External Link',
            name: 'externalLink',
            type: 'externalLink',
            components: {
              annotation: ExternalLinkRenderer,
            },
          },
          {
            title: 'Affiliate Link',
            name: 'affiliateLink',
            type: 'affiliateLink',
            components: {
              annotation: AffiliateLinkRenderer,
            },
          },
          {
            title: 'Hash ID',
            name: 'hashId',
            type: 'object',
            icon: FaHashtag,
            components: {
              annotation: HashIdRenderer,
            },
            fields: [
              {
                title: 'ID',
                name: 'idTag',
                type: 'string',
                description:
                  'Add ID to the selected string. Please only use alphanumeric characters and hyphen and do no start the string with a number.',
              },
            ],
          },
          {
            name: 'jumpLink',
            type: 'jumpLink',
            title: 'Page Jump Link',
            components: {
              annotation: JumpLinkRenderer,
            },
          },
          // {
          //   title: 'Inline Image',
          //   name: 'inlineImage',
          //   type: 'image',
          //   options: {
          //     storeOriginalFilename: true,
          //   },
          //   fields: [
          //     {
          //       name: 'height',
          //       type: 'string',
          //       title: 'Image height',
          //       description: `You can enter a height % of vh. If the image's native height is smaller it will be used instead.`,
          //     },
          //   ],
          //   icon: MdImage,
          //   component: InlineImageRenderer,
          //   validation: (Rule) => [Rule.required().error('Missing Image')],
          // },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    { type: 'illustration' },
    { type: 'clickableImage' },
    { type: 'btnBlockMui' },
    { type: 'highlightBox' },
    { type: 'video' },
    { type: 'smartTable' },
    { type: 'smartGrid' },
    { type: 'smartOrderedList' },
    { type: 'smartUnorderedList' },
    { type: 'productCard' },
  ],
};
