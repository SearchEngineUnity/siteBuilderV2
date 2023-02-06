import { FaExternalLinkAlt, FaLink } from 'react-icons/fa';
import { GiLinkedRings } from 'react-icons/gi';
import { MdLink } from 'react-icons/md';
import { TbFileDollar } from 'react-icons/tb';
import AffiliateLinkRenderer from '../components/previews/AffiliateLinkRenderer';
import ExternalLinkRenderer from '../components/previews/ExternalLinkRenderer';
import InternalLocalRenderer from '../components/previews/InternalLocalRenderer';
import InternalGlobalRenderer from '../components/previews/InternalGlobalRenderer';
import JumpLinkRenderer from '../components/previews/JumpLinkRenderer';

export default {
  title: 'Highlight Box Text PT',
  name: 'highlightBoxPT',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
        ],
        annotations: [
          {
            name: 'internalLocal',
            type: 'object',
            title: 'Internal Local Link',

            icon: FaLink,
            component: InternalLocalRenderer,

            options: {
              modal: {
                width: 'medium',
              },
            },
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [{ type: 'page' }, { type: 'soloGuidePage' }, { type: 'flexListingPage' }],
              },
              {
                name: 'hashId',
                title: 'Hash ID',
                type: 'string',
                description:
                  'Please enter the ID you would like to jump to. Do not include the # symbol.',
              },
              {
                name: 'parameter',
                title: 'Parameter(s)',
                type: 'string',
                description: 'Please enter all needed parameters for the link',
              },
              {
                title: 'Open in new tab?',
                name: 'newTab',
                type: 'boolean',
                initialValue: false,
                validation: (Rule) => [Rule.required().error('Field is required')],
              },
            ],
          },
          {
            name: 'internalGlobal',
            type: 'object',
            title: 'Internal Global Link',

            icon: GiLinkedRings,
            component: InternalGlobalRenderer,

            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: false,
                    scheme: ['https', 'http'],
                  }),
              },
              {
                title: 'Open in new tab?',
                name: 'newTab',
                type: 'boolean',
                initialValue: false,
                validation: (Rule) => [Rule.required().error('Field is required')],
              },
            ],
          },
          {
            title: 'External Link',
            name: 'externalLink',
            type: 'object',

            icon: FaExternalLinkAlt,
            component: ExternalLinkRenderer,

            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: false,
                    scheme: ['https', 'http', 'mailto', 'tel'],
                  }),
              },
              {
                title: 'Open in new tab?',
                name: 'newTab',
                type: 'boolean',
                initialValue: true,
                validation: (Rule) => [Rule.required().error('Field is required')],
              },
              {
                title: 'rel=noreferrer?',
                name: 'noreferrer',
                type: 'boolean',
                initialValue: false,
                validation: (Rule) => [Rule.required().error('Field is required')],
              },
            ],
          },
          {
            title: 'Affiliate Link',
            name: 'affiliateLink',
            type: 'object',

            icon: TbFileDollar,
            component: AffiliateLinkRenderer,

            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: false,
                    scheme: ['https', 'http', 'mailto', 'tel'],
                  }),
              },
            ],
          },
          {
            name: 'jumpLink',
            type: 'object',
            title: 'Page Jump Link',

            icon: MdLink,
            component: JumpLinkRenderer,

            fields: [
              {
                name: 'hashId',
                title: 'Hash ID',
                type: 'string',
                description:
                  'Please enter the ID you would like to jump to. Do not include the # symbol.',
              },
            ],
          },
        ],
      },
    },
    { type: 'illustration' },
    { type: 'clickableImage' },
    { type: 'btnBlockMui' },
  ],
};
