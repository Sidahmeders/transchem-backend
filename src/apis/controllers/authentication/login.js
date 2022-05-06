export default ({ signInUser, buildAbility }) => {
  return async function login(req, res) {
    console.log(req.body, 'login')
    const { email, password } = req.body
    try {
      if (!email || !password) throw Error('please fill in the required fields')      
      const user = await signInUser({ email, password })
      if (user === null) throw Error('please verify your "email" and "password" and try again')

      const ability = user.isAdmin ?
        [{ action: "manage", subject: "all" }] :
        await buildAbility({ role: user.userRole })

      const tempAbility =  [{action: 'read', subject: 'home'}] // FIXME: THIS IS JUST FOR TESTING A BUG ON THE FRONTEND.
      
      res.status(200).json({ ...user, ability: ability || tempAbility })
    } catch(err) {
      console.log(err)
      res.status(400).json({ message: err.message })
    }
  }
}