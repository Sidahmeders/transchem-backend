export default function makeTokensDB({ makeToken, model }) {
  return Object.freeze({
    async addToken(token) {
      await model.create(token)
    },

    async getToken(query) {
      const token = query.id ?
        await model.findById(query.id) :
        await model.findOne(query)
      return token ? makeToken(token) : null
    },

    async updateToken(token, query) {
      const updatedToken = query.id ?
        await model.findByIdAndUpdate(query.id, token) :
        await model.findOneAndUpdate(query, token)
      return makeToken(updatedToken)
    },

    async updateManyTokens(update, query) {
      const updatedTokens = await model.updateMany(query, update)
      return updatedTokens
    }
  })
}