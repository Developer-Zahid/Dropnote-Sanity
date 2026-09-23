import {defineField, defineType, ALL_FIELDS_GROUP} from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  // preview: {
  //   select: {
  //     title: 'seo.metaTitle',
  //   },
  //   prepare({title}) {
  //     return {
  //       title: title || 'Home Page',
  //     }
  //   },
  // },
  preview: {
    prepare() {
      return {
        title: 'Home Page',
      }
    },
  },
  groups: [
    {
      name: 'seo',
      title: 'SEO & Metadata',
    },
    {
      name: 'sections',
      title: 'Sections',
      default: true,
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
      group: 'seo',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Ideal length is 150-160 characters.',
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
    // Group Sections
    defineField({
      name: 'sectionHero',
      title: 'Hero Section',
      type: 'object',
      group: 'sections',
      options: {collapsible: true, collapsed: false},
      fields: [
        {
          name: 'eyebrow',
          title: 'Eyebrow Text',
          type: 'string',
          description: 'e.g., #1 UI FEEDBACK TOOL...',
        },
        {name: 'heading', title: 'Main Heading', type: 'string'},
        {name: 'subheading', title: 'Subheading', type: 'text', rows: 3},
        {
          name: 'ctaText',
          title: 'Call to Action Text',
          type: 'string',
          initialValue: 'Join the Waitlist',
        },
        {name: 'heroImage', title: 'Hero Image', type: 'image', options: {hotspot: true}},
      ],
    }),
    defineField({
      name: 'sectionFeatures',
      title: 'Features Section',
      type: 'object',
      group: 'sections',
      options: {collapsible: true, collapsed: true},
      fields: [
        {
          name: 'eyebrow',
          title: 'Eyebrow Text',
          type: 'string',
          description: 'e.g., For web pros',
        },
        {
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          description: 'e.g., Features designed for real UI reviews',
        },
        {
          name: 'featureCards',
          title: 'Feature Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'icon', title: 'Icon Image', type: 'image'},
                {name: 'title', title: 'Card Title', type: 'string'},
                {name: 'description', title: 'Card Description', type: 'text', rows: 2},
                {
                  name: 'linkText',
                  title: 'Link Text',
                  type: 'string',
                  initialValue: 'Join the waitlist',
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'sectionHighlight',
      title: 'Highlight Section',
      type: 'object',
      group: 'sections',
      options: {collapsible: true, collapsed: true},
      fields: [
        {
          name: 'eyebrow',
          title: 'Eyebrow Text',
          type: 'string',
          description: 'e.g., Faster QA',
        },
        {
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          description: 'e.g., Faster QA with Smart Website Inspect',
        },
        {name: 'featureImage', title: 'Feature Image', type: 'image', options: {hotspot: true}},
      ],
    }),
    defineField({
      name: 'sectionIntegrations',
      title: 'Integrations Section',
      type: 'object',
      group: 'sections',
      options: {collapsible: true, collapsed: true},
      fields: [
        {
          name: 'eyebrow',
          title: 'Eyebrow Text',
          type: 'string',
          description: 'e.g., Integrations',
        },
        {name: 'heading', title: 'Section Heading', type: 'string'},
        {
          name: 'integrationCards',
          title: 'Integration Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'logo', title: 'Integration Logo', type: 'image'},
                {
                  name: 'name',
                  title: 'Integration Name',
                  type: 'string',
                  description: 'e.g., Slack',
                },
                {name: 'description', title: 'Description', type: 'string'},
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'sectionBottomCta',
      title: 'Bottom Call to Action',
      type: 'object',
      group: 'sections',
      options: {collapsible: true, collapsed: true},
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          description: 'e.g., Get Dropnote early access',
        },
        {name: 'subheading', title: 'Subheading', type: 'string'},
        {
          name: 'ctaText',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Join the Waitlist',
        },
      ],
    }),
  ],
})