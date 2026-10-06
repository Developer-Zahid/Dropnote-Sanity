import {defineArrayMember, defineField} from 'sanity'
import {LinkIcon} from '@sanity/icons/Link'
import {DocumentTextIcon} from '@sanity/icons/DocumentText'

// Shared rich-text annotations, used by the post body and by nested rich text (e.g. callouts).

export const linkAnnotation = defineArrayMember({
  name: 'link',
  title: 'External link',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'href',
      title: 'URL',
      type: 'url',
      description: 'Full URL, relative path (/blog) or mailto:/tel: link.',
      validation: (Rule) =>
        Rule.required().uri({scheme: ['http', 'https', 'mailto', 'tel'], allowRelative: true}),
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Open in new tab',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'nofollow',
      title: 'Add rel="nofollow"',
      type: 'boolean',
      description: 'Use for sponsored, affiliate or untrusted links.',
      initialValue: false,
    }),
  ],
})

export const internalLinkAnnotation = defineArrayMember({
  name: 'internalLink',
  title: 'Link to post',
  type: 'object',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'reference',
      title: 'Post',
      type: 'reference',
      to: [{type: 'post'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
