export default function makeAddSite({ makeSite, sitesDB }) {
  return async function addSite({ type, geometry, properties }) {
    const newSite = makeSite({ type, geometry, properties })
    await sitesDB.addSite({ type, geometry, properties })
    return Promise.resolve(newSite)
  }
}