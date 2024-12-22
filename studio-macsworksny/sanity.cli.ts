import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  studioHost: 'macsironworks',
  api: {
    projectId: 'sa41a56a',
    dataset: 'production',
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
