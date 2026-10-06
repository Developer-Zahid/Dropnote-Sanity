import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'fsaqqobg',
    dataset: 'production'
  },
  deployment: {
    // Hosted studio: https://dropnote.sanity.studio
    appId: 'h0axysm93akopolrwn00pbif',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  }
})
