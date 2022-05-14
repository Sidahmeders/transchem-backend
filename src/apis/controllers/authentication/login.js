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
        await buildAbility({ role: user.userRole }) ||
        [{action: 'read', subject: 'home'}] // FIXME: THIS IS JUST FOR TESTING A BUG ON THE FRONTEND.
      
      const { access, refresh } = user.authTokens
      delete user.authTokens
      const accessAge = Date.parse(access.expires) - Date.now()
      const refreshAge = Date.parse(refresh.expires) - Date.now()

      res.cookie("accessToken", access.token, { httpOnly: true, maxAge: accessAge })
      res.cookie("refreshToken", refresh.token, { httpOnly: true, maxAge: refreshAge })
      
      res.status(200).json({ ...user, ability })
    } catch(err) {
      console.log(err)
      res.status(400).json({ message: err.message })
    }
  }
}