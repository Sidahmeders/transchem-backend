export default ({ listRoles }) => {
  return async function getRoles(req, res) {
    console.log(req.body, 'get-roles')
    const { userId } = req.query
    try {
      const roles = await listRoles({ createdByUser: userId })
      res.code(200).send(roles)
    } catch(err) {
      console.log(err)
      res.code(400).send({ message: err.message })
    }
  }
}