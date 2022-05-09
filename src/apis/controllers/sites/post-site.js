export default ({ addSite }) => {
  return async function postSite(req, res) {
    console.log(req.body, 'post-site')
    const { siteGoeJson } = req.body
    try {
      const createdSite = await addSite(siteGoeJson)
      res.status(200).json(createdSite)
    } catch(err) {
      console.log(err)
      res.status(400).json({ message: err.message })
    }
  }
}