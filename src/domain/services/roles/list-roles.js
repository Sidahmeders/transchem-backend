export default function makeListRoles({ rolesDB }) {
  return async function listRoles({ createdByUser }) {
    const rolesList = await rolesDB.listRoles({ createdByUser })
    return Promise.resolve(rolesList)
  }
}