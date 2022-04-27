import { makeUser }  from '../../../domain/entities/index.js'

export default function makeUsersDB({ model }) {
  return Object.freeze({
    async addUser(user) {
      await model.create({
        id: user.id,
        email: user.email,
        passwordHash: user.passwordHash,
        displayName: user.displayName,
        isVerified: user.isVerified,
        createdAt: user.createdAt,
        role: user.role,
      })
    },

    async getUser({ id = '', email = '' }) {
      return 'user'
    },

    async updateUser(user) {
      await model.update({
        email: user.email,
      })
    },

    deleteUser(userId) {
      model.delete(userId)
    },

    async listUsers() {
      const users = await model.findAll()
      return users.map((user) => makeUser(user))
    },
  })
}
