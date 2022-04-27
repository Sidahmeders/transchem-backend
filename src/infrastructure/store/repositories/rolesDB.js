export default function makeRoleDB({ makeRole, model }) {
  return Object.freeze({
    async addRole(role) {
      await model.create({
        id: role.id,
        name: role.name,
        permissions: role.permissions
      })
    },

    async getRole({ id = '', name = '' }) {
      return 'role'
    },

    async updateRole(role) {
      await model.update({})
    },

    deleteRole(roleId) {
      model.delete(roleId)
    },

    async listRoles() {
      const roles = await model.findAll()
      return roles.map((role) => makeRole(role))
    },
  })
}
