export default function makeAddUser({ makeUser, usersDB, hashPassword }) {
  return async function addUser({ fullName, email, password, phone, role }) {
    let user = await usersDB.getUser({ email })
    if (user) return Promise.resolve(null)
    
    const passwordHash = await hashPassword(password || '1234abcd#CHEM')
    const newUser = makeUser({
      fullName,
      email,
      passwordHash,
      phone,
      roleName: role.label,
      roleId: role.id
    })
    await usersDB.addUser(newUser)
    return Promise.resolve(newUser)
  }
}