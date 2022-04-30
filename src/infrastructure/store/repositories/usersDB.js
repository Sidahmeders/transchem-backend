export default function makeUsersDB({ makeUser, model }) {
  return Object.freeze({
    async addUser(user) {
      await model.create({
        id: user.id,
        roleName: user.roleName,
        roleId: user.roleId,
        email: user.email,
        fullName: user.fullName,
        description: user.description,
        passwordHash: user.passwordHash,
        createdAt: user.createdAt,
        isAdmin: user.isAdmin
      })
    },

    async getUser({ id = '', email = '' }) {
      const user = id ?
        await model.findById(id) :
        await model.findOne({ email: email })
      return user ? makeUser(user) : null
    },

    async updateUser(user, query = { email: 'basic@gmail.com' }) {
      await model.findOneAndUpdate(query, {
        id: user.id,
        roleName: user.roleName,
        roleId: user.roleId,
        email: user.email,
        fullName: user.fullName,
        description: user.description,
        passwordHash: user.passwordHash,
        createdAt: user.createdAt
      })
    },

    async deleteUser({ id = '', email = '' }) {
      id ?
      await model.findByIdAndDelete(id) :
      await model.deleteOne({ email: email })
    },

    async listUsers(query = { fullName: 'john doe' }) {
      const users = query ?
        await model.find(query) :
        await model.find({}) // find all documents
      return users.map((user) => makeUser(user))
    },
  })
}
