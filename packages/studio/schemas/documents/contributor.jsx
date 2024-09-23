import { defineType, defineField, defineArrayMember } from 'sanity';
import { MdContactPage } from 'react-icons/md';

export default defineType({
  name: 'contributor',
  type: 'document',
  title: 'Contributor',
  icon: MdContactPage,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      validation: (Rule) => [
        Rule.custom((value) => (value?.asset ? true : 'An image is required')),
      ],
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'minPT',
    }),
    defineField({
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
    }),
    defineField({
      name: 'linkedIn',
      title: 'LinkedIn URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['https'],
        }),
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [defineArrayMember({ type: 'socialAccount' })],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => [Rule.required().error('Field is required')],
    }),
  ],
  preview: {
    select: {
      name: 'name',
      photo: 'photo.asset',
    },
    prepare({ name, photo }) {
      return {
        title: name,
        media: photo,
      };
    },
  },
});
