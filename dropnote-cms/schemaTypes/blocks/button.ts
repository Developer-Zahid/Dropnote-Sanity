import {defineField, defineType} from 'sanity'
import {LaunchIcon} from '@sanity/icons/Launch'

export const buttonType = defineType({
  name: 'button',
  title: 'Button',
  type: 'object',
  icon: LaunchIcon,
  fields: [
    defineField({
      name: 'text',
      title: 'Button text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Link',
      type: 'url',
      description: 'Full URL, relative path (/blog) or anchor (/#join-the-waitlist).',
      validation: (Rule) =>
        Rule.required().uri({scheme: ['http', 'https', 'mailto', 'tel'], allowRelative: true}),
    }),
    defineField({
      name: 'variant',
      title: 'Style',
      type: 'string',
      options: {
        list: [
          {title: 'Primary', value: 'primary'},
          {title: 'Secondary', value: 'secondary'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'primary',
    }),
    defineField({
      name: 'align',
      title: 'Alignment',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'left',
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Open in new tab',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {title: 'text', subtitle: 'href'},
    prepare: ({title, subtitle}) => ({title: title || 'Button', subtitle: `Button · ${subtitle ?? ''}`}),
  },
})
