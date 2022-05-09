export default ({ listSites }) => {
  return async function getSites(req, res) {
    console.log(req.query, 'get-sites')
    try {
      const sitesList = await listSites()
      res.status(200).json(sitesList)
    } catch(err) {
      console.log(err)
      res.status(400).json({ message: err.message })
    }
  }
}