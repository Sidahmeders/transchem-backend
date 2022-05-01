export default function makeRoleDB({ makeRole, model }) {
  return Object.freeze({
    async addRole(role) {
      await model.create({
        id: role.id,
        imagesURL: role.imagesURL,
        name: role.name,
        createdByRole: role.createdByRole,
        createdByUser: role.createdByUser,
        permissions: role.permissions
      })
    },

    async getRole({ id = '', name = '' }) {
      const role = id ?
        await model.findById(id) :
        await model.findOne({ name: name })
      return role ? makeRole(role) : null
    },

    async updateRole(role, query = { name: 'operator', createdByUser: '#1234' }) {
      await model.findOneAndUpdate(query, {
        id: role.id,
        name: role.name,
        createdByRole: role.createdByRole,
        createdByUser: role.createdByUser,
        permissions: role.permissions
      })
    },

    async deleteRole(roleId) {
      await model.findByIdAndDelete(roleId)
    },

    async listRoles(query = { createdByRole: 'Administrator', createdByUser: '#1234567' }) {
      const roles = await model.find(query)
      return roles
      // return roles.map((role) => makeRole(role))
    },
  })
}