import {defineArrayMember, defineField, defineType} from 'sanity'
import {ImagesIcon} from '@sanity/icons/Images'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Image gallery',
  type: 'object',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative text',
              type: 'string',
              validation: (Rule) => Rule.warning().required(),
            }),
            defineField({name: 'caption', title: 'Caption', type: 'string'}),
          ],
        }),
      ],
      options: {layout: 'grid'},
      validation: (Rule) => Rule.required().min(2),
    }),
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'number',
      options: {list: [2, 3, 4], layout: 'radio', direction: 'horizontal'},
      initialValue: 2,
    }),
    defineField({
      name: 'caption',
      title: 'Gallery caption',
      type: 'string',
    }),
  ],
  preview: {
    select: {images: 'images', caption: 'caption', media: 'images.0'},
    prepare: ({images, caption, media}) => ({
      title: caption || 'Image gallery',
      subtitle: `Gallery · ${images?.length ?? 0} images`,
      media,
    }),
  },
})
