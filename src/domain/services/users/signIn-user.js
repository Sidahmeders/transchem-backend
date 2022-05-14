export default function makeSignInUser({ usersDB, rolesDB, verifyPassword, generateAuthTokens }) {
  return async function signInUser({ email, password }) {
    const user = await usersDB.getUser({ email })
    if (user === null) return Promise.resolve(null)
    const isValidPassword = await verifyPassword(password, user.passwordHash)
    if (!isValidPassword) return Promise.resolve(null)
    const userRole = await rolesDB.getRole({ id: user.roleId })
    const authTokens = await generateAuthTokens(user)
    return Promise.resolve({ ...user, userRole, authTokens })
  }
}