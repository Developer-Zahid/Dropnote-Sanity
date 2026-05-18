import {defineField, defineType} from 'sanity'

export const landingPageType = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Document Title',
      type: 'string',
      description: 'Used to identify this page in the Sanity Studio (e.g., "Home Page - Draft 1")',
    }),
    
    // 1. HERO SECTION
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'eyebrow', title: 'Eyebrow Text', type: 'string', description: 'e.g., #1 UI FEEDBACK TOOL...' },
        { name: 'heading', title: 'Main Heading', type: 'string' },
        { name: 'subheading', title: 'Subheading', type: 'text', rows: 3 },
        { name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } },
        { name: 'ctaText', title: 'Call to Action Text', type: 'string', initialValue: 'Join the Waitlist' },
      ]
    }),

    // 2. FEATURES GRID SECTION
    defineField({
      name: 'features',
      title: 'Features Section',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'eyebrow', title: 'Eyebrow Text', type: 'string', description: 'e.g., For web pros' },
        { name: 'heading', title: 'Section Heading', type: 'string', description: 'e.g., Features designed for real UI reviews' },
        {
          name: 'featureCards',
          title: 'Feature Cards',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'title', title: 'Card Title', type: 'string' },
              { name: 'description', title: 'Card Description', type: 'text', rows: 2 },
              { name: 'icon', title: 'Icon Image', type: 'image' },
              { name: 'linkText', title: 'Link Text', type: 'string', initialValue: 'Join the waitlist >' }
            ]
          }]
        }
      ]
    }),

    // 3. HIGHLIGHT SECTION (Faster QA)
    defineField({
      name: 'highlight',
      title: 'Highlight Section',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'eyebrow', title: 'Eyebrow Text', type: 'string', description: 'e.g., Faster QA' },
        { name: 'heading', title: 'Section Heading', type: 'string', description: 'e.g., Faster QA with Smart Website Inspect' },
        { name: 'featureImage', title: 'Feature Image', type: 'image', options: { hotspot: true } },
      ]
    }),

    // 4. INTEGRATIONS SECTION
    defineField({
      name: 'integrations',
      title: 'Integrations Section',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'eyebrow', title: 'Eyebrow Text', type: 'string', description: 'e.g., Integrations' },
        { name: 'heading', title: 'Section Heading', type: 'string' },
        {
          name: 'integrationCards',
          title: 'Integration Cards',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'name', title: 'Integration Name', type: 'string', description: 'e.g., Slack' },
              { name: 'description', title: 'Description', type: 'string' },
              { name: 'logo', title: 'Integration Logo', type: 'image' }
            ]
          }]
        }
      ]
    }),

    // 5. BOTTOM CTA SECTION
    defineField({
      name: 'bottomCta',
      title: 'Bottom Call to Action',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'heading', title: 'Heading', type: 'string', description: 'e.g., Get Dropnote early access' },
        { name: 'subheading', title: 'Subheading', type: 'string' },
        { name: 'ctaText', title: 'Button Text', type: 'string', initialValue: 'Join the Waitlist' }
      ]
    })
  ],
})