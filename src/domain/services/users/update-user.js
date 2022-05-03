export default function makeUpdateUser({ makeUser, usersDB }) {
  return async function updateUser({ id, email, fullName, phone, roleName, roleId, isAuthorized }) {
    const user = await usersDB.getUser({ id, email })
    if (user === null) return Promise.resolve(null)

    const updatedUser = makeUser(Object.assign({ ...user }, {
      fullName: fullName || user.fullName,
      email: email || user.email,
      phone: phone || user.phone,
      roleName: roleName || user.roleName,
      roleId: roleId || user.roleId,
      isAuthorized
    }))
    await usersDB.updateUser(updatedUser, { id })
    return Promise.resolve(updatedUser)
  }
}