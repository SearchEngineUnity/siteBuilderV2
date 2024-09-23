import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'muiTypeStyleSetBtn',
  title: 'Mui Typography - Btn',
  type: 'object',
  fieldsets: [
    {
      name: 'set',
      options: {
        collapsible: false,
        collapsed: false,
        columns: 4,
      },
    },
  ],
  fields: [
    defineField({
      name: 'fontFamily',
      title: 'Font Family',
      type: 'string',
      fieldset: 'set',
      initialValue: 'Roboto, Helvetica, Arial, sans-serif',
    }),
    defineField({
      name: 'fontWeight',
      title: 'Font Weight',
      type: 'number',
      options: {
        list: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      initialValue: 500,
      fieldset: 'set',
    }),
    defineField({
      name: 'fontSize',
      title: 'Font Size',
      type: 'string',
      initialValue: '0.875rem',
      fieldset: 'set',
    }),
    defineField({
      name: 'lineHeight',
      title: 'Line Height',
      type: 'number',
      initialValue: 1.75,
      fieldset: 'set',
    }),
    defineField({
      name: 'letterSpacing',
      title: 'Letter Spacing',
      type: 'string',
      initialValue: '0.02857em',
      fieldset: 'set',
    }),
  ],
});
