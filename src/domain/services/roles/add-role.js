export default function makeAddRole({ makeRole, rolesDB }) {
  return async function addRole({ name, createdByRole, createdByUser, permissions }) {
    const newRole = makeRole({
      name,
      createdByRole,
      createdByUser,
      permissions
    })
    await rolesDB.addRole(newRole)
    return Promise.resolve(newRole)
  }
}