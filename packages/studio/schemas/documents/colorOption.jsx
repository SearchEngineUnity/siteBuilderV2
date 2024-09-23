import React from 'react';
import { defineType, defineField } from 'sanity';
import { MdColorize } from 'react-icons/md';
import { determineColor } from '../../lib/helperFunctions';

export default defineType({
  name: 'colorOption',
  type: 'document',
  title: 'Color Option',
  icon: MdColorize,
  fields: [
    defineField({
      name: 'seuID',
      title: 'SEU ID',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'color',
      title: 'Select Color',
      type: 'color',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
  ],
  preview: {
    select: {
      label: 'label',
      color: 'color',
    },
    prepare({ label, color }) {
      return {
        title: label,
        media: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              backgroundColor: determineColor(color),
              fontSize: '24px',
              alignItems: 'center',
            }}
          />
        ),
      };
    },
  },
});
