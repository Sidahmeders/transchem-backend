export default function makeUpdateRole({ rolesDB }) {
  return async function updateRole({ id, name, permissions }) {
    const updatedRole = await rolesDB.updateRole({ id }, { name, permissions })
    return Promise.resolve(updatedRole)
  }
}