export default function makeAddUser({ makeUser, usersDB, hashPassword }) {
  return async function addUser({ fullName, email, password, phone, roleName, roleId }) {
    const user = await usersDB.getUser({ email })
    if (user) return Promise.resolve(null)
    
    const passwordHash = await hashPassword(password || '123456')
    const newUser = makeUser({
      fullName,
      email,
      passwordHash,
      phone,
      roleName,
      roleId
    })
    await usersDB.addUser(newUser)
    return Promise.resolve(newUser)
  }
}