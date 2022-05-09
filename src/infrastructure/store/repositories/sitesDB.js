export default function makeSitesDB({ makeSite, model }) {
  return Object.freeze({
    async addSite(site) {
      await model.create(site)
    },

    async deleteSite(siteId) {
      await model.findByIdAndDelete(siteId)
    },

    async listSites(query) {
      const sites = await model.store
      return sites
    },
  })
}