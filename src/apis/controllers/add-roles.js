export default ({ rolesDB, makeRole }) => {
  return async function addRoles(req, res) {
    const { name, createdByRole, createdByUser, permissions } = req.body
    
    try {
      const newRole = makeRole({
        name,
        createdByRole,
        createdByUser,
        permissions
      })
      await rolesDB.addRole(newRole)
      
      res.status(200).json(newRole)
    } catch(err) {
      console.log(err.message)
      res.status(400).json({ message: err.message })
    }
  }
}