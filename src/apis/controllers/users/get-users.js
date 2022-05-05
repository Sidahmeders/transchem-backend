export default ({ listUsers }) => {
  return async function getUsers(req, res) {
    console.log(req.query, 'get-users')
    const { id, email } = req.query
    try {
      const usersList = await listUsers({ id, email })
      res.status(200).json(usersList)
    } catch(err) {
      console.log(err)
      res.status(400).json({ message: err.message })
    }
  }
}