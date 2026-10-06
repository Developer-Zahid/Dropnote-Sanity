import {defineField, defineType} from 'sanity'
import {ThListIcon} from '@sanity/icons/ThList'

// Wraps the @sanity/table "table" type with a caption and header-row option.
export const dataTableType = defineType({
  name: 'dataTable',
  title: 'Table',
  type: 'object',
  icon: ThListIcon,
  fields: [
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Shown above the table and read by screen readers.',
    }),
    defineField({
      name: 'hasHeaderRow',
      title: 'First row is a header',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'table',
      title: 'Table',
      type: 'table',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {caption: 'caption', rows: 'table.rows'},
    prepare: ({caption, rows}) => ({
      title: caption || 'Table',
      subtitle: `Table · ${rows?.length ?? 0} rows`,
    }),
  },
})
