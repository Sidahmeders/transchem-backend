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
      res.code(200).send(newRole)
    } catch(err) {
      console.log(err)
      res.code(400).send({ message: err.message })
    }
  }
}