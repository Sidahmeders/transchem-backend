export default ({ listRoles }) => {
  return async function getRoles(req, res) {
    console.log(req.body, 'get-roles')
    const { userId } = req.query
    try {
      const roles = await listRoles({ createdByUser: userId })
      res.status(200).json(roles)
    } catch(err) {
      console.log(err)
      res.status(400).json({ message: err.message })
    }
  }
}