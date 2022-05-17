export default ({ signInUser, buildAbility }) => {
  return async function login(req, res) {
    console.log(req.body, 'login')
    const { email, password } = req.body
    try {
      if (!email || !password) throw Error('please fill in the required fields')

      const user = await signInUser({ email, password })
      if (user === null) throw Error('please verify your "email" and "password" and try again')

      const ability = user.isAdmin ?
        [{ action: 'manage', subject: 'all' }] :
        await buildAbility({ role: user.userRole }) ||
        [{action: 'read', subject: 'home'}] // FIXME: THIS IS JUST FOR TESTING A BUG ON THE FRONTEND.
      
      const { access, refresh } = user.authTokens
      delete user.authTokens
      
      res.cookie('accessToken', access.token, { path: '/', httpOnly: true, maxAge: access.expiry })
      res.cookie('refreshToken', refresh.token, { path: '/', httpOnly: true, maxAge: refresh.expiry })

      res.code(200).send({ ...user, ability })
    } catch(err) {
      console.log(err)
      res.code(400).send({ message: err.message })
    }
  }
}