export default ({ usersDB, makeUser, hashPassword }) => {
  return async function register(req, res) {
    console.log(req.body)
    const { fullName, email, password, phone, role } = req.body
    
    try {
      if (!fullName || !email) throw Error('please fill in the required fields')

      const newUser = makeUser({
        fullName,
        email,
        passwordHash: hashPassword(password || '1234abcd#CHEM'),
        phone,
        roleName: role.label,
        roleId: role.id
      })
      await usersDB.addUser(newUser)

      res.status(200).json(newUser)
    } catch(err) {
      console.log(err)
      res.status(400).json({ message: err.message })
    }
  }
}