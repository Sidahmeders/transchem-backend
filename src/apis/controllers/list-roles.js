export default ({ rolesDB }) => {
  return async function listRoles(req, res) {
    try {
      const rolesList = await rolesDB.list()
      res.status(200).json({ rolesList })
    } catch(err) {
      console.log(err.message)
      res.status(400).json({ message: err.message })
    }
  }
}