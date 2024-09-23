import { defineType, defineField } from 'sanity';
import { TbNewSection } from 'react-icons/tb';

export default defineType({
  title: 'Product Card Flex Segment',
  name: 'productCardFlexSegment',
  type: 'object',
  icon: TbNewSection,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      title: 'Title Heading Level',
      name: 'headingLevel',
      type: 'string',
      options: {
        list: [
          { title: 'H2', value: 'h2' },
          { title: 'H3', value: 'h3' },
          { title: 'H4', value: 'h4' },
          { title: 'Non-Heading', value: 'p' },
        ],
      },
      initialValue: 'p',
    }),
    defineField({
      name: 'content',
      title: 'Segment Content',
      type: 'noHeadingsPT',
    }),
    defineField({
      title: 'Hide Segment',
      name: 'hide',
      type: 'hideProductCardFlexSegment',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Product Card Flex Segment',
      };
    },
  },
});
