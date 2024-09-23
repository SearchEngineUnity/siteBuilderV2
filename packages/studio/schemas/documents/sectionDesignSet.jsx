import React from 'react';
import { defineType, defineField } from 'sanity';
import { HiOutlineColorSwatch } from 'react-icons/hi';

export default defineType({
  name: 'sectionDesignSet',
  type: 'document',
  title: 'Section Design Set',
  icon: HiOutlineColorSwatch,
  fieldsets: [
    {
      name: 'background',
      title: 'Background Design',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'foreground',
      title: 'Foreground Design',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'spacing',
      title: 'Spacing',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'background',
      title: 'Background Color',
      type: 'reference',
      fieldset: 'background',
      description: 'This will apply a background color',
      to: [{ type: 'colorOption' }],
    }),
    defineField({
      name: 'bgImage',
      title: 'Background Image',
      type: 'image',
      fieldset: 'background',
      description:
        'Background Image will overlay on top of Background Color. The background image is removed for mobile unless it is a repeat background image',
    }),
    defineField({
      name: 'bleed',
      title: 'Set Background to Full Bleed',
      fieldset: 'background',
      description: 'The background (color or image) extends all the way to the edge of the screen',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'repeat',
      title: 'Repeat Background Image',
      fieldset: 'background',
      description:
        'Background image will be repeated in all directions out from the initial centered background image',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'foreground',
      title: 'Foreground Color',
      type: 'reference',
      fieldset: 'foreground',
      to: [{ type: 'colorOption' }],
    }),
    defineField({
      name: 'link',
      title: 'Link Color',
      type: 'reference',
      fieldset: 'foreground',
      to: [{ type: 'colorOption' }],
    }),
    defineField({
      name: 'heading',
      title: 'Heading Color',
      type: 'reference',
      fieldset: 'foreground',
      to: [{ type: 'colorOption' }],
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading Color',
      type: 'reference',
      fieldset: 'foreground',
      to: [{ type: 'colorOption' }],
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle Color',
      type: 'reference',
      fieldset: 'foreground',
      to: [{ type: 'colorOption' }],
    }),
    defineField({
      name: 'footer',
      title: 'Footer Color',
      type: 'reference',
      fieldset: 'foreground',
      to: [{ type: 'colorOption' }],
    }),
    defineField({
      name: 'caption',
      title: 'Image Caption Color',
      type: 'reference',
      fieldset: 'foreground',
      to: [{ type: 'colorOption' }],
    }),
    defineField({
      name: 'outerPadding',
      title: 'Section Outer Padding',
      type: 'paddingSet',
      fieldset: 'spacing',
      description: (
        <>
          Accept string as per padding CSS variable.{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding"
            target="_blank"
            rel="noreferrer"
          >
            Resource link
          </a>
        </>
      ),
    }),
    defineField({
      name: 'innerPadding',
      title: 'Section Inner Padding',
      type: 'paddingSet',
      fieldset: 'spacing',
      description: (
        <>
          Accept string as per padding CSS variable.{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding"
            target="_blank"
            rel="noreferrer"
          >
            Resource link
          </a>
        </>
      ),
    }),
    defineField({
      name: 'borderRadius',
      title: 'Section Border Radius',
      type: 'string',
      description: (
        <>
          Accept string as per border-radius CSS variable.{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius"
            target="_blank"
            rel="noreferrer"
          >
            Resource link
          </a>
        </>
      ),
      hidden: ({ document }) => !!document?.bleed,
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
});
