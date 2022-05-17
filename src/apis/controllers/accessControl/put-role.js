export default ({ updateRole }) => {
  return async function putRole(req, res) {
    console.log(req.body, req.params, 'put-role')
    const id = req.params.id
    const { name, permissions } = req.body
    try {
      const updatedRole = await updateRole({ id, name, permissions })
      res.code(200).send(updatedRole)
    } catch(err) {
      console.log(err)
      res.code(400).send({ message: err.message })
    }
  }
}