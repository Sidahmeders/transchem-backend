import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import MomentJs from './lib/moment.js'

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

export const verifyPassword = async (rawPassword, passwordHash) => {
  const isMatch = await bcrypt.compare(rawPassword, passwordHash)
  return Boolean(isMatch)
}

export const issueJwt = (userId, expires, type, secret) => {
  const payload = {
    sub: userId,
    iat: MomentJs.unix(),
    exp: MomentJs.unix(expires),
    type,
  }
  return jwt.sign(payload, secret)
}

export const verifyJwt = (token, secret) => {
  const payload = jwt.verify(token, secret)
  return payload
}
