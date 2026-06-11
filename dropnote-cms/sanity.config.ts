import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { presentationTool } from "sanity/presentation";
import { resolve } from './src/sanity/lib/resolve'

export default defineConfig({
  name: 'default',
  title: 'DropNote CMS',

  projectId: 'fsaqqobg',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      resolve,
      previewUrl: 'http://localhost:4321',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
