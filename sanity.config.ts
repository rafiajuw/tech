// sanity-studio/sanity.config.ts
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'My Blog Sanity Studio',
  projectId: '7ldco732', 
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})