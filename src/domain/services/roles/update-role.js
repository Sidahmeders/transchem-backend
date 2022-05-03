export default function makeUpdateRole({ rolesDB }) {
  return async function updateRole({ id, name, permissions }) {
    const updatedRole = await rolesDB.updateRole({ name, permissions }, { id })
    return Promise.resolve(updatedRole)
  }
}