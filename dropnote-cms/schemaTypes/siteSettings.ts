import {ALL_FIELDS_GROUP, defineField, defineType} from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      }
    },
  },
  groups: [
    {
      name: 'seo',
      title: 'SEO & Metadata',
    },
    {
      name: 'components',
      title: 'Components',
    },
    {
      ...ALL_FIELDS_GROUP,
      // hidden: true,
    },
  ],
  fields: [
    // Group SEO & Metadata
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Ideal length is 50–60 characters.',
      initialValue: 'Dropnote | Visual Feedback Tool.',
      group: 'seo',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Ideal length is 150-160 characters.',
      initialValue:
        'Find UI flaws on live websites while collaborating with your team. Leave contextual feedback, tag visual issues—no screenshots needed.',
      group: 'seo',
    }),
    defineField({
      name: 'openGraphImage',
      title: 'Open Graph Image',
      type: 'image',
      description:
        'Image displayed when sharing the link on social media (1200x630px recommended).',
      group: 'seo',
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'Favicon displayed in the browser tab (32x32px recommended).',
      group: 'seo',
    }),
    // Group Components
    defineField({
      name: 'navbarLogo',
      title: 'Navbar Logo',
      type: 'image',
      group: 'components',
    }),
    defineField({
      name: 'footerLogo',
      title: 'Footer Logo',
      type: 'image',
      group: 'components',
    }),
  ],
})
