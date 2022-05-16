/**
 * @param {string} token
 * @param {string} type
 * @returns {Promise<Token>}
 */
export default function makeVerifyRefreshToken({ tokensDB, jwtConfig, verifyJwt }) {
  return async function verifyRefreshToken(token) {
    const payload = verifyJwt(token, jwtConfig.JWT_SECRET)
    const [type, userId] = [payload.type, payload.sub]
    const tokenDoc = await tokensDB.getToken({ token, type, userId })
    if (!tokenDoc) throw new Error('Refresh Token is not found')

    // handle Automatic reuse detection by blacklisting all tokens
    if (tokenDoc.blacklisted) {
      tokensDB.updateManyTokens({ userId }, { blacklisted: true })
      return null
    }
    // safeguards your app from replay attacks by generating a new refresh token
    const blacklistedToken = await tokensDB.updateToken({ id: tokenDoc.id }, { blacklisted: true })
    return blacklistedToken
  }
}