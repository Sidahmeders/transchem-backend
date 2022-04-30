export default ({ rolesDB }) => {
  return async function listRoles(req, res) {
    try {
      const rolesList = await rolesDB.listRoles()
      const userAccess = await rolesDB.getRole({ id: '#1234567' })
      res.status(200).json({ userAccess, rolesList })
    } catch(err) {
      console.log(err.message)
      res.status(400).json({ message: err.message })
    }
  }
}