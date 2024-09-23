import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'muiTypeStyleSet',
  title: 'Mui Typography',
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
    }),
    defineField({
      name: 'fontWeight',
      title: 'Font Weight',
      type: 'number',
      options: {
        list: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      fieldset: 'set',
    }),
    defineField({
      name: 'fontSize',
      title: 'Font Size',
      type: 'string',
      fieldset: 'set',
    }),
    defineField({
      name: 'lineHeight',
      title: 'Line Height',
      type: 'number',
      fieldset: 'set',
    }),
  ],
});
