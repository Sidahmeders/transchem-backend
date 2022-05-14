/**
 * Verify token and return token doc (or throw an error if it is not valid)
 * @param {string} token
 * @param {string} type
 * @returns {Promise<Token>}
 */
export default function makeVerifyToken({ verifyJwt, jwtConfig, tokensDB }) {
  return async function verifyToken(token, type) {
    const payload = verifyJwt(token, jwtConfig.JWT_SECRET)
    const tokenDoc = await tokensDB.getToken({ token, type, user: payload.sub, blacklisted: false })
    if (!tokenDoc) throw new Error('Token not found')
    return tokenDoc
  }
}