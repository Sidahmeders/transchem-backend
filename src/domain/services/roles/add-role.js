export default function makeAddRole({ makeRole, rolesDB }) {
  return async function addRole({ name, createdByUser, permissions }) {
    const newRole = makeRole({
      name,
      createdByUser,
      permissions
    })
    await rolesDB.addRole(newRole)
    return Promise.resolve(newRole)
  }
}