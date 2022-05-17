export default ({ addSite }) => {
  return async function postSite(req, res) {
    console.log(req.body, 'post-site')
    const { siteGoeJson } = req.body
    try {
      const createdSite = await addSite(siteGoeJson)
      res.code(200).send(createdSite)
    } catch(err) {
      console.log(err)
      res.code(400).send({ message: err.message })
    }
  }
}