import {defineField, defineType} from 'sanity'
import {RemoveIcon} from '@sanity/icons/Remove'

export const dividerType = defineType({
  name: 'divider',
  title: 'Divider',
  type: 'object',
  icon: RemoveIcon,
  fields: [
    defineField({
      name: 'style',
      title: 'Style',
      type: 'string',
      options: {
        list: [
          {title: 'Line', value: 'line'},
          {title: 'Dots', value: 'dots'},
          {title: 'Space only', value: 'space'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'line',
    }),
  ],
  preview: {
    select: {style: 'style'},
    prepare: ({style}) => ({title: 'Divider', subtitle: style ?? 'line'}),
  },
})
