export default ({ rolesDB }) => {
  return async function listRoles(req, res) {
    const { createdByRole, createdByUser } = req.body
    try {
      const rolesList = await rolesDB.listRoles({ createdByUser: '#1234567' || createdByUser, createdByRole: 'Administrator' })
      const userAccess = await rolesDB.getRole({ id: '#1234567' || createdByRole })
      res.status(200).json({ userAccess, rolesList })
    } catch(err) {
      console.log(err.message)
      res.status(400).json({ message: err.message })
    }
  }
}