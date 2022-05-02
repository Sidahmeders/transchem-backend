export default ({ rolesDB }) => {
  return async function updateRoles(req, res) {
    const { id, name, permissions } = req.body
    
    try {
      const updatedRole = await rolesDB.updateRole({ name, permissions }, { id })
      res.status(200).json(updatedRole)
    } catch(err) {
      console.log(err)
      res.status(400).json({ message: err.message })
    }
  }
}