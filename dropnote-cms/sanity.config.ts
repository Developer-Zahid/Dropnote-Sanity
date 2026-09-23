import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { presentationTool } from "sanity/presentation";
import { schemaTypes } from './schemaTypes'
import { structure } from './structure'
import { resolve } from './src/sanity/lib/resolve'

export default defineConfig({
  name: 'default',
  title: 'DropNote CMS',

  projectId: 'fsaqqobg',
  dataset: 'production',

  plugins: [
    structureTool({ structure }),
    presentationTool({
      resolve,
      previewUrl: 'http://localhost:4321',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
