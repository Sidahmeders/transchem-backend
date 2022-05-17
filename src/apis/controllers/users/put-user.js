export default ({ updateUser }) => {
  return async function putUser(req, res) {
    console.log(req.body, 'put-user')
    const id = req.params.id
    const { fullName, password, phone, roleName, roleId, isAuthorized } = req.body
    try {
      const updatedUser = await updateUser({
        id,
        fullName,
        password,
        phone,
        roleName,
        roleId,
        isAuthorized
      })
      res.code(200).send(updatedUser)
    } catch(err) {
      console.log(err)
      res.code(400).send({ message: err.message })
    }
  }
}