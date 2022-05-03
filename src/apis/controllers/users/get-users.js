export default ({ listUsers }) => {
  return async function getUsers(req, res) {
    console.log(req.body, 'get-users')
    try {
      const usersList = await listUsers()
      res.status(200).json(usersList)
    } catch(err) {
      console.log(err)
      res.status(400).json({ message: err.message })
    }
  }
}