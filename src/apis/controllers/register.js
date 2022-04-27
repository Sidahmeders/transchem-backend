export default ({ usersDB }) => {
  return async function register(req, res) {
    console.log(req.body)
    const { username, email, password } = req.body
    try {
      if (!username || !email || !password) throw Error('please fill in the required fields')

      

    } catch(err) {
      console.log(err.message)
      res.status(400).json({ message: err.message })
    }
  }
}