export default ({ addUser }) => {
  return async function register(req, res) {
    console.log(req.body, 'register')
    const { fullName, email, password, phone, roleName, roleId } = req.body
    try {
      if (!fullName || !email || !roleName || !roleId) throw Error('please fill in the required fields')
      const newUser = await addUser({ 
        fullName,
        email,
        password,
        phone,
        roleName,
        roleId
      })
      if (newUser === null) throw Error('please change the user "Email" and try again')
      res.status(200).json(newUser)
    } catch(err) {
      console.log(err)
      res.status(400).json({ message: err.message })
    }
  }
}