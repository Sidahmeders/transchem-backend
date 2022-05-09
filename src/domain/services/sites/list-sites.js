export default function makeListSites({ sitesDB }) {
  return async function listSites() {
    const sitesList = await sitesDB.listSites()
    return Promise.resolve(sitesList)
  }
}