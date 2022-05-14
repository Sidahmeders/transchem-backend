export default function makeTokensDB({ makeToken, model }) {
  return Object.freeze({
    async addToken(token) {
      const newToken = makeToken(token)
      await model.create(newToken)
    },

    async getToken(query) {
      const token = query.id ?
        await model.findById(query.id) :
        await model.findOne(query)
      return token ? makeToken(token) : null
    },
  })
}