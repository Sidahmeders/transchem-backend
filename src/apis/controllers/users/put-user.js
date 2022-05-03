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
      res.status(200).json(updatedUser)
    } catch(err) {
      console.log(err)
      res.status(400).json({ message: err.message })
    }
  }
}