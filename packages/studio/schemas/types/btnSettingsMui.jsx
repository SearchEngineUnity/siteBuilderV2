import React from 'react';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'btnSettingsMui',
  title: 'Button Settings MUI',
  type: 'object',
  fields: [
    defineField({
      name: 'variant',
      title: `Choose between 'Filled', 'Outlined', or 'Text only'.`,
      type: 'string',
      options: {
        list: [
          { title: 'Filled', value: 'contained' },
          { title: 'Outlined', value: 'outlined' },
          { title: 'Text only', value: 'text' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'contained',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'padding',
      title: 'Button padding',
      type: 'string',
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
      initialValue: '0px',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'borderRadius',
      title: 'Button Border Radius',
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
      initialValue: '4px',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'border',
      title: 'Border Style',
      type: 'string',
      description: (
        <>
          Accept string as per border CSS variable. If no color is specified then it will be the
          same as button text color.{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/border"
            target="_blank"
            rel="noreferrer"
          >
            Resource link
          </a>
        </>
      ),
    }),
    defineField({
      name: 'disableElevation',
      title: 'Disable elevation',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'disableFocusRipple',
      title: 'Disable focus ripple',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'disableRipple',
      title: 'Disable ripple',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'fullWidth',
      title: 'Make button full width',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
  ],
});
