export default ({ addRole }) => {
  return async function postRole(req, res) {
    console.log(req.body, 'post-role')
    const { name, createdByUser, permissions } = req.body
    try {
      const newRole = await addRole({
        name,
        createdByUser,
        permissions
      })
      res.status(200).json(newRole)
    } catch(err) {
      console.log(err)
      res.status(400).json({ message: err.message })
    }
  }
}