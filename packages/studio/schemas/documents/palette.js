import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'palette',
  type: 'document',
  title: 'Palette',
  fieldsets: [
    {
      name: 'common',
      title: 'Common Color Setting Pack',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'text',
      title: 'Text Color Setting Pack',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'background',
      title: 'Background Color Setting Pack',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'brand',
      title: 'Brand Color Setting Packs',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'highlightBox',
      title: 'Highlight Box Color Setting Packs',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    defineField({
      name: 'black',
      title: 'Common Dark Color Setting',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      fieldset: 'common',
    }),
    defineField({
      name: 'white',
      title: 'Common Light Color Setting',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      fieldset: 'common',
    }),
    defineField({
      name: 'primaryText',
      title: 'Text Primary Color Setting',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      fieldset: 'text',
    }),
    defineField({
      name: 'secondaryText',
      title: 'Text Secondary Color Setting',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      fieldset: 'text',
    }),
    defineField({
      name: 'disabledText',
      title: 'Text Disabled Color Setting',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      fieldset: 'text',
    }),
    defineField({
      name: 'divider',
      title: 'Divider Color Setting',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      fieldset: 'background',
    }),
    defineField({
      name: 'paper',
      title: 'Background Paper Color Setting',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      fieldset: 'background',
    }),
    defineField({
      name: 'default',
      title: 'Background Default Color Setting',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      fieldset: 'background',
    }),
    defineField({
      name: 'primary',
      title: 'Primary Color Setting Pack',
      type: 'muiColorSet',
      description: 'Used to generate the primary accent color for websites, press materials, etc',
      fieldset: 'brand',
    }),
    defineField({
      name: 'secondary',
      title: 'Secondary Color Setting Pack',
      type: 'muiColorSet',
      description: 'Used to generate the secondary accent color for websites, press materials, etc',
      fieldset: 'brand',
    }),
    defineField({
      name: 'definition',
      title: 'Definition Highlight Box',
      type: 'hlbColorSet',
      fieldset: 'highlightBox',
    }),
    defineField({
      name: 'dyk',
      title: 'Did You Know Highlight Box',
      type: 'hlbColorSet',
      fieldset: 'highlightBox',
    }),
    defineField({
      name: 'important',
      title: 'Important Highlight Box',
      type: 'hlbColorSet',
      fieldset: 'highlightBox',
    }),
    defineField({
      name: 'proTip',
      title: 'Pro Tip Highlight Box',
      type: 'hlbColorSet',
      fieldset: 'highlightBox',
    }),
    defineField({
      name: 'warning',
      title: 'Warning Highlight Box',
      type: 'hlbColorSet',
      fieldset: 'highlightBox',
    }),
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: `Palette`,
      };
    },
  },
});
