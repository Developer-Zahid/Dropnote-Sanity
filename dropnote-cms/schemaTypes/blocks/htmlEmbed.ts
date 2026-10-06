import {defineField, defineType} from 'sanity'
import {TerminalIcon} from '@sanity/icons/Terminal'

// Raw HTML/JS embed (forms, widgets, iframes) rendered as-is on the site, like Webflow's Embed element.
export const htmlEmbedType = defineType({
  name: 'htmlEmbed',
  title: 'Code embed',
  type: 'object',
  icon: TerminalIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Internal name, only shown in the Studio (e.g. "Typeform signup").',
    }),
    defineField({
      name: 'code',
      title: 'HTML',
      type: 'code',
      description:
        'Rendered as-is on the page, including <script> tags. Only paste embed code from sources you trust.',
      options: {
        language: 'html',
        languageAlternatives: [{title: 'HTML', value: 'html'}],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {label: 'label', code: 'code.code'},
    prepare: ({label, code}) => ({
      title: label || code?.slice(0, 60) || 'Code embed',
      subtitle: 'Code embed',
    }),
  },
})
