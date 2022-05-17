export default ({ listSites }) => {
  return async function getSites(req, res) {
    console.log(req.query, 'get-sites')
    try {
      const sitesList = await listSites()
      res.code(200).send(sitesList)
    } catch(err) {
      console.log(err)
      res.code(400).send({ message: err.message })
    }
  }
}