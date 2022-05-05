export default function makeUsersDB({ makeUser, model }) {
  return Object.freeze({
    async addUser(user) {
      await model.create(user)
    },

    async getUser({ id, email }) {
      const user = id ?
        await model.findById(id) :
        await model.findOne({ email: email })
      return user ? makeUser(user) : null
    },

    async updateUser(user, query) {
      const updatedUser = query.id ?
        await model.findByIdAndUpdate(query.id, user) :
        await model.findOneAndUpdate(query, user)
      return makeUser(updatedUser)
    },

    async deleteUser({ id, email }) {
      id ?
      await model.findByIdAndDelete(id) :
      await model.deleteOne({ email: email })
    },

    async listUsers(query) {
      const users = query ?
        await model.find(query) :
        await model.find({}) // find all documents
      return users.map((user) => makeUser(user))
    },
  })
}
