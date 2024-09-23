import { defineType, defineField } from 'sanity';
import { HiOutlineColorSwatch } from 'react-icons/hi';

export default defineType({
  name: 'btnDesignMui',
  title: 'Button Design - MUI',
  type: 'document',
  icon: HiOutlineColorSwatch,
  fields: [
    defineField({
      name: 'name',
      title: 'Design Name',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'settings',
      title: 'Button Settings',
      type: 'btnSettingsMui',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'colors',
      title: 'Color Settings',
      type: 'muiBtnColorSet',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'bgImage',
      title: 'Background Image',
      type: 'image',
      hidden: ({ document }) => document?.settings?.variant !== 'contained',
    }),
    defineField({
      name: 'typography',
      title: 'Typography Settings',
      type: 'muiTypeStyleSetBtn',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      variant: 'settings.variant',
    },
    prepare({ name, variant }) {
      return {
        title: name,
        subtitle: `Variant: ${variant}`,
      };
    },
  },
});
