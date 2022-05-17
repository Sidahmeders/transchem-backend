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
      res.code(200).send(newUser)
    } catch(err) {
      console.log(err)
      res.code(400).send({ message: err.message })
    }
  }
}