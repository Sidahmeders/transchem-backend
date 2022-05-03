import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const JWT_KEY = 'some-strong-key'

export const getUniqueId = () => `id::${Date.now()}::${Math.floor(Math.random() * 99999)}`

export const buildImages = (count) => new Array(count).fill('https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg')

export const buildPermissions = (permissions) => JSON.parse(JSON.stringify(permissions)).map((permission) => {
  const newActions = Object.keys(permission.actions).reduce((prev, curr) => ({...prev, [curr]: Boolean(Math.round(Math.random() * 1))}), {})  
  return Object.assign(permission, { actions: newActions })
})

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  return String(hash)
}

export const verifyPassword = async ({ givenPassword, storedPassword }) => {
  const isMatch = await bcrypt.compare(givenPassword, storedPassword)
  return Boolean(isMatch)
}

export const issueToken = (user) => {
  // genrate a jwToken
  const token = jwt.sign(
    {
      id: user._id,
      role: user.role
    },
    JWT_KEY,
    { expiresIn: '7d'}
  )
  return token
}

export const verifyToken = (token) => {
  const decodedToken = jwt.verify(token, JWT_KEY)
  return decodedToken
}
