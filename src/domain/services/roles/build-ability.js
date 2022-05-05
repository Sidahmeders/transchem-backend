export default function makeBuildAbility({ rolesDB }) {
  return async function buildAbility({ role, roleId }) {
    const userRole = role ? role : await rolesDB.getRole({ id: roleId })
    if (userRole === null) return Promise.resolve(null)
    const userPermissions = userRole.permissions
    const ability = []
    userPermissions.map((p) => (Object.entries(p.actions).map(([key, val]) => (val ? ability.push({ action: key, subject: p.name }) : null))))
    return Promise.resolve(ability)
  }
}