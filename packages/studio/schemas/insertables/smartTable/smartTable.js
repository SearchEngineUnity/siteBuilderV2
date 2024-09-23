import { defineType, defineField, defineArrayMember } from 'sanity';
import { BsTable } from 'react-icons/bs';

export default defineType({
  name: 'smartTable',
  title: 'Smart Table',
  type: 'object',
  icon: BsTable,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Table Name',
      description: 'This is for label purpose in studio only.',
    }),
    defineField({
      name: 'colHeading',
      type: 'boolean',
      title: 'This table has a column heading',
      options: {
        layout: 'checkbox',
      },
      initialValue: false,
    }),
    defineField({
      name: 'rowHeading',
      type: 'boolean',
      title: 'This table has a row heading',
      options: {
        layout: 'checkbox',
      },
      initialValue: false,
    }),
    defineField({
      name: 'fixedFirstColumn',
      type: 'boolean',
      title: 'This table has a fixed first column',
      options: {
        layout: 'checkbox',
      },
      initialValue: false,
    }),
    defineField({
      name: 'maxWidth',
      type: 'string',
      title: 'Max Table Width',
      description: 'Must end in "px" (ex. 600px)',
    }),
    defineField({
      name: 'colgroup',
      type: 'array',
      title: 'Minimum Column Widths',
      description: `The minimum column width regardless of browser width. Must end in "px".`,
      of: [defineArrayMember({ type: 'colWidth' })],
    }),
    defineField({
      name: 'rows',
      title: 'Rows',
      type: 'array',
      of: [defineArrayMember({ type: 'rowPlus' })],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
