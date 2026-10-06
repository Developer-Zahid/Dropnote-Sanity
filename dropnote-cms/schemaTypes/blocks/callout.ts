import {defineArrayMember, defineField, defineType} from 'sanity'
import {BulbOutlineIcon} from '@sanity/icons/BulbOutline'
import {internalLinkAnnotation, linkAnnotation} from './annotations'

export const calloutType = defineType({
  name: 'callout',
  title: 'Callout',
  type: 'object',
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: 'tone',
      title: 'Tone',
      type: 'string',
      options: {
        list: [
          {title: 'Info', value: 'info'},
          {title: 'Tip', value: 'tip'},
          {title: 'Success', value: 'success'},
          {title: 'Warning', value: 'warning'},
          {title: 'Danger', value: 'danger'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'info',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Content',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
            ],
            annotations: [linkAnnotation, internalLinkAnnotation],
          },
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'title', tone: 'tone', body: 'body'},
    prepare({title, tone, body}) {
      const text = body?.[0]?.children?.map((child: {text?: string}) => child.text).join('')
      return {
        title: title || text || 'Callout',
        subtitle: `Callout · ${tone ?? 'info'}`,
      }
    },
  },
})
