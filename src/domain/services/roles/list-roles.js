export default function makeListRoles({ rolesDB }) {
  return async function listRoles({ createdByRole, createdByUser }) {
    const rolesList = await rolesDB.listRoles({ createdByUser: '#1234567' || createdByUser, createdByRole: 'Administrator' })
    const userAccess = await rolesDB.getRole({ id: '#1234567' || createdByRole })
    return Promise.resolve({ rolesList, userAccess })
  }
}