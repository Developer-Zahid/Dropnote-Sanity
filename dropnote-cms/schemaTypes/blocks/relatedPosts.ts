import {defineArrayMember, defineField, defineType} from 'sanity'
import {DocumentsIcon} from '@sanity/icons/Documents'

// Pulls existing posts from the CMS into the body as cards.
export const relatedPostsType = defineType({
  name: 'relatedPosts',
  title: 'Related posts',
  type: 'object',
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Heading',
      type: 'string',
      initialValue: 'Related articles',
    }),
    defineField({
      name: 'posts',
      title: 'Posts',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'post'}]})],
      validation: (Rule) => Rule.required().min(1).max(3).unique(),
    }),
  ],
  preview: {
    select: {title: 'title', post0: 'posts.0.title', posts: 'posts'},
    prepare: ({title, post0, posts}) => ({
      title: title || 'Related posts',
      subtitle: `Related posts · ${posts?.length ?? 0}${post0 ? ` (${post0}…)` : ''}`,
    }),
  },
})
