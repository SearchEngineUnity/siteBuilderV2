// import { ImBooks } from 'react-icons/im';

// export default {
//   name: 'paginatedListingSection',
//   title: 'Paginated Listing Section',
//   type: 'object',
//   icon: ImBooks,
//   fieldsets: [
//     {
//       name: 'design',
//       title: 'Presentation Settings',
//       options: {
//         collapsible: true,
//         collapsed: true,
//       },
//     },
//   ],
//   fields: [
//     {
//       name: 'seuID',
//       title: 'seuID',
//       type: 'string',
//       validation: (Rule) => [
//         Rule.required().error('Field is required'),
//         // add a custom rule for isUnique
//       ],
//     },
//     {
//       name: 'idTag',
//       title: 'ID',
//       type: 'string',
//       description:
//         'Add ID to the selected string. Please only use alphanumeric characters and hypen and do not start the string with a number.',
//     },
//     {
//       name: 'listItemType',
//       title: 'List Item Type',
//       type: 'string',
//       options: {
//         list: ['Solo Guide Page'],
//       },
//       initialValue: 'Solo Guide Page',
//       validation: (Rule) => [Rule.required().error('Field is required')],
//     },
//     {
//       name: 'header',
//       type: 'header',
//       title: 'Header',
//     },
//     {
//       name: 'footer',
//       title: 'Footer',
//       type: 'minPT',
//     },
//     {
//       name: 'count',
//       type: 'number',
//       title: 'Count',
//       fieldset: 'design',
//       description: 'Number of tiles per page',
//       initialValue: 12,
//       validation: (Rule) => [
//         Rule.required().error('Field is required'),
//         Rule.integer().error('Value must be an integer'),
//       ],
//     },
//     {
//       name: 'headerAlignment',
//       title: 'Header Text Alignment',
//       type: 'string',
//       description: 'This only apply to the header above the LR blocks.',
//       options: {
//         list: ['left', 'center', 'right'],
//         layout: 'radio',
//         direction: 'horizontal',
//       },
//       fieldset: 'design',
//       initialValue: 'left',
//       validation: (Rule) => [Rule.required().error('Field is required')],
//     },
//     {
//       name: 'footerAlignment',
//       title: 'Footer Text Alignment',
//       type: 'string',
//       description: 'This only apply to the footer below the LR blocks.',
//       options: {
//         list: ['left', 'center', 'right'],
//         layout: 'radio',
//         direction: 'horizontal',
//       },
//       fieldset: 'design',
//       initialValue: 'left',
//       validation: (Rule) => [Rule.required().error('Field is required')],
//     },
//     {
//       name: 'designSettings',
//       title: 'Design Settings',
//       type: 'reference',
//       to: [{ type: 'sectionDesignSet' }],
//       fieldset: 'design',
//     },
//   ],
//   preview: {
//     select: {
//       subtitle: '_type',
//       id: 'seuID',
//     },
//     prepare({ id, subtitle }) {
//       return {
//         subtitle,
//         title: `ID: ${id}`,
//       };
//     },
//   },
// };
