export default ({ updateRole }) => {
  return async function putRole(req, res) {
    console.log(req.body, 'put-role')
    const { id, name, permissions } = req.body
    try {
      const updatedRole = await updateRole({ id, name, permissions })
      res.status(200).json(updatedRole)
    } catch(err) {
      console.log(err)
      res.status(400).json({ message: err.message })
    }
  }
}