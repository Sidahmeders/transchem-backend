// TODO: This import will be removed later for Separation of concerns
import { rolesDB } from '../../../infrastructure/store/index.js'

export default ({ signInUser }) => {
  return async function login(req, res) {
    console.log(req.body, 'login')
    const { email, password } = req.body
    try {
      if (!email || !password) throw Error('please fill in the required fields')      
      const userData = await signInUser({ email, password })
      if (userData === null) throw Error('please verify your "email" and "password" and try again')

      const ability = await abilityBuilder()
      ability.push({ action: 'read', subject: 'home' })

      userData.user = Object.assign({ ...userData.user }, { ability })

      res.status(200).json({ ...userData.user, accessToken: userData.accessToken })
    } catch(err) {
      console.log(err)
      res.status(400).json({ message: err.message })
    }
  }
}

// TODO: This Method will be moved later for Separation of concerns
async function abilityBuilder(roleId = '#13') {
  const userRole = await rolesDB.getRole({ id: roleId })
  const userPermissions = userRole?.permissions
  const ability = []
  userPermissions.map((p) => (Object.entries(p.actions).map(([key, val]) => (val ? ability.push({ action: key, subject: p.name }) : null))))
  return ability
}