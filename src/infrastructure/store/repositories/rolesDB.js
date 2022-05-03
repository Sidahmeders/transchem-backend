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

    async updateRole(role, query) {
      const update = {
        name: role.name,
        permissions: role.permissions
      }
      const updatedRole = query.id ?
        await model.findByIdAndUpdate(query.id, update) :
        await model.findOneAndUpdate(query, update)
      return makeRole(updatedRole)
    },

    async deleteRole(roleId) {
      await model.findByIdAndDelete(roleId)
    },

    async listRoles(query) {
      const roles = await model.find(query)
      return roles //.map((role) => makeRole(role))
    },
  })
}