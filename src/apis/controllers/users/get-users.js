export default ({ listUsers }) => {
  return async function getUsers(req, res) {
    console.log(req.query, 'get-users')
    const { id, email } = req.query
    try {
      const usersList = await listUsers({ id, email })
      res.code(200).send(usersList)
    } catch(err) {
      console.log(err)
      res.code(400).send({ message: err.message })
    }
  }
}