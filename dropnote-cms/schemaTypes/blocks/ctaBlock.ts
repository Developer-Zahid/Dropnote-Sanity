import {defineField, defineType} from 'sanity'
import {SparklesIcon} from '@sanity/icons/Sparkles'

// Call-to-action banner styled like the home page's bottom CTA.
export const ctaBlockType = defineType({
  name: 'ctaBlock',
  title: 'Call to action',
  type: 'object',
  icon: SparklesIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Get Dropnote early access',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'buttonText',
      title: 'Button text',
      type: 'string',
      initialValue: 'Join the waitlist',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonHref',
      title: 'Button link',
      type: 'url',
      initialValue: '/#join-the-waitlist',
      validation: (Rule) =>
        Rule.required().uri({scheme: ['http', 'https', 'mailto'], allowRelative: true}),
    }),
  ],
  preview: {
    select: {title: 'heading', subtitle: 'buttonText'},
    prepare: ({title, subtitle}) => ({title, subtitle: `Call to action · ${subtitle ?? ''}`}),
  },
})
