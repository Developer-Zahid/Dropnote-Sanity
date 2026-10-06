import {defineField, defineType} from 'sanity'
import {PlayIcon} from '@sanity/icons/Play'

const SUPPORTED_VIDEO = /^https?:\/\/(www\.)?(youtube\.com|youtu\.be|youtube-nocookie\.com|vimeo\.com|player\.vimeo\.com)\//

export const videoEmbedType = defineType({
  name: 'videoEmbed',
  title: 'Video',
  type: 'object',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'url',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube or Vimeo link, e.g. https://www.youtube.com/watch?v=…',
      validation: (Rule) =>
        Rule.required().custom((url) =>
          !url || SUPPORTED_VIDEO.test(url) ? true : 'Only YouTube and Vimeo URLs are supported',
        ),
    }),
    defineField({
      name: 'title',
      title: 'Accessible title',
      type: 'string',
      description: 'Describes the video for screen readers.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'url'},
    prepare: ({title, subtitle}) => ({title: title || 'Video', subtitle: `Video · ${subtitle ?? ''}`}),
  },
})
